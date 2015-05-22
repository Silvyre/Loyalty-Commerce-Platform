### Create an MV

To create a new MV, POST the loyalty program member's account details to the loyalty program's MV service and sign the request with your app credentials. In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a MV.

Authenticating a member requires a specific set of fields, defined by the specific loyalty program you wish to communicate with. For example, some loyalty programs may require a member ID and password, while others require a member ID, last name, and password. To determine which fields are required for a particular loyalty program, [get its MV request schema](#get-an-mv-request-schema).

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
            <td>lp-id</td>
            <td>The identifier of the <a href="#loyalty-programs">loyalty program</a> (LP).</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>The first name of the loyalty program member.</p>
                <p><strong>Sandbox mode</strong>: To simulate an unknown error from the loyalty program, set the firstName field to "Bugs".</p></td>
        </tr>
        <tr>
            <td>lastName</td>
            <td><p>The last name of the loyalty program member.</p>
                <p><strong>Sandbox mode</strong>: To simulate a non-zero balance, append a space and a positive integer to the lastName field. For example, to simulate a balance of 2000 for John Doe, set lastName to "Doe 2000".</p></td>
        </tr>
        <tr>
            <td>memberId</td>
            <td><p>The member ID of the loyalty program member.</p>
                <p><strong>Sandbox mode</strong>: To simulate a successful MV, set the memberId field to the partnerId field of the <a href="#loyalty-programs">loyalty program</a>.
            </td>
        </tr>
        <tr>
            <td>order</td>
            <td>Link to the order that this member validation belongs to (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

The MV object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the required credentials are not provided or if the member could not be validated for the given loyalty program.

<table>
    <thead>
        <tr>
            <th>HTTP Status Code</th>
            <th>Error Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>422 Unprocessable Entity</td>
            <td>INELIGIBLE</td>
            <td>The member is not eligible to perform this transaction.</td>
        </tr>
        <tr>
            <td>422 Unprocessable Entity</td>
            <td>MAXIMUM_ATTEMPTS_EXCEEDED</td>
            <td>The maximum number of incorrect MV attempts has been exceeded for this user.</td>
        </tr>
        <tr>
            <td>422 Unprocessable Entity</td>
            <td>UNKNOWN_MEMBER</td>
            <td>The loyalty program couldn't find a member with the given credentials.</td>
        </tr>
        <tr>
            <td>502 Bad Gateway</td>
            <td>INVALID_UPSTREAM_RESPONSE</td>
            <td>An external upstream service issued an invalid response.</td>
        </tr>
    </tbody>
</table>










