### Create a Debit

Create a debit object to attempt to deduct points from a loyalty program member's account. A debit first requires a successful member validation that has not been used previously with another transaction. To create a new debit, POST a link to the member validation and the amount to deduct from the member's account under the debits endpoint for the loyalty program. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a debit.

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
            <td>The identifier of the loyalty program (LP).</td>
        </tr>
        <tr>
            <td>amount</td>
            <td>The number of points to deduct from the member's account. Must be a positive integer less than the member's balance obtained from the member validation.
            <p>Sandbox mode: To simulate a failed credit, set the amount to 99.</p></td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account to be debited. The member validation cannot have been used with another transaction.</td>
        </tr>
    </tbody>
</table>

#### Returns

The debit object if it was created successfully. Returns an error if the member validation is not valid or if the amount is greater than the balance in the member validation.
