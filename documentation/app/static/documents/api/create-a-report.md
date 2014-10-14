### Create a Report

Applications can publish reports that can be accessed by other users of the LCP. Create a report to register a new report with the LCP. Provide a name and description for your report as well as a URL where the LCP can get the report data when it is requested by a user.

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
            <td>description</td>
            <td>The description of the report (optional).</td>
        </tr>
        <tr>
            <td>name</td>
            <td>The name of the report.</td>
        </tr>
        <tr>
            <td>url</td>
            <td>The URL to access the report. Must be HTTPS.</td>
        </tr>
    </tbody>
</table>

#### Returns

The report object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the name is not provided or if the URL is not a valid HTTPS URL.








