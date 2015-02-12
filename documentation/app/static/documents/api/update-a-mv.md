### Update an MV

Update a member validation to add it to an order.

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
            <td>id</td>
            <td>The identifier of the member validation (MV).</td>
        </tr>
        <tr>
            <td>order</td>
            <td>Link to the order that this member validation belongs to.</td>
        </tr>
    </tbody>
</table>

#### Returns

The MV object if it was updated successfully. Returns an [error](./?doc=reference-manual#errors) if the MV does not exist.












