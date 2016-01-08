package com.points.lcp.samples.sso;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;

import com.points.lcp.samples.sso.servlets.SSORedirectServlet;

public class ServerMain {
	public static void main(String[] args) throws Exception {

		Server server = new Server(7071);
		ServletContextHandler ssoRedirectHandler = new ServletContextHandler(server, "/");
		ssoRedirectHandler.addServlet(SSORedirectServlet.class, "/");
		server.start();

	}
}
