## Credits

A credit is a transaction that adds points to a loyalty program member's account. Creating a credit object triggers the addition of points. A record of the credit is kept that can later be retrieved. A credit requires a member validation that has not been previously used for another transaction. Credits are stored for each loyalty program under `/lps/<lp-id>/credits/`.

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
            <td>amount</td>
            <td>The number of points added to the member's account. Must be a positive integer.</td>
        </tr>
        <tr>
            <td>application</td>
            <td>The application that created the transaction.</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>loyaltyProgram</td>
            <td>The loyalty program involved in the transaction.</td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account that was credited.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The status of the credit. The status can be success, failure, systemError, or pending. Pending indicates the transaction is waiting for a response from the loyalty program. Retrieve the credit later to determine whether it succeeded or failed.</td>
        </tr>
        <tr>
            <td>transactionId</td>
            <td>A transaction ID that can be used to reconcile the credit against the loyalty partner's records.</td>
        </tr>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
        <tr>
            <td>updatedAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was last updated.</td>
        </tr>
    </tbody>
</table>














