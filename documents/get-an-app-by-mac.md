### Get an App by MAC Key Identifier

If you don't remember your app's ID, you can also retrieve it by querying the /apps endpoint with your app's MAC key identifier.

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
            <td>mac-key-id</td>
            <td>The MAC key identifier for the live or sandbox credentials of an app.</td>
        </tr>
    </tbody>
</table>

#### Returns

A list of apps. If an app was found with the given MAC key identifier, the app is included in the list. Otherwise, the list is empty. The returned app object does not include links to live and sandbox credentials. Get the self link to retrieve links to your app's credentials.
