### Update an Debit

Points or the loyalty program may update the status of live debits to success or failure when pending debits are processed or to correct system errors caused by connection problems. You can test how your application responds to these changes by updating the status of sandbox debits using your [account credentials](#account-credentials).

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
            <td>The identifier of the <a href=#loyalty-programs>loyalty program</a> (LP).</td>
        </tr>
        <tr>
            <td>id</td>
            <td>The identifier of the debit.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The updated status of the debit. Must be "failure" or "success".</td>
        </tr>
    </tbody>
</table>

#### Returns

The debit resource if successful. Returns an [error](./?doc=reference-manual#errors) if you do not have permission to change the credit status or if the new status is not valid.












