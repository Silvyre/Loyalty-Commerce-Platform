## Webhooks

Webhooks allow for you to be notified whenever any order created by your [app](#apps). is updated. To suscribe to webhooks you will need to provide Points with a URL to which Points can return a JSON object like the one in the example to the right. Once webhooks have been enabled for your app, any time the status of an order created by it is updated, Points will callback the designated URL with information about the update described in the table below. 

Webhooks can be configured by Points for your app in both sandbox and live mode. You cannot directly enable or disable webhooks for your app.

#### Properties
