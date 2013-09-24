## Apps

Apps allow you to communicate with one or more loyalty programs. Apps are stored under the /apps endpoint. Use your account credentials to create one or more apps and to access your existing apps. Each app has its own set of business rules that determine which loyalty programs it can interact with, what actions it can perform, and how much each action costs.

#### Properties

<table>
    <thead>
        <tr>
            <th>Field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>description</td>
            <td>The identifier of the account to add credentials to.</td>
        </tr>
        <tr>
            <td>liveCredentials</td>
            <td>An array of live credential objects that the app can use to access the live environment.</td>
        </tr>
        <tr>
            <td>name</td>
            <td>The name of the app.</td>
        </tr>
        <tr>
            <td>sandboxCredentials</td>
            <td>An array of sandbox credential objects that the app can use to access the sandbox environment.</td>
        </tr>
    </tbody>
</table>
