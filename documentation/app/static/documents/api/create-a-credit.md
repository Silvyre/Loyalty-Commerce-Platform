### Create a Credit

Create a credit object to attempt to add points to a loyalty program member's account. A credit first requires a successful [member validation](#member-validations) that has not been used previously with another transaction. To create a new credit, POST a link to the member validation and the amount to add to the member's account under the credits endpoint for the loyalty program. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a credit.

Many parameters are optional. Providing more fields increases the accuracy of the fraud screen.

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
            <td>amount</td>
            <td><p>The number of points to add to the member's account. Must be a positive integer.</p>
                <p><strong>Sandbox mode</strong>: Set amount to these values to simulate different cases:
                    <ul>
                        <li>94: hold for fraud review, then fail at LP</li>
                        <li>95: hold for fraud review, then succeed</li>
                        <li>96: hold for fraud review, then decline</li>
                        <li>97: fail during fraud review</li>
                        <li>98: fraud review declines transaction</li>
                        <li>99: fail at loyalty program</li>
                        <li>Other: success</li>
                    </ul>
                </p>
            </td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account to be credited. The member validation cannot have been used with another transaction.</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>The first name of the user who initiated the transaction (optional).</td>
        </tr>
        <tr>
            <td>lastName</td>
            <td>The last name of the user who initiated the transaction (optional).</td>
        </tr>
        <tr>
            <td>email</td>
            <td>Email address of the user who initiated the transaction (optional).</td>
        </tr>
        <tr>
            <td>street1</td>
            <td>The first line of the user’s address (optional).</td>
        </tr>
        <tr>
            <td>street2</td>
            <td>The second line of the user’s address (optional).</td>
        </tr>
        <tr>
            <td>city</td>
            <td>The city of the user’s address (optional).</td>
        </tr>
        <tr>
            <td>state</td>
            <td>The state of the user’s address (optional). Use <a href="http://en.wikipedia.org/wiki/ISO_3166-2">ISO 3166-2</a> region codes (a 2 character string).</td>
        </tr>
        <tr>
            <td>country</td>
            <td>The country of the user’s address (optional). Use <a href="http://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166-1</a> country codes (a 2 character string).</td>
        </tr>
        <tr>
            <td>zip</td>
            <td>The zip or postal code of the user’s address (optional). Valid formats:
                <ul>
                    <li>US: NNNNN or NNNNN-NNNN</li>
                    <li>CA: ANA NAN</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>phone</td>
            <td>The phone number of the user (optional). Numbers only.</td>
        </tr>
        <tr>
            <td>clientIpAddress</td>
            <td>The IP address of the user who initiated the transaction (optional).</td>
        </tr>
        <tr>
            <td>clientUserAgent</td>
            <td>The user agent string of the browser that initiated the transaction (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

The credit object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the member validation is not valid.












