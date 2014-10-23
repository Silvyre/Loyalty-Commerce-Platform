### Create a Credit

Create a credit object to attempt to add points to a loyalty program member's account. A credit first requires a successful [member validation](#member-validations) that has not been used previously with another transaction. To create a new credit, POST a link to the member validation and the amount to add to the member's account under the credits endpoint for the loyalty program. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a credit.

Credits can happen in real-time or in batch mode depending on the loyalty program. For real-time credits, the credit will be immediately executed by the loyalty program and the credit status will be either success or failure. For batch mode, the credit will be queued with other transactions and sent to the loyalty program in a batch job typically once a day. Batch credits will initially have a status of pending. Once the loyalty program responds, the credit will be updated to success or failure.

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
                        <li>94 or 96: batch failure</li>
                        <li>95: batch success</li>
                        <li>97-99: real-time failure</li>
                        <li>Other: real-time success</li>
                    </ul>
                </p>
            </td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account to be credited. The member validation cannot have been used with another transaction.</td>
        </tr>
        <tr>
            <td>pic</td>
            <td>Product Identification Code (optional). Only set this field if directed to by the loyalty program.</td>
        </tr>
    </tbody>
</table>

#### Returns

The credit object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the member validation is not valid.












