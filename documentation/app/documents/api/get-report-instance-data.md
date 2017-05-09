### Get Report Instance Data

Retrieves the data in a report instance. The data is a cached copy of what the application returned to the LCP when the report instance was created. Check the Content-Type header to determine how to process the data.

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

The report data if it exists, otherwise returns an [error](./?doc=reference-manual#errors).








