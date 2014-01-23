## MV Delegates

An MV delegate is a member validation that a loyalty program created for another application. MV delegates are used for Single Sign-On (SSO) behaviour. When a loyalty program application wants to redirect an authenticated member to a 3rd-party application, the loyalty program application can create an MV delegate so that the other application doesn’t need to re-authenticate the user.

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
            <td>application</td>
            <td>The application that has permission to access the member validation.</td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>A link to the member validation that the application can access.</td>
        </tr>
    </tbody>
</table>








