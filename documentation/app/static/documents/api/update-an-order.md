### Update an Order

Update the status of an order. Order status is calculated automatically for BUY, GIFT, and TRANSFER order types. For all other order types, the application must manage the order status. When a primitive is added to an order, the order status changes to "statusPending". These orders require their status to be updated.

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
            <td>id</td>
            <td>The identifier of the order.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The new status of the order.</td>
        </tr>
    </tbody>
</table>

#### Returns

The order object if it was updated successfully. Returns an [error](./?doc=reference-manual#errors) if the order does not exist or if the order status cannot be updated.












