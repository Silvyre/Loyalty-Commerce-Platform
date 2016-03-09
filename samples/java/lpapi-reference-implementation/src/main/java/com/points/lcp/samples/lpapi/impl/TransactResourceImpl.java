package com.points.lcp.samples.lpapi.impl;

import java.nio.charset.Charset;
import java.util.Base64;

import com.points.lcp.lpapi.model.Transact;
import com.points.lcp.lpapi.model.TransactResponse;
import com.points.lcp.lpapi.model.TransactResponse.Status;
import com.points.lcp.lpapi.model.TransactResponse.StatusMessage;
import com.points.lcp.lpapi.resource.TransactResource;
import com.points.lcp.lpapi.resource.ValidateMemberResource.PostValidateMemberResponse;

public class TransactResourceImpl implements TransactResource {

	public PostTransactResponse postTransact(String authorization,
			Transact entity) throws Exception {
		 // Authorization: Basic base64credentials
        String base64Credentials = authorization.substring("Basic".length()).trim();
        String credentials = new String(Base64.getDecoder().decode(base64Credentials),
                Charset.forName("UTF-8"));
        // credentials = username:password
        final String[] values = credentials.split(":",2);
		if (!"admin".equals(values[0]) || !"admin".equals(values[1]))
        {
            return PostTransactResponse.withUnauthorized();
        }
		
		TransactResponse response = new TransactResponse();
		response.setStatus(Status.SUCCESS);
		response.setStatusMessage(StatusMessage.SUCCESS);
		response.setTransactionId(Long.toString(System.currentTimeMillis()));
		return PostTransactResponse.withJsonOK(response);
	}

}
