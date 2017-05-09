### Update Account Permissions

Update the list of accounts that have permission to access the application and its resources.

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
            <td>support</td>
            <td>A list of <a href="#accounts">accounts</a> that have permission to support the application. Accounts with support permissions have read-only access to the application and all of the application’s transactions.</td>
        </tr>
    </tbody>
</table>

#### Returns

The updated account permissions if it was updated successfully. Returns an [error](./?doc=reference-manual#errors) if the application does not exist or if the validation of the JSON fields failed.












