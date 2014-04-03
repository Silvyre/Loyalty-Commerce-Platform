### Get a Report Instance

Retrieves the details of a report instance. The report instance contains a timestamp of when the report instance was created and the status of the request to generate the report instance. If the report instance was successful, get the data link to retrieve the report data.

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
        <tr>
            <td>id</td>
            <td>The identifier of the report instance.</td>
        </tr>
    </tbody>
</table>

#### Returns

The report instance if it exists, otherwise returns an [error](./?doc=reference-manual#errors).






