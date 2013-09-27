## Loyalty Programs (LPs)

A loyalty program (LP) allows you to perform member validations, debits, and credits against the loyalty program's member database. Loyalty programs are found under the /lps endpoint.

In this version of the API, the list of LPs is fixed and your app cannot get the list of the loyalty programs that are supported. Instead, here is the list of loyalty programs that are available in this version:

<table>
    <thead>
        <tr>
            <th>Loyalty Program</th>
            <th>Loyalty Program Identifier (LP ID)</th>
            <th>Supported Operations</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Delta</td>
            <td>505d8be5-bf28-4edd-b543-0d1cd064c7b5</td>
            <td>MV, debit, credit</td>
        </tr>
        <tr>
            <td>Southwest</td>
            <td>4fd75846-1dae-474b-ac04-26c8d6dc0353</td>
            <td>MV, debit, credit</td>
        </tr>
        <tr>
            <td>USAirways</td>
            <td>15946ac0-8cd0-4948-9f7e-6f96bee68bb3</td>
            <td>MV, debit, credit</td>
        </tr>
        <tr>
            <td>Virgin Atlantic</td>
            <td>15dc4d30-b1e6-42de-b7cb-3e3c12f10769</td>
            <td>MV, debit, credit</td>
        </tr>
        <tr>
            <td>Wyndham</td>
            <td>1a33c991-f51b-49a4-a853-dcb0db1a3e8f</td>
            <td>MV, credit</td>
        </tr>
    </tbody>
</table>

Use the LP IDs above when performing [member validations (MVs)](#member-validations), [debits](#debits), and [credits](#credits) on the loyalty programs.


