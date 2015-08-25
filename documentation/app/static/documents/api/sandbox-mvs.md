## Sandbox MVs

Each LP has a set of sandbox MVs that can be used for testing MVs in sandbox mode. If the MV request matches one of the sandbox MVs, the specified MV response or error is returned. If none of the sandbox MV requests match then UNKNOWN_MEMBER is returned.

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
            <td>sandboxResponses</td>
            <td>A list of request/response pairs. Each request matches the <a href="#mv-request-schema">MV request schema</a> for the LP. Each response can be either an MV response or an <a href="./?doc=reference-manual#errors">error code</a> of INVALID_UPSTREAM_RESPONSE, INELIGIBLE, or MAXIMUM_ATTEMPTS_EXCEEDED.</td>
        </tr>
    </tbody>
</table>








