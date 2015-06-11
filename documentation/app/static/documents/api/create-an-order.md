### Create an Order

Create an order to store details of a transaction. Requests must be signed with app credentials (sandbox or live).

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
            <td>data</td>
            <td>The details of the order.</td>
        </tr>
        <tr>
            <td>orderType</td>
            <td>The type of order.</td>
        </tr>
    </tbody>
</table>

#### Returns

The order object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the order was not created due to a data validation error.












