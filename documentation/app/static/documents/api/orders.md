## Orders

All transactions must be part of an order for them to appear in the order search support tool and the transaction reports in the [LCP Admin](https://admin.lcp.points.com/) console. An order is a composite transaction that associates multiple primitive transactions together. Primitive transactions include MVs, debits, and credits. The order contains details about the composite transaction and its fulfillment history. Additional metadata about the order can also be included in the data section.

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
            <td>confirmationNumber</td>
            <td>The order confirmation number. Provide this number to the user. Use it when contacting Points for support.</td>
        </tr>
        <tr>
            <td>createdAt</td>
            <td>The <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> time when the resource was created.</td>
        </tr>
        <tr>
            <td>data</td>
            <td>The details of the order.</td>
        </tr>
        <tr>
            <td>orderType</td>
            <td>
                <p>The type of order. Can be one of:
                    <ul>
                        <li>"EXCHANGE_CREDIT" for credit orders</li>
                        <li>"REDEEM_DEBIT" for debit orders</li>
                    </ul>
                    Contact Points to determine which order type you should use.
                </p>
            </td>
        </tr>
        <tr>
            <td>status</td>
            <td>
                <p>The overall status of the order. Can be one of:
                    <ul>
                        <li>"initial" when the order is created</li>
                        <li>"debitFailed" if the debit failed</li>
                        <li>"debitPending" if the debit is pending</li>
                        <li>"creditFailed" if the credit failed</li>
                        <li>"creditPending" if the credit is pending</li>
                        <li>"complete" if all primitives succeeded</li>
                        <li>"reversed" if all primitives are reversed</li>
                        <li>"statusPending" if the order has been updated and needs its status to be recalculated</li>
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














