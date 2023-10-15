document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const gradeElement = document.getElementById("grade");

    calculateButton.addEventListener("click", function () {
        const marks = parseFloat(document.getElementById("marks").value);

        if (isNaN(marks)) {
            gradeElement.textContent = "Please enter valid marks";
        } else {
            let grade = "";

            if (marks >= 90) {
                grade = "A+";
            } else if (marks >= 80) {
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

            gradeElement.textContent = grade;
        }
    });
});
