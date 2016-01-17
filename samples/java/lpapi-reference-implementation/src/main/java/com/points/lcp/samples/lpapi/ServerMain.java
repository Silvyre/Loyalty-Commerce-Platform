package com.points.lcp.samples.lpapi;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.eclipse.jetty.security.ConstraintMapping;
import org.eclipse.jetty.security.ConstraintSecurityHandler;
import org.eclipse.jetty.security.HashLoginService;
import org.eclipse.jetty.security.SecurityHandler;
import org.eclipse.jetty.security.authentication.BasicAuthenticator;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.util.security.Constraint;
import org.eclipse.jetty.util.security.Credential;

import com.heroku.sdk.jdbc.DatabaseUrl;
import com.points.lcp.samples.lpapi.servlets.MemberValidationServlet;
import com.points.lcp.samples.lpapi.servlets.TransactionServlet;

public class ServerMain {
	public static void main(String[] args) throws Exception {

		Connection connection = null;
		try {
			connection = DatabaseUrl.extract().getConnection();

			Statement stmt = connection.createStatement();
			stmt.executeUpdate("CREATE TABLE IF NOT EXISTS LPAPITRANSACTIONS (transactionId varchar(255) NOT NULL,memberId varchar(255) NOT NULL,transactionType varchar(255),amount int,pic varchar(255),transactionDate date,PRIMARY KEY (transactionId))");
			stmt.executeUpdate("CREATE TABLE IF NOT EXISTS LPAPIUSERS (memberId varchar(255) NOT NULL,firstName varchar(255),lastName varchar(255),balance int,membershipLevel varchar(255),countryCode varchar(255),email varchar(255),language varchar(255),accountStatus varchar(255),accountCreationDate date,PRIMARY KEY (memberId))");
			try {
				stmt.executeUpdate("insert into LPAPIUSERS(memberId, firstName,lastName,balance,membershipLevel,accountStatus,countryCode,email,language,accountCreationDate) values('1000','John','Doe',10000,'Gold','US','john@doe.com','en-US','ACTIVE','01-01-2016');");
			} catch (Exception e) {
				
			} 
			try {
				stmt.executeUpdate("insert into LPAPIUSERS(memberId, firstName,lastName,balance,membershipLevel,accountStatus,countryCode,email,language,accountCreationDate) values('1001','Jane','Doe',100000,'Platinum','US','jane@doe.com','en-US','ACTIVE','01-01-2015');");
			} catch (Exception e) {
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (connection != null)
				try {
					connection.close();
				} catch (SQLException e) {
				}
		}

		Server server = new Server(Integer.parseInt(System.getenv("PORT")));
		ServletContextHandler lpApiHandler = new ServletContextHandler(server,
				"/");
		lpApiHandler.setSecurityHandler(getSecurityHandler());
		lpApiHandler.addServlet(MemberValidationServlet.class,
				"/validations");
		lpApiHandler.addServlet(TransactionServlet.class, "/transactions");
		server.start();

	}

	private static SecurityHandler getSecurityHandler() {

		// add authentication
		Constraint constraint = new Constraint(Constraint.__BASIC_AUTH, "user");
		constraint.setAuthenticate(true);
		constraint.setRoles(new String[] { "user", "admin" });

		// map the security constraint to the root path.
		ConstraintMapping cm = new ConstraintMapping();
		cm.setConstraint(constraint);
		cm.setPathSpec("/*");

		// create the security handler, set the authentication to Basic
		// and assign the realm.
		ConstraintSecurityHandler csh = new ConstraintSecurityHandler();
		csh.setAuthenticator(new BasicAuthenticator());
		csh.setRealmName("REALM");
		csh.addConstraintMapping(cm);

		// set the login service
		csh.setLoginService(getHashLoginService());

		return csh;

	}

	private static HashLoginService getHashLoginService() {

		// create the login service, assign the realm and read the user
		// credentials
		// from the file /tmp/realm.properties.
		HashLoginService hls = new HashLoginService();
		hls.setName("REALM");
		hls.setRefreshInterval(0);
		hls.putUser("admin", Credential.getCredential("admin"),
				new String[] { "admin" });
		return hls;
	}
}
