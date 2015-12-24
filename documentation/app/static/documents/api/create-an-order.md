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
            <td>data.clientIpAddress</td>
            <td>User’s IP address. Between 7 and 40 characters.</td>
        </tr>
        <tr>
            <td>data.clientUserAgent</td>
            <td>Header provided by user’s browser (user agent). Maximum length of 300 characters.</td>
        </tr>
        <tr>
            <td>data.language</td>
            <td>The user’s preferred language. Must be an <a href="http://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a>, which includes a two letter language code and an optional country code, hyphen separated. Language code is lowercase, country code is upper case.</td>
        </tr>
        <tr>
            <td>data.orderDetails.basePoints</td>
            <td>Number of points being added to or removed from the user’s LP account.</td>
        </tr>
        <tr>
            <td>data.orderDetails.loyaltyProgram</td>
            <td>Link to the loyalty program resource.</td>
        </tr>
        <tr>
            <td>data.user.email</td>
            <td>The email address of the user.</td>
        </tr>
        <tr>
            <td>data.user.firstName</td>
            <td>The first name of user.</td>
        </tr>
        <tr>
            <td>data.user.lastName</td>
            <td>The last name of user.</td>
        </tr>
        <tr>
            <td>data.user.memberId</td>
            <td>The member ID of the user’s LP account.</td>
        </tr>
        <tr>
            <td>data.user.memberValidation</td>
            <td>Link to the member validation resource.</td>
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
    </tbody>
</table>

#### Returns

The order object if it was created successfully. Returns an [error](./?doc=reference-manual#errors) if the order was not created due to a data validation error.












