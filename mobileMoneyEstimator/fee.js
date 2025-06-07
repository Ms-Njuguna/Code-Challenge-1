//This challenge is to create a simplified estimator for transaction fees

// Prompt the user to enter the amount of money they wish to send
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

//create a JavaScript function that Takes the amountToSend an argument and calculates the transaction fee

function estimateTransactionFee(amountToSend) {
    const rule = 0.015;
    let transactionFee = amountToSend * rule;

    //an if statement to check for conditions when it comes to the transactionFee
    if (transactionFee < 10) {
        transactionFee = 10;
    } else if (transactionFee > 70) {
        transactionFee = 70;
    } else {
        transactionFee;
    }

    //final calculation that returns the total amount to be debited
    let amountToBeDebited = amountToSend + transactionFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee.toFixed(2)}`);
    console.log(`Total amount to be debited: KES ${amountToBeDebited.toFixed(2)}`);
    console.log("\nSend Money Securely!");
}

//call the function

estimateTransactionFee(amountToSend);