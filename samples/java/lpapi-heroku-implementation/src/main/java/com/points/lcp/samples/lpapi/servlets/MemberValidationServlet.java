package com.points.lcp.samples.lpapi.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.heroku.sdk.jdbc.DatabaseUrl;

public class MemberValidationServlet extends HttpServlet {
	
	private static Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create();

	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			
			JsonObject mvRequest = new JsonParser().parse(req.getReader()).getAsJsonObject();
			Connection connection = DatabaseUrl.extract().getConnection();
			Statement stmt = connection.createStatement();
			String selectQuery = "SELECT "
					+"memberId, "
					+"firstName, "
					+"lastName, "
					+"balance, "
					+"email, "
					+"accountStatus, "
					+"membershipLevel, "
					+"accountCreationDate, "
					+"countryCode, "
					+"language "
				+"FROM LPAPIUSERS "
				+"WHERE memberId = '" + mvRequest.getAsJsonPrimitive("memberId").getAsString() + "' "
				+"; ";
			ResultSet rs = stmt.executeQuery(selectQuery);
			if (rs.next()) {
				JsonObject mvResponse = new JsonObject();
				mvResponse.addProperty("status", "success");				
				mvResponse.addProperty("statusMessage", "SUCCESS");
				mvResponse.addProperty("memberId", rs.getString(1));				
				mvResponse.addProperty("firstName", rs.getString(2));
				mvResponse.addProperty("lastName", rs.getString(3));
				mvResponse.addProperty("balance", new Integer(rs.getInt(4)));
				mvResponse.addProperty("email", rs.getString(5));
				mvResponse.addProperty("accountStatus", rs.getString(6));
				mvResponse.addProperty("membershipLevel", rs.getString(7));
				mvResponse.addProperty("accountCreationDate", rs.getString(8));
				mvResponse.addProperty("countryCode", rs.getString(9));
				mvResponse.addProperty("language", rs.getString(10));
				
				resp.getWriter().write(gson.toJson(mvResponse));
			} else {
				JsonObject unknownMember = new JsonObject();
				unknownMember.addProperty("status", "failure");
				unknownMember.addProperty("statusMessage", "UNKNOWN_MEMBER");
				resp.getWriter().write(gson.toJson(unknownMember));
			}	
		} catch (Exception e) {
			resp.sendError(400);
		} 		
	}
}
