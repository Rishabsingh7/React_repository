//1.Write a function that takes two numbers as arguments and returns their sum.

function sumNumbers(num1,num2){
    const sum=num1+num2;
    return sum;
}
//console.log(sumNumbers(4,5));


//2.Write a function that takes a string as an argument and returns its length.

   // Define a function that takes a string parameter
   function getStringLength(str) {
    // Get the length of the string using the `.length` property
    const length = str.length;
    // Return the length of the string
    return length;
  }
  
  // Call the function and output the result to the console
  //console.log(getStringLength("RishabKumarSingh")); // Output: 8


//3 Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// Declare and initialize two variables with number values
const num1 = Number(21);
const num2 = Number(43);

// Declare and initialize four more variables with arithmetic operations performed on num1 and num2
const sum = num1 + num2; // Add num1 and num2
const diff = num1 - num2; // Subtract num2 from num1
const product = num1 * num2; // Multiply num1 and num2
const quotient = num1 / num2; // Divide num1 by num2

// Output the values of the four variables to the console, with descriptive labels
// console.log(`Sum: ${sum}`); // Sum: 64
// console.log(`Difference: ${diff}`); // Difference: -22
// console.log(`Product: ${product}`); // Product: 903
// console.log(`Quotient: ${quotient}`); // Quotient: 0.4883720930232558


//4 Write a function that takes two numbers as arguments and returns the larger number.

// Define a function that takes two number parameters
function findLargerNumber(num1, num2) {
    // Check if num1 is greater than num2
    if (num1 > num2) {
      // If so, return num1
      return num1;
    } else {
      // If not, return num2
      return num2;
    }
  }
  // Call the function and output the result to the console
  console.log(findLargerNumber(5, 10)); // Output: 10


  //5.Write a program that displays a string in reverse order

  // Define the string to reverse
const originalString = "RishabKumarSingh";

// Define a function that takes a string parameter
function reverseString(str) {
  // Convert the string to an array, reverse the array, then join it back into a string
  const reversedString = str.split("").reverse().join("");
  // Return the reversed string
  return reversedString;
}

// Call the function with the original string and output the result to the console
console.log(reverseString(originalString));


//6. Write a program that takes a number and checks whether it is positive nagative or zero

// Define a function that takes a number parameter
function checkNumber(number) {
    // Check if the number is positive
    if (number > 0) {
      console.log(`${number} is positive`);
    }
    // Check if the number is negative
    else if (number < 0) {
      console.log(`${number} is negative`);
    }
    // If neither of the above conditions are met, the number must be zero
    else {
      console.log(`${number} is zero`);
    }
  }
  
  // Call the function with various test cases to see the output
  checkNumber(10); // Output: "10 is positive"
  checkNumber(-5); // Output: "-5 is negative"
  checkNumber(0); // Output: "0 is zero"
  checkNumber(1); // Output: "1 is positive"
  checkNumber(-1); // Output: "-1 is negative"


 // 7.Write a program that takes a number and prints the multiplication table for that number.
 // Define a function that takes a number parameter
function multiplicationTable(number) {
    // Use a for loop to iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
      // Multiply the number with the current iterator and store the result in a variable
      let result = number * i;
      // Print the multiplication table for the given number
      //console.log(`${number} x ${i} = ${result}`);
    }
  }
  
  // Call the function with a test case to see the output
  multiplicationTable(19);

  //8. Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

  // Define a function that takes a number parameter
function sumOfNumbers(number) {
    // Define a variable to store the sum
    let sum = 0;
    // Use a for loop to iterate from 1 to the given number
    for (let i = 1; i <= number; i++) {
      // Add the current iterator value to the sum variable
      sum += i;
    }
    // Return the sum
    return sum;
  }
  
  // Call the function with different test cases to see the output
  console.log(sumOfNumbers(10)); // Expected output: 55
  console.log(sumOfNumbers(1)); // Expected output: 1
  console.log(sumOfNumbers(5)); // Expected output: 15
  console.log(sumOfNumbers(0)); // Expected output: 0
  console.log(sumOfNumbers(-5)); // Expected output: 0



  //9 write a program that takes a strig and prints out the number of vowels in the string








  //2.1.Write a function called 'getSquare' that takes a number parameter and returns its square.

  function getSquare(number){
    //const square=Math.pow(number);
    const square=number**2;
    return square;
  }
  const result=getSquare(5);
  console.log(result);
