#! /usr/bin/env node
import inquirer from "inquirer";
const currency = ({
    USD: 1, //Base currency
    EUR: 0.91,
    DIN: 904,
    AED: 75,
    INR: 74.57,
    PKR: 280,
});
let user_Ans = await inquirer.prompt([
    {
        name: 'from',
        message: 'Select Your Currency which you want to Convert',
        type: 'list',
        choices: ['USD', 'EUR', 'DIN', 'AED', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Select Your Currency in  which you want to Convert',
        type: 'list',
        choices: ['USD', 'EUR', 'DIN', 'AED', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'How much  Amount You Want to Convert',
        type: 'number',
    }
]);
let fromAmount = currency[user_Ans.from];
let toAmount = currency[user_Ans.to];
let amount = user_Ans.amount;
let baseAmount = amount / fromAmount; //usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
