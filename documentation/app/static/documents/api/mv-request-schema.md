## MV Request Schema

Each LP has an MV request schema that defines the JSON document applications must send to do an MV.

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
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>presentation</td>
            <td>Describes how to present the MV request schema to the user to obtain their loyalty program credentials. Includes localized labels for each MV request field and the order to present the fields. <a href="http://en.wikipedia.org/wiki/IETF_language_tag">IETF language tags</a> are used.</td>
        </tr>
        <tr>
            <td>schema</td>
            <td>A JSON schema that conforms to <a href="http://tools.ietf.org/html/draft-zyp-json-schema-04">JSON schema draft 4</a>.</td>
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








