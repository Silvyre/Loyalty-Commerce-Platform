## Credit-Orders

A credit-order is an [order](#orders) whose only primitives are a [member validation](#member-validations) and a [credit](#credits). With a successful and unused member validation a credit=order can be created with a single call to the `credit-order/` endpoint. The LCP creates the order and credit, patches the order's link to the given member validation, and updates the order's status after any change to the status of the corresponding credit. 

Similary to creating a credit, creating a credit-order triggers the addition of points. A record of the order and corresponding credit are saved that can later be retrieved. See [Get an Order](#get-an-order) and [Get a Credit](#get-a-credit). An credit-order object is returned upon the creation of an earn order but it cannot be later retrieved.

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
            <td>The number of points added to the member's account. Must be a positive integer. (Required)</td>
        </tr>
        <tr>
            <td>memberValidation</td>
            <td>Link to the successful member validation identifying the member's account to be credited. Must not be associated with any other orders. (Required)</td>
        </tr>
        <tr>
            <td>orderType</td>
            <td>Can be "CREDIT" or "EXCHANGE_CREDIT". (Optional)</td>
        </tr>
        <tr>
            <td>pic</td>
            <td>Product Identification Code. (Optional)</td>
        </tr>
    </tbody>
</table>
