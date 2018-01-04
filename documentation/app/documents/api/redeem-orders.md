## Redeem Orders

A redeem [order](#orders) is an order whose only primitives are a [member validation](#member-validations) and a [debit](#debits). With a successful and unused member validation a redeem order can be created with a single call to the `redeem/` endpoint. The LCP creates the order and debit, patches the order's link to the given member validation, and updates the order's status after any change to the status of the corresponding debit. 

Similary to creating a debit, creating a redeem order triggers the removal of points. A record of the order and corresponding debit are saved that can later be retrieved. See [Get an Order](#get-an-order) and [Get a Debit](#get-a-debit). A redeem object is returned upon the creation of a redeem order but it cannot be later retrieved.


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
