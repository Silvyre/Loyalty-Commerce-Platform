## Report Instances

A report instance is a record of a request to generate a copy of an application report. The report instance contains information about when it was created and the status of the request to generate the report. If the report generation was successful, the report instance contains the content type of the report data and a link to get the report data.

#### Properties

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>contentType</td>
            <td>The content type of the data in the report instance.</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The status of the request to generate a report instance. The status can be success or failure.</td>
        </tr>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
        <tr>
            <td>updatedAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was last updated.</td>
        </tr>
    </tbody>
</table>
















