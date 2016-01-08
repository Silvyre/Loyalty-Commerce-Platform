package com.points.lcp.samples.sso.servlets;

import java.io.IOException;
import java.util.Properties;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Hex;
import org.eclipse.jetty.http.HttpStatus;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.points.lcp.samples.sso.utils.LCPUtils;

public class SSORedirectServlet extends HttpServlet {

	private static Properties config = new Properties();
	static {
		try {
			config.load(SSORedirectServlet.class.getClassLoader()
					.getResourceAsStream("config.properties"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		JsonObject request = new JsonObject();
		request.addProperty("application", config.getProperty("applicationId"));
		JsonObject memberValidation = new JsonObject();
		request.add("memberValidation", memberValidation);
		populateMemberValidation(memberValidation);

		JsonObject memberValidationResponse = new JsonObject();
		request.add("memberValidationResponse", memberValidationResponse);
		populateMemberValidationResponse(memberValidationResponse);

		try {
			JsonObject response = new JsonParser().parse(
					LCPUtils.callLCP(request, config.getProperty("lpId")
							+ "/mv-delegates/", config.getProperty("macId"),
							config.getProperty("macKey"))).getAsJsonObject();

			resp.sendRedirect(config.getProperty("redirectBaseURL")
					+ req.getServletPath()
					+ "?mv="
					+ encryptMVURL(response.get("memberValidation")
							.getAsString()));
		} catch (Exception e) {
			resp.setStatus(HttpStatus.INTERNAL_SERVER_ERROR_500);
			resp.getWriter().println(e.getMessage());
		}

	}

	private String encryptMVURL(String MVURL) throws Exception {
		if (!config.containsKey("encryptyonKey")) {
			return MVURL;
		}
		byte[] keyBytes = Hex.decodeHex(config.getProperty("encryptyonKey")
				.toCharArray());
		byte[] encryptedBytes = new byte[1];
		SecretKey key = new SecretKeySpec(keyBytes, "AES");
		try {

			Cipher dataCipher = Cipher.getInstance("AES");
			dataCipher.init(Cipher.ENCRYPT_MODE, key);
			encryptedBytes = dataCipher.doFinal(MVURL.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new String(Hex.encodeHex(encryptedBytes));
	}

	private void populateMemberValidation(JsonObject memberValidation) {
		// required
		memberValidation.addProperty("memberId", "");
		memberValidation.addProperty("firstName", "");
		memberValidation.addProperty("lastName", "");

	}

	private void populateMemberValidationResponse(
			JsonObject memberValidationResponse) {

		// required
		memberValidationResponse.addProperty("balance", 0);
		memberValidationResponse.addProperty("memberId", "");
		memberValidationResponse.addProperty("firstName", "");
		memberValidationResponse.addProperty("lastName", "");
		// optional
		memberValidationResponse.addProperty("email", "");
		memberValidationResponse.addProperty("countryCode", "");
		memberValidationResponse.addProperty("membershipLevel", "");
		memberValidationResponse.addProperty("language", ""); //format is en-US
		memberValidationResponse.addProperty("currencyCode", "");
		memberValidationResponse.addProperty("accountStatus", "");
		memberValidationResponse.addProperty("accountCreationDate",""); //format YYYY-MM-DD

	}
}
