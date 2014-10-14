## Member Validations (MVs)

A member validation (MV) authenticates a member of a loyalty program and retrieves their balance. MVs are required before any other transactions can be performed on a member's account and each transaction requires a separate MV.

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
            <td>The application that created the transaction.</td>
        </tr>
        <tr>
            <td>balance</td>
            <td>The balance in the loyalty program member's account.</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>The first name of the loyalty program member.</td>
        </tr>
        <tr>
            <td>lastName</td>
            <td>The last name of the loyalty program member.</td>
        </tr>
        <tr>
            <td>loyaltyProgram</td>
            <td>The loyalty program involved in the transaction.</td>
        </tr>
        <tr>
            <td>memberId</td>
            <td>The member ID of the loyalty program member.</td>
        </tr>
        <tr>
            <td>password</td>
            <td>The password for the member's account (if required). For security reasons, the password is masked when retrieving MVs.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The status of the member validation. The status is always success.</td>
        </tr>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
        <tr>
            <td>updatedAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was last updated.</td>
        </tr>
        <tr>
            <td>zip</td>
            <td>The zip code or postal code for the member’s account (if required).</td>
        </tr>
    </tbody>
</table>




