### Create an Account

Create a new developer account to get started and obtain your account credentials. This is the only action that does not require authorization. Creating your account will return your account credentials that you can start using immediately to develop against the platform.

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
            <td>email</td>
            <td>Your email address (required). Provide a valid email address so that we can verify you are the owner of the account.</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>Your first name (optional).</td>
        </tr>
        <tr>
            <td>lastName</td>
            <td>Your last name (optional).</td>
        </tr>
        <tr>
            <td>organizationName</td>
            <td>Your organization (optional).</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>Your phone number (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

The account object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the email already exists for another account.




