### Create a Credit

Create a credit object to attempt to add points to a loyalty program member's account. A credit first requires a successful member validation that has not been used previously with another transaction. To create a new credit, POST a link to the member validation and the amount to add to the member's account under the credits endpoint for the loyalty program. Requests must be signed with your app's credentials.

In sandbox mode, the LCP never communicates with the loyalty program. All operations are simulated. The LCP simulates different success and failure responses depending on the parameters sent when creating a credit.

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
            <td>The number of points to add to the member's account. Must be a positive integer.
            <p>Sandbox mode: To simulate a failed credit, set the amount to 99.</p></td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account to be credited. The member validation cannot have been used with another transaction.</td>
        </tr>
    </tbody>
</table>

#### Returns

The credit object if it was created successfully. Returns an error if the member validation is not valid.
