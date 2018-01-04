## Earn Orders

An earn [order](#orders) is an order whose only primitives are a [member validation](#member-validations) and a [credit](#credits). With a successful and unused member validation an earn order can be created with a single call to the `earn/` endpoint. The LCP creates the order and credit, patches the order's link to the given member validation, and updates the order's status upon any change to the status of the corresponding credit. 

Similary to creating a credit, creating an earn order triggers the addition of points. A record of the order and corresponding credit are kept that can later be retrieved. 

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
