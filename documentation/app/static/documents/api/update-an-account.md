### Update an Account

Updates your account details.

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
            <td>id</td>
            <td>The identifier of the account.</td>
        </tr>
        <tr>
            <td>firstName</td>
            <td>Your first name (optional).</td>
        </tr>
        <tr>
            <td>lastName</td>
            <td>Your last name (optional).</td>
        </tr>
        <tr>
            <td>organizationName</td>
            <td>Your organization (optional).</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>Your phone number (optional).</td>
        </tr>
        <tr>
            <td>timeZone</td>
            <td>Your time zone (optional). Use time zones in the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">tz database</a>.</td>
        </tr>
    </tbody>
</table>

#### Returns

The account object if it was updated successfully, otherwise returns an [error](./?doc=reference-manual#errors).


