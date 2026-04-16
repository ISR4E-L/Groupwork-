let balance = 50000;
let choice = prompt(
    "Banking System\n" +
    "1. Deposit Money\n" +
    "2. Withdraw Money\n" +
    "3. Check Balance\n" +
    "4. Exit\n\n" +
    "Enter your choice (1-4):"
);
document.write("<h2>Banking System Result</h2>");
if (choice == 1) {
    let deposit = parseFloat(prompt("Enter deposit amount:"));
    if (deposit > 0) {
        balance += deposit;
        document.write("Deposit Successful<br>");
        document.write("Updated Balance: " + balance + " RWF");
    } else {
        document.write("Invalid deposit amount!");
    }
} else if (choice == 2) {
    let withdraw = parseFloat(prompt("Enter withdrawal amount:"));
    if (withdraw > 0 && withdraw <= balance) {
        balance -= withdraw;
        document.write("Withdrawal Successful<br>");
        document.write("Updated Balance: " + balance + " RWF");
    } else if (withdraw > balance) {
        document.write("Error: Insufficient funds!");
    } else {
        document.write("Invalid withdrawal amount!");
    }
} else if (choice == 3) {
    document.write("Current Balance: " + balance + " RWF");
} else if (choice == 4) {
    document.write("Thank you for using the Banking System!");
} else {
    document.write("Invalid option selected!");
}