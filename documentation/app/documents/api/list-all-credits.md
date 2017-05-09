### List all Credits

Retrieves the list of all credits that the requestor has permission to access.

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
            <td>application</td>
            <td>Filters the list by application (optional).</td>
        </tr>
        <tr>
            <td>endCreatedAt</td>
            <td>Filters the list to resources created before the given <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time (optional).</td>
        </tr>
        <tr>
            <td>limit</td>
            <td>The maximum number of resources to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>
        </tr>
        <tr>
            <td>loyaltyProgram</td>
            <td>Filters the list by loyalty program (optional).</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>The starting offset when returning a list of resources (optional). Use for pagination. For example, to retrieve the second page of 10 resources, use offset=10. Defaults to 0 if not provided.</td>
        </tr>
        <tr>
            <td>startCreatedAt</td>
            <td>Filters the list to resources created at or after the given <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

A list of credits.


