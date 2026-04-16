let candidateName = prompt("Enter candidate name:");
let score = parseFloat(prompt("Enter candidate score (0 - 100):"));
if (score < 0 || score > 100 || isNaN(score)) {
    document.write("<h3>Invalid input!</h3>");
} else {
    let certificate;
    let status;
    if (score >= 90) {
        certificate = "Advanced Certificate";
        status = "Qualified for advanced training";
    } else if (score >= 75) {
        certificate = "Professional Certificate";
        status = "Certified";
    } else if (score >= 60) {
        certificate = "Basic Certificate";
        status = "Certified";
    } else {
        certificate = "Not Certified";
        status = "Must retake course";
    }
    document.write("<h2>Certification Result</h2>");
    document.write("Candidate Name: " + candidateName + "<br>");
    document.write("Score: " + score + "<br>");
    document.write("Certificate Awarded: " + certificate + "<br>");
    document.write("Final Status: " + status + "<br>");
}