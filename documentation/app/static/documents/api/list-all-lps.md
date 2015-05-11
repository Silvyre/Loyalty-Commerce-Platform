### List all LPs

Retrieves the list of all LPs in the platform. Requests using live or sandbox credentials only return LPs that the app has permission to access in live or sandbox mode.

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
            <td>limit</td>
            <td>The maximum number of LPs to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>The starting offset when returning a list of LPs (optional). Use for pagination. For example, to retrieve the second page of 10 LPs, use offset=10. Defaults to 0 if not provided.</td>
        </tr>
        <tr>
            <td>partnerName</td>
            <td>Filters the list by the partner associated with the loyalty program (optional). Includes results for all languages.</td>
        </tr>
    </tbody>
</table>

#### Returns

A list of LP objects.






