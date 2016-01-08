package com.points.lcp.samples.sso.utils;

import java.net.URL;
import java.util.Date;
import java.util.Random;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethodBase;
import org.apache.commons.httpclient.methods.EntityEnclosingMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.StringRequestEntity;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

public class LCPUtils {
	
	private static String contentType="application/json"; 
	
	public static String callLCP(JsonObject request, String url, String macId, String macKey) throws Exception{
		Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create();
		HttpClient lcpHttpClient = new HttpClient();
		String requestString = null;
		if (request != null)
			requestString = gson.toJson(request);			
		HttpMethodBase lcpCall = new PostMethod(url);
		String authorizationHeader = generateAuthorizationHeader(macId,macKey,contentType,requestString,new URL(url));		
		lcpCall.addRequestHeader("Authorization", authorizationHeader);
		lcpCall.addRequestHeader("Content-type", contentType);
		if (request != null) {
			StringRequestEntity entity=new StringRequestEntity(requestString,contentType,"UTF-8");
			((EntityEnclosingMethod)lcpCall).setRequestEntity(entity);	
		}		
		lcpHttpClient.executeMethod(lcpCall);		
		return lcpCall.getResponseBodyAsString();
	}
	
	private static String generateAuthorizationHeader(String macId, String macKey,
			String contentType, String requestBody, URL lcpURL)
			throws Exception {
		// Step 1: Generate epoch time in seconds
		String ts = "" + new Date().getTime();
		ts = ts.substring(0, ts.length() - 3);

		// Step 2: Generate nonce
		byte[] noncebytes = new byte[8];
		new Random(new Date().getTime()).nextBytes(noncebytes);
		String nonce = new String(Base64.encodeBase64(noncebytes));

		// Step 3: Generate ext
		String ext = "";
		if (requestBody != null && contentType != null) {
			ext = DigestUtils.shaHex(contentType + requestBody);
		}

		// Step 4: Build normalized request string
		String normalizedRequestString = ts + "\n" + nonce + "\nPOST\n"
				+ lcpURL.getPath() + "\n" + lcpURL.getHost() + "\n"
				+ "443" + "\n" + ext + "\n";

		// Step 5: Base64 decode the MAC key from URL-safe alphabet
		macKey = macKey.replaceAll("-", "+").replaceAll("_", "/");
		if (macKey.length() % 4 > 0) {
			macKey+="===".substring(0,4-(macKey.length() % 4));
		}
		Mac sha1_HMAC = Mac.getInstance("HmacSHA1");
		SecretKeySpec secret_key = new SecretKeySpec(Base64.decodeBase64(macKey
				.getBytes()), "HmacSHA1");
		sha1_HMAC.init(secret_key);
		String mac = new String(Base64.encodeBase64(sha1_HMAC
				.doFinal(normalizedRequestString.getBytes())));

		// Step 8: Build Authorization header
		StringBuffer authorizationHeader = new StringBuffer("MAC ");
		authorizationHeader.append("id=\"").append(macId).append("\", ");
		authorizationHeader.append("ts=\"").append(ts).append("\", ");
		authorizationHeader.append("nonce=\"").append(nonce).append("\", ");
		authorizationHeader.append("ext=\"").append(ext).append("\", ");
		authorizationHeader.append("mac=\"").append(mac).append("\"");

		return authorizationHeader.toString();
	}
}

