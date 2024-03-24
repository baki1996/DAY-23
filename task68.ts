// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}

// Trying it with 0.3 and 0.2
console.log(multiplyDecimals(0.3, 0.2)); // Shows 0.06
