### Delete Account Credentials

If your account credentials have been compromised or if you no longer wish to use one of them, you can delete them. However, you must have at least one set of account credentials. You cannot delete your only set. If you want to replace your current set of credentials, first [create a new set of credentials](#create-account-credentials) before deleting your current set.

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
            <td>The identifier of the account that has the credentials.</td>
        </tr>
        <tr>
            <td>id</td>
            <td>The identifier of the account credentials to be deleted.</td>
        </tr>
    </tbody>
</table>

#### Returns

HTTP status code 204 (No Content) if successful. Otherwise, returns an [error](./?doc=reference-manual#errors).




