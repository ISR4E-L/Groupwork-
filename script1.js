let customerName = prompt("Enter customer name: ");
let units = parseInt(prompt("Enter units consumed: "));
let rate;
let totalBill;
if (units < 0 || isNaN(units)) {
    document.write("Invalid input!");
}
else {
    if (units >= 0 && units <= 100) {
        rate = 100;
    }else if (units >= 101 && units <= 200) {
        rate = 150;
    }else if (units >= 201 && units <= 300) {
        rate = 200;
    }else {
        rate = 250;
    }
    totalBill = units * rate;
    document.write("<h3>Electricity Bill</h3>");
    document.write("Customer Name: " + customerName);
    document.write("<br>Units Consumed: " + units);
    document.write("<br>Rate per Unit: " + rate + " RWF");
    document.write("<br>Total Bill: " + totalBill + " RWF");
}