### Create Sandbox Permissions

Gives an application permission to perform operations in sandbox mode on an LP. Only one set of sandbox permissions can exist for a given app-LP relationship.

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
            <td>loyaltyProgram</td>
            <td>The URL of the <a href="#loyalty-programs">loyalty program</a>.</td>
        </tr>
        <tr>
            <td>operations</td>
            <td>An array of operations that the applications is permitted to do in sandbox mode for the LP. Must be one or more of "mvs", "member-details", "mv-delegates", "debits", "credits", "credit-delegates".</td>
        </tr>
    </tbody>
</table>

#### Returns

The sandbox permissions object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the app or LP doesn’t exist or if an invalid operation is provided. Returns an error with SANDBOX_PERMISSIONS_ALREADY_EXIST if the loyalty program and application already have sandbox permissions configured.













