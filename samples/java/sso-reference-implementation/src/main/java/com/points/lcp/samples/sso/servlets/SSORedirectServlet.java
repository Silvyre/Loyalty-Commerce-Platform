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
					+ response.get("links").getAsJsonObject().get("self").getAsJsonObject().get("href").getAsString());
		} catch (Exception e) {
			resp.setStatus(HttpStatus.INTERNAL_SERVER_ERROR_500);
			resp.getWriter().println(e.getMessage());
		}

	}

	private void populateMemberValidation(JsonObject memberValidation) {
		//required
		JsonObject identifyingFactors = new JsonObject();
		identifyingFactors.addProperty("memberId", "1");
		identifyingFactors.addProperty("firstName", "First");
		identifyingFactors.addProperty("lastName", "Last");
		identifyingFactors.addProperty("email", "abc@abc.com");
		
		memberValidation.add("identifyingFactors", identifyingFactors);
	}
	
	private void populateMemberValidationResponse(JsonObject memberValidationResponse) {
		
		//required
		memberValidationResponse.addProperty("balance", 0);
		memberValidationResponse.addProperty("memberId", "1");
		memberValidationResponse.addProperty("firstName", "First");
		memberValidationResponse.addProperty("lastName", "Last");
		//optional
		memberValidationResponse.addProperty("email", "abc@abc.com");
		memberValidationResponse.addProperty("countryCode", "US");
		memberValidationResponse.addProperty("membershipLevel", "");
		memberValidationResponse.addProperty("language", "en-US");
		memberValidationResponse.addProperty("currencyCode", "USD");
		memberValidationResponse.addProperty("accountStatus", "");
		memberValidationResponse.addProperty("accountCreationDate", "2015-01-24"); //format YYYY-MM-DD	
		
	}
}
