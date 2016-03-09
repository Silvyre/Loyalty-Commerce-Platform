/*
 * Copyright 2013-2015 (c) MuleSoft, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */
package com.points.lcp.samples.lpapi.impl;

import java.nio.charset.Charset;
import java.util.Base64;

import com.points.lcp.lpapi.model.Mv;
import com.points.lcp.lpapi.model.MvResponse;
import com.points.lcp.lpapi.model.MvResponse.Status;
import com.points.lcp.lpapi.model.MvResponse.StatusMessage;
import com.points.lcp.lpapi.resource.ValidateMemberResource;

/**
 * <p>ValidateMemberResource class.</p>
 *
 * @author kor
 * @version $Id: $Id
 */
public class ValidateMemberResourceImpl implements ValidateMemberResource
{

	
    /** {@inheritDoc} */
	public PostValidateMemberResponse postValidateMember(String authorization,
			Mv entity) throws Exception {
		 // Authorization: Basic base64credentials
        String base64Credentials = authorization.substring("Basic".length()).trim();
        String credentials = new String(Base64.getDecoder().decode(base64Credentials),
                Charset.forName("UTF-8"));
        // credentials = username:password
        final String[] values = credentials.split(":",2);
		if (!"admin".equals(values[0]) || !"admin".equals(values[1]))
        {
            return PostValidateMemberResponse.withUnauthorized();
        }

		MvResponse response = new MvResponse();
		response.setBalance(1000);
		response.setAccountStatus("ACTIVE");
		response.setAccountCreationDate("2015-01-24");
		response.setMembershipLevel("GOLD");
		response.setEmail("test@acme.com");
		response.setCountryCode("US");
		response.setLanguage("en-US");
		
		response.setStatus(Status.SUCCESS);
		response.setStatusMessage(StatusMessage.SUCCESS);

        return PostValidateMemberResponse.withJsonOK(response);
	}

    
    
}