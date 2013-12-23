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
            <td>billingInfo</td>
            <td>The billing info of the user who initiated the transaction.</td>
        </tr>
        <tr>
            <td>clientIpAddress</td>
            <td>The IP address of the user who initiated the transaction.</td>
        </tr>
        <tr>
            <td>clientUserAgent</td>
            <td>The user agent string of the browser that initiated the transaction.</td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to a member validation that identifies the member's account that was credited.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The status of the credit. The status can be success, failure, or pending. Pending indicates the transaction is being held for fraud review. Retrieve the credit later to determine whether it succeeded or failed.</td>
        </tr>
        <tr>
            <td>transactionId</td>
            <td>A transaction ID that can be used to reconcile the credit against the loyalty partner's records.</td>
        </tr>
    </tbody>
</table>














