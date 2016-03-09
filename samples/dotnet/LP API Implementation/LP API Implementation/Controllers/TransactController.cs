// Template: Controller Implementation (ApiControllerImplementation.t4) version 3.0

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using LP_API_Implementation.LpApi.Models;

namespace LP_API_Implementation.LpApi
{
    public partial class TransactController : ITransactController
    {

				/// <param name="transactpostrequestcontent"></param>
		/// <returns>TransactResponse</returns>
        public IHttpActionResult Post(Models.TransactPostRequestContent transactpostrequestcontent)
        {
            var authHeader = Request.Headers.Authorization;
            if (authHeader != null && authHeader.Scheme == "Basic")
            {
                string encodedUsernamePassword = authHeader.ToString().Substring("Basic ".Length).Trim();

                //the coding should be iso or you could use ASCII and UTF-8 decoder
                System.Text.Encoding encoding = System.Text.Encoding.GetEncoding("iso-8859-1");
                string usernamePassword = encoding.GetString(Convert.FromBase64String(encodedUsernamePassword));
                int seperatorIndex = usernamePassword.IndexOf(':');

                string username = usernamePassword.Substring(0, seperatorIndex);
                string password = usernamePassword.Substring(seperatorIndex + 1);

                if (username == "admin" && password == "admin")
                {
                    // TODO: implement Post - route: transact/
                    var result = new TransactResponse();

                    result.TransactionId = "123456";

                    result.Status = Status.success;
                    result.StatusMessage = StatusMessage.SUCCESS;

                    return Ok(result);
                }
                else
                {
                    return Unauthorized();
                }

            }
            else
            {
                return Unauthorized();
            }

        }

    }
}
