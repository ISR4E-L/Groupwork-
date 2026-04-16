let name = prompt("Enter your name:");
let ageInput = prompt("Enter your age:");
let age = parseInt(ageInput);
if (isNaN(age) || age < 0) {
    console.log("Invalid age entered. Please enter a valid number.");
} else {
    let eligibilityStatus = "";
    let finalDecision = "";
    if (age < 18) {
        eligibilityStatus = "Not Eligible";
        finalDecision = "Rejected: Applicant is underage.";
    } 
    else if (age >= 18 && age <= 60) {
        eligibilityStatus = "Eligible";
        finalDecision = "Proceed to Driving Test";
    } 
    else if (age > 60) {
        eligibilityStatus = "Eligible with Medical Examination";
        finalDecision = "Proceed after Medical Examination";
    }
    document.write("Applicant Name: " + name);
    document.write("<br>Applicant Age: " + age);
    document.write("<br>Eligibility Status: " + eligibilityStatus);
    document.write("<br>Final Decision: " + finalDecision);
}