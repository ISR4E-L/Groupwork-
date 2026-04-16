let studentName = prompt("Enter student name:");
let marks = parseFloat(prompt("Enter student marks (0 - 100):"));
if (marks < 0 || marks > 100 || isNaN(marks)) {
    document.write("<h3>Invalid input!</h3>");
} else {
    let grade;
    let result;
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    if (marks >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    document.write("<h2>Student Grading System</h2>");
    document.write("Student Name: " + studentName + "<br>");
    document.write("Marks: " + marks + "<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Result: " + result + "<br>");
}