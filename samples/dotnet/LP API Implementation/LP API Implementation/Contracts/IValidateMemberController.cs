// Template: Controller Interface (ApiControllerInterface.t4) version 3.0

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using LP_API_Implementation.LpApi.Models;


namespace LP_API_Implementation.LpApi
{
    public interface IValidateMemberController
    {

        IHttpActionResult Post(Models.ValidateMemberPostRequestContent validatememberpostrequestcontent);
    }
}
