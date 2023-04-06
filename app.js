// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let userNum = +prompt("Enter first number:");
let userNum2 = +prompt("Enter second number:");

if (userNum > userNum2) {
    console.log("The larger number is " + userNum);
} else {
    console.log("The larger number is " + userNum2);
}





// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

let userNumber = +prompt("Enter a number:");

if (userNumber >= 0) {
    alert("The sign is +");
} else{
    alert("The sign is -");
}





// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let num3 = +prompt("Enter third number:");
let num4 = +prompt("Enter fourth number:");
let num5 = +prompt("Enter fifth number:");

if (num > num2 && num > num3 && num > num4 && num > num5){
    console.log("The largest number is " + num)
} else if (num2 > num && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log("The largest number is " + num2)
} else if (num3 > num && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log("The largest number is " + num3)
} else if (num4 > num && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log("The largest number is " + num4)
} else {
    console.log("The largest number is " + num5)
}





// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for ( i = 0; i <= 15; i++) {
    if (i % 2 === 0){
        console.log( i + " is even");
    } else {
        console.log( i + " is odd");
    }
}





// 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

let userMarks = +prompt("Enter your marks:");

if (userMarks < 100 && userMarks >= 90){
    console.log("your Grade is A")
} else if (userMarks < 90 && userMarks >= 80) {
    console.log("Your grade is B")
} else if (userMarks < 80 && userMarks >= 70) {
    console.log("Your grade is C")
} else if (userMarks < 70 && userMarks >= 60) {
    console.log("Your grade is D")
} else if (userMarks < 60 && userMarks >= 0) {
    console.log("Your grade is F")
} else {
    console.log("Enter valid marks")
}




// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else{
        console.log(i)
    }
}





// 7. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *


for(i = 1 ; i <= 5; i++) {
    let stars = "";
    for(j = 1; j <= i; j++){
        stars += "* ";
    }
    console.log(stars)
}
