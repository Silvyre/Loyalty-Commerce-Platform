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
            <td>balance</td>
            <td>The balance in the loyalty program member's account.</td>
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
            <td>memberId</td>
            <td>The member ID of the loyalty program member.</td>
        </tr>
        <tr>
            <td>password</td>
            <td>The password for the member's account (if required). For security reasons, the password is masked when retrieving MVs.</td>
        </tr>
    </tbody>
</table>


