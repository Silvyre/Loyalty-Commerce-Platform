### List all Orders

Retrieves the list of all orders that the requestor has permission to access.

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
            <td>limit</td>
            <td>The maximum number of orders to include in the list (optional). If not provided, defaults to 10. Max is 100.</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>The starting offset when returning a list of orders (optional). Use for pagination. For example, to retrieve the second page of 10 orders, use offset=10. Defaults to 0 if not provided.</td>
        </tr>
        <tr>
            <td>q</td>
            <td>Filters the list of orders using <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax">Elastic Search query string syntax</a> (optional).</td>
        </tr>
    </tbody>
</table>

#### Returns

A list of orders.


