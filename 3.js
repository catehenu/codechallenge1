const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const PAYE_RATE = 0.15; // 15% Tax
    const NHIF_RATE = 0.015; // 1.5% NHIF
    const NSSF_RATE = 0.06; // 6% NSSF

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * PAYE_RATE;
    const nhifDeductions = grossSalary * NHIF_RATE;
    const nssfDeductions = grossSalary * NSSF_RATE;
    const totalDeductions = payee + nhifDeductions + nssfDeductions;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary.toFixed(2),
        payee: payee.toFixed(2),
        nhifDeductions: nhifDeductions.toFixed(2),
        nssfDeductions: nssfDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// Main function to get input
function main() {
    rl.question("Enter basic salary: ", (basicSalaryInput) => {
        rl.question("Enter benefits: ", (benefitsInput) => {
            const basicSalary = parseFloat(basicSalaryInput);
            const benefits = parseFloat(benefitsInput);

            // Validate input
            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter valid positive numbers.");
            } else {
                const salaryDetails = calculateNetSalary(basicSalary, benefits);
                console.log("Salary Details:");
                console.log('Gross Salary: Ksh ${salaryDetails.grossSalary}');
                console.log('PAYE (Tax): Ksh ${salaryDetails.payee}');
                console.log('NHIF Deductions: Ksh ${salaryDetails.nhifDeductions}');
                console.log('NSSF Deductions: Ksh ${salaryDetails.nssfDeductions}');
                console.log('Net Salary: Ksh ${salaryDetails.netSalary}');
            }

            rl.close();
        });
    });
}

// Call the main function to execute the program
main();