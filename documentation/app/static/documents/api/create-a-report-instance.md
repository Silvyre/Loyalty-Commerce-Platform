### Create a Report Instance

Create a report instance to generate a copy of a report. Creating a report instance triggers the LCP to perform a GET on the URL provided in the report definition. If the GET is successful, the response body is the data for the report. Currently, the LCP only supports data with a Content-Type of application/json. The LCP keeps a copy of the data so the report instance can be retrieved later.

#### Parameters

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>app-id</td>
            <td>The identifier of the application.</td>
        </tr>
        <tr>
            <td>report-id</td>
            <td>The identifier of the report.</td>
        </tr>
    </tbody>
</table>

#### Returns

The report instance if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the application or report does not exist. If the report instance was created, the status field indicates the progress in retrieving the report data from the application URL. A status of “success” indicates the report data is ready. A status is “failure” means one of the following:
<ul>
  <li>The LCP could not connect to the URL provided in the report definition</li>
  <li>The URL did not respond within 30 seconds</li>
  <li>The URL did not return a 200 response</li>
  <li>The Content-Type of the response was not application/json</li>
</ul>















