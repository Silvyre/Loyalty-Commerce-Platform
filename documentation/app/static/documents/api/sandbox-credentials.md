## Sandbox Credentials

Sandbox credentials authenticate your app to perform actions on the LCP. A set of sandbox credentials is created automatically when you create your app. App credentials are different for sandbox and live mode. Sandbox credentials are available at `/apps/<app-id>/sandbox-credentials` and are used to sign requests to `/lps`.

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
            <td>macAlgorithm</td>
            <td>The MAC algorithm describes the algorithm used to create the signature.</td>
        </tr>
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








