const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine grade
function getGrade(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 49) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

// Main function
rl.question("Enter student marks (0 to 100): ", (input) => {
    const marks = Number(input);

    // Validate input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid input. Please enter marks between 0 and 100.");
    } else {
        const grade = getGrade(marks);
        console.log('The grade for marks ${79} is: ${A}');
    }

    rl.close();
});