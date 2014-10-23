### Create a Debit

Create a debit object to attempt to deduct points from a loyalty program member's account. A debit first requires a successful [member validation](#member-validations) that has not been used previously with another transaction. To create a new debit, POST a link to the member validation and the amount to deduct from the member's account under the debits endpoint for the loyalty program. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a debit.

Debits can happen in real-time or in batch mode depending on the loyalty program. For real-time debits, the debit will be immediately executed by the loyalty program and the debit status will be either success or failure. For batch mode, the debit will be queued with other transactions and sent to the loyalty program in a batch job typically once a day. Batch debits will initially have a status of pending. Once the loyalty program responds, the debit will be updated to success or failure.

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
            <td><p>The number of points to deduct from the member's account. Must be a positive integer less than the member's balance obtained from the member validation.</p>
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
            <td>Link to a member validation that identifies the member's account to be debited. The member validation cannot have been used with another transaction.</td>
        </tr>
        <tr>
            <td>pic</td>
            <td>Product Identification Code (optional). Only set this field if directed to by the loyalty program.</td>
        </tr>
    </tbody>
</table>

#### Returns

The debit object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the member validation is not valid or if the amount is greater than the balance in the member validation.












