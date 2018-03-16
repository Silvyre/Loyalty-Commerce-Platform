## Account Credentials

Account credentials authenticate you to perform actions on your developer account. A set of account credentials is created automatically when you create your developer account. Account credentials are the same for both sandbox and live mode. They are available at `/accounts/<account-id>/account-credentials` and are used to sign requests to `/accounts` and `/apps`.

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
            <td>macKey</td>
            <td>The MAC key is the shared secret key. It should never be shared with anyone or transmitted in any request. Keep this key secure as you would any private key.</td>
        </tr>
        <tr>
            <td>macKeyIdentifier</td>
            <td>The MAC key identifier uniquely identifies the MAC key. The MAC key identifier is sent with each request to tell the server which MAC key was used to sign the request.</td>
        </td>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
    </tbody>
</table>










