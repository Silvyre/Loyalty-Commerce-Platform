### Update Sandbox Permissions

Updates permissions for an application to perform operations in sandbox mode on an LP.

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
            <td>id</td>
            <td>The identifier of the sandbox permissions object.</td>
        </tr>
        <tr>
            <td>operations</td>
            <td>An array of operations that the applications is permitted to do in sandbox mode for the LP. Must be one or more of "mvs", "member-details", "mv-delegates", "debits", "credits", "credit-delegates".</td>
        </tr>
    </tbody>
</table>

#### Returns

The sandbox permissions object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the app or sandbox permissions object doesn’t exist or if an invalid operation is provided.













