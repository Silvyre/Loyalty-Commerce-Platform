## Webhooks

Webhooks allow for you to be notified whenever any order created by your [app](#apps) is updated. To suscribe to webhooks you will need to provide Points with a URL to which the LCP can return a JSON object like the one in the example to the right. Once webhooks have been enabled for your app, any time the status of an order created by it is updated, Points will callback the designated URL with information about the update, described in the table below. 

You cannot directly enable or disable webhooks for your app but webhooks can be configured by Points for your app in both sandbox and live mode. 

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
            <td>orderUrl</td>
            <td>Link to the order that was updated.</td>
        </tr>
        <tr>
            <td>orderStatus</td>
            <td>Updated status of the order.</td>
        </tr>
        <tr>
            <td>partnerTransactionId</td>
            <td>Unique identifier for the order as defined by the creating app. (Returned only if present in order)</td>
        </tr>
        <tr>
            <td>update.resource</td>
            <td>Link to the resource that was updated.</td>
        </tr>
        <tr>
            <td>update.status</td>
            <td>Updated status of the resource noted above.</td>
        </tr>
        <tr>
            <td>update.type</td>
            <td>The type of resource (Can be "credit" or "debit").</td>
        </tr>
        <tr>
            <td>update.updatedAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was last updated. </td>
        </tr>
    </tbody>
</table>
