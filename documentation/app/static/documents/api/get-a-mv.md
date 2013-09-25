### Get an MV

Retrieves the details of a previous MV. This retrieves the MV and member's balance in the state it was when it was when the MV was created. To get an updated member's balance, create a new MV. Requests must be signed with your app's credentials.

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
    </tbody>
</table>

#### Returns

The MV object if it exists, otherwise returns an error.
