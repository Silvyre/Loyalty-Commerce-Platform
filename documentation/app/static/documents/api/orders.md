## Orders

An order is a composite transaction that associates multiple primitive transactions together. Primitive transactions include MVs, debits, credits, and payments. The order contains details about the composite transaction and its fulfillment history.

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
            <td>application</td>
            <td>The application that created the transaction.</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>data</td>
            <td>The details of the order when it was created.</td>
        </tr>
        <tr>
            <td>orderType</td>
            <td>The type of order.</td>
        </tr>
        <tr>
            <td>status</td>
            <td>
                <p>The overall status of the order. Can be one of:
                    <ul>
                        <li>"initial" when the order is created</li>
                        <li>"memberValidated" after a successful MV</li>
                        <li>"authPending" if the auth is pending</li>
                        <li>"authFailed" if the auth failed</li>
                        <li>"authSuccess" if the auth succeeded</li>
                        <li>"creditFailed" if the credit failed</li>
                        <li>"captureNeeded" if the credit succeeded but the payment is not captured</li>
                        <li>"captureFailed" if the capture failed</li>
                        <li>"complete" if the capture succeeded</li>
                        <li>"refunded" if the payment was refunded</li>
                        <li>"statusPending" if the order has been updated and needs its status to be recalculated</li>
                        <li>"unknown" otherwise</li>
                    </ul>
                </p>
            </td>
        </tr>
        <tr>
            <td>type</td>
            <td>The type of resource.</td>
        </tr>
        <tr>
            <td>updatedAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was last updated.</td>
        </tr>
        <tr>
            <td>updates</td>
            <td>
                <p>A list of updates to transactions attached to this order. Each update contains:
                    <ul>
                        <li><strong>resource</strong>: a link to the transaction</li>
                        <li><strong>status</strong>: the status of the transaction</li>
                        <li><strong>type</strong>: the type of transaction</li>
                        <li><strong>updatedAt</strong>: the timestamp when the transaction was updated</li>
                    </ul>
                </p>
            </td>
        </tr>
    </tbody>
</table>














