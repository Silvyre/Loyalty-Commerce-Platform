package com.points.lcp.samples.lpapi.servlets;

import java.io.IOException;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.heroku.sdk.jdbc.DatabaseUrl;

public class TransactionServlet extends HttpServlet {
	
	private static Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create();
	private static SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss.SSSSSS'Z'");
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			
			JsonObject transactionRequest = new JsonParser().parse(req.getReader()).getAsJsonObject();
			String memberId = transactionRequest.getAsJsonPrimitive("memberId").getAsString();
			Connection connection = DatabaseUrl.extract().getConnection();
			Statement stmt = connection.createStatement();
			String selectQuery = "SELECT balance FROM LPAPIUSERS WHERE memberId='"+memberId+"';";
			ResultSet rs = stmt.executeQuery(selectQuery);
			if (rs.next()) {
				int currentBalance = rs.getInt(1);
				String transactionId = UUID.randomUUID().toString();
				int amount = transactionRequest.getAsJsonPrimitive("amount").getAsInt();
				String pic = transactionRequest.getAsJsonPrimitive("pic") != null ? "'"+transactionRequest.getAsJsonPrimitive("pic").getAsString()+"'" : null;
				String transactionType = transactionRequest.getAsJsonObject("order") != null ? "'"+transactionRequest.getAsJsonObject("order").getAsJsonPrimitive("orderType").getAsString()+"'" : null;
				String transactionDate = "'"+(transactionRequest.getAsJsonObject("order") != null ? transactionRequest.getAsJsonObject("order").getAsJsonPrimitive("createdAt").getAsString() : dateFormatter.format(new Date())) +"'";
				System.out.println(transactionDate);
				stmt.executeUpdate("INSERT into LPAPITRANSACTIONS(transactionId, transactionDate,memberId,pic, transactionType, amount) values('"+transactionId+"',"+transactionDate+",'"+memberId+"',"+pic+","+transactionType+","+transactionRequest.getAsJsonPrimitive("amount").getAsInt()+");");
				stmt.executeUpdate("UPDATE LPAPIUSERS SET balance="+(currentBalance+amount)+" WHERE memberId='"+memberId+"';");
				
				JsonObject success = new JsonObject();
				success.addProperty("status", "success");
				success.addProperty("statusMessage", "SUCCESS");
				success.addProperty("transactionId", transactionId);
				resp.getWriter().write(gson.toJson(success));
			} else {
				JsonObject unknownMember = new JsonObject();
				unknownMember.addProperty("status", "failure");
				unknownMember.addProperty("statusMessage", "UNKNOWN_MEMBER");
				resp.getWriter().write(gson.toJson(unknownMember));
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
			resp.sendError(400);
		} 	

	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/csv");
		resp.setHeader("Content-Disposition", "attachment; filename=\"transactions.csv\"");
	    try
	    {
	        OutputStream outputStream = resp.getOutputStream();
	        String outputResult = "transactionId, transactionDate, memberId, amount, pic, transactionType\n";
	        outputStream.write(outputResult.getBytes());
	        Connection connection = DatabaseUrl.extract().getConnection();;
			Statement stmt = connection.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT transactionId, transactionDate, memberId, amount, pic, transactionType FROM LPAPITRANSACTIONS ORDER BY transactionDate DESC");
			while (rs.next()) {
				outputStream.write((rs.getString(1)+","+rs.getString(2)+","+rs.getString(3)+","+rs.getInt(4)+","+rs.getString(5)+","+rs.getString(6)+"\n").getBytes());
			}
	        outputStream.flush();
	        outputStream.close();
	    }
	    catch(Exception e)
	    {
	        
	    }
	}

	
}
