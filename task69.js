// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    // Returns both in an object
    return { quotient: quotient, remainder: remainder };
}
// Trying it with 10 divided by 4
console.log(divideAndRemainder(10, 4)); // Shows { quotient: 2, remainder: 2 }
// It shows how many times 4 goes into 10, and what's left over.
