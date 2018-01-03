## Earn Orders

An earn order is a transaction that credits a single loyalty program member's account one time. Earn orders cannot The earn endpoint can be used

Creating an earn order triggers the addition of points. A record of the order and corresponding credit is kept that can later be retrieved. An earn order requires a member validation that has not been previously used for another transaction. 

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
            <td>The number of points added to the member's account. Must be a positive integer. (Required)</td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to the successful member validation identifying the member's account to be credited. Must not be associated with any other orders. (Required)</td>
        </tr>
        <tr>
            <td>pic</td>
            <td>Product Identification Code. (Optional)</td>
        </tr>
    </tbody>
</table>













