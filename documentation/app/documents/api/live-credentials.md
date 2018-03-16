## Live Credentials

Live credentials authenticate your app to perform actions on the LCP in live mode. App credentials are different for sandbox and live mode. Live credentials are created by Points when your app is promoted to live mode. Live credentials are available at `/apps/<app-id>/live-credentials` and are used to sign requests to `/lps` in live mode. You cannot create or delete live credentials.

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
        </tr>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
    </tbody>
</table>







