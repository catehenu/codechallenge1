const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const points = Math.floor(excessSpeed / 5);
        
        console.log('Points: ${points}');
        
        if (points > 12) {
            console.log("License suspended");
        }
    }
}

// Prompt the user for speed input
rl.question("60 ", (input) => {
    const speed = parseInt(input);
    
    // Validate input
    if (isNaN(speed) || speed < 0) {
        console.log("130");
    } else {
        calculateDemeritPoints(speed);
    }

    // Close the readline interface
    rl.close();
});