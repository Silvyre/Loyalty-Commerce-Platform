### Create an Earn Order

Create an earn order to attempt to add points to a loyalty program member's account. An earn order first requires a successful [member validation](#member-validations) that has not been used previously with another transaction.

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
        
#### Returns

The earn object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the member validation is not valid.
