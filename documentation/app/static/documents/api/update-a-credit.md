### Update an Credit

Points or the loyalty program may update the status of live credits to success or failure when pending credits are processed or to correct system errors caused by connection problems. You can test how your application responds to these changes by updating the status of sandbox credits using your [account credentials](#account-credentials).

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
            <td>The identifier of the credit.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>The updated status of the credit (optional). Must be "failure" or "success".</td>
        </tr>
        <tr>
            <td>transactionId</td>
            <td>The updated transaction ID of the credit (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

The credit resource if successful. Returns an [error](./?doc=reference-manual#errors) if you do not have permission to change the credit or if the new status is not valid.












