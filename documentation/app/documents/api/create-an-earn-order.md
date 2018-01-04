### Create an Earn Order

Create an earn order to attempt to add points to a loyalty program member's account. An earn order first requires a successful [member validation](#member-validations) that has not linked to another order.

To create a new earn order, POST to `/lps/<lp-id>/earn/` a link to the member validation and the amount to credit the member's account. A pic can also be included in the request but is not required. Additional fields can be included in the data object. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating an order.

Earn orders can happen in real-time or in batch mode depending on the loyalty program. For real-time earn orders, the credit will be immediately executed by the loyalty program and the order's status will be one of "complete", "creditFailure", or "creditError". For batch mode, the credit will be queued with other transactions and sent to the loyalty program in a batch job typically once a day. Batch orders will initially have a status of "statusPending". Once the loyalty program responds, the order's status will automatically be updated accordingly. 

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
            <td>amount</td>
            <td><p>The number of points to add to the member's account. Must be a positive integer.</p>
                <p><strong>Sandbox mode</strong>: Set "amount" to these values to simulate different values for "status" in the response:
                    <ul>
                        <li>92: "systemError"</li>
                        <li>93: "failure"</li>
                        <li>94: "pending"</li>
                        <li>95: "pending" that changes to "success"</li>
                        <li>96: "pending" that changes to "failure"</li>
                        <li>97: "systemError"</li>
                        <li>98: "failure"</li>
                        <li>99: "failure"</li>
                        <li>Other: "success"</li>
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

The earn object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the member validation is not valid.
