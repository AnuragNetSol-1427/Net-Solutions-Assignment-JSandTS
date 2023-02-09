// 1. Create a function that takes the string as an argument and returns the string in all uppercase/lowercase letters.
const myFunUpper = (str) => {
    return str.toUpperCase();  // This function makes the given string in all uppercase letters
}
const myFunLower = (str) => {
    return str.toLowerCase();  // This function makes the given string in all lowercase letters
}

let stringtoUpperCase = myFunUpper("JavaScript");
console.log(stringtoUpperCase);
let stringtoLowerCase = myFunLower("Training");
console.log(stringtoLowerCase);

// 2. Create a function that takes the string as an argument and returns the first character of the string.
const myFunFirstChar = (str) => {
    return str.slice(0, 1);
}

let stringFirstChar = myFunFirstChar("JavaScript");
console.log(stringFirstChar);

// 3. Create a function that takes the string as an argument and returns the string in reverse order.
const reverseString = (str) => {
    return str.split("").reverse().join("");
}

let stringtoReverse = reverseString("JavaScript");
console.log(stringtoReverse);
