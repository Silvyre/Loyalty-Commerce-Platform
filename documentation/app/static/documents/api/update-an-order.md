### Update an Order

Update the status of an order. The application must manage the order status. When a primitive is added to an order, the order status changes to "statusPending". These orders require their status to be updated.

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
            <td>
                <p>The new status of the order. Can be one of:
                    <ul>
                        <li>"debitFailed" if the debit status is failure</li>
                        <li>"debitPending" if the debit status is pending</li>
                        <li>"debitError" if the debit status is systemError</li>
                        <li>"creditFailed" if the credit status is failure</li>
                        <li>"creditPending" if the credit status is pending</li>
                        <li>"creditError" if the credit status is systemError</li>
                        <li>"complete" if all primitives succeeded</li>
                        <li>"reversed" if all primitives are reversed</li>
                    </ul>
                </p>
            </td>
        </tr>
    </tbody>
</table>

#### Returns

The order object if it was updated successfully. Returns an [error](./?doc=reference-manual#errors) if the order does not exist or if the order status cannot be updated.












