### Create Account Credentials

Account credentials are automatically created when you create your account. However, you can create additional credentials if you want another set or if your first set has been compromised. You must use your first set of credentials to sign the request.

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
            <td>account-id</td>
            <td>The identifier of the account to add credentials to.</td>
        </tr>
    </tbody>
</table>

#### Returns

The account credentials object if it was created successfully. Returns an error if you are not authorized to create new account credentials on this account.
