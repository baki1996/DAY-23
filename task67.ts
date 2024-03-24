// This function adds a number and a string that represents a number
function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

// Trying it with 8 and "2"
console.log(addNumberAndString(8, "2")); // Shows 10
// The string "2" is turned into the number 2, and then added to 8.