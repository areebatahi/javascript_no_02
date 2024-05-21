// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


var city_name = prompt("Where are you live?");
var answer = "karachi";
if (city_name == answer) {
    document.write("Welcome to city of lights")
}

document.write("<br>")


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.


var gender = prompt("Enter your gender");
var if_gender_answer = "male"
if (gender == if_gender_answer) {
    document.write("Good Morning Sir")
} else {
    document.write("Good Morning Ma’am")
}

document.write("<br>")


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var traffic_light_01 = prompt("Enter traffic light colour 01");
var traffic_light_02 = prompt("Enter traffic light colour 02");
var traffic_light_03 = prompt("Enter traffic light colour 03");

var traffic_light_name_01 = "Must stop";
var traffic_light_name_02 = "Ready to move";
var traffic_light_name_03 = "Move now";

document.write(
    "<table border = 1px >" +
    "<tr>" + "<th>" + "Signal colour" + "</th>" + "<th>" + "Messege" + "</th>" + "<tr>" +
    "<tr>" + "<td>" + traffic_light_01 + "</td>" + "<td>" + traffic_light_name_01 + "</td>" + "</tr>" +
    "<tr>" + "<td>" + traffic_light_02 + "</td>" + "<td>" + traffic_light_name_02 + "</td>" + "</tr>" +
    "<tr>" + "<td>" + traffic_light_03 + "</td>" + "<td>" + traffic_light_name_03 + "</td>" + "</tr>" +
    "</table>"
)

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres, show the message “Please refill the fuel in your car”


var fuel_quantity = +prompt("Enter value of remaining fuel in car");
var lessThan = 0.25

if (fuel_quantity <= lessThan) {
    alert("Please refill the fuel in your car")
}

// 5. Run this script, & check whether alert message would be displayed or not.Record the outputs.
//     a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e.
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:

var total_mark = 300;
var obtained_marks_01 = +prompt("Enter your marks obtained in subject 01");
var obtained_marks_02 = +prompt("Enter your marks obtained in subject 02");
var obtained_marks_03 = +prompt("Enter your marks obtained in subject 03");
var obtained_marks = obtained_marks_01 + obtained_marks_02 + obtained_marks_03;
var final_percentage = (obtained_marks * 100) / total_mark;

document.write(
    "<br>" + "Total Marks : " + total_mark + "<br>" +
    "Marks Obtained : " + obtained_marks + "<br>" +
    "Precentage : " + final_percentage + "<br>" +
    "Grade : "
);

if (final_percentage >= 80) {
    document.write(" A")
}
else {
    if (final_percentage >= 70) {
        document.write(" B")
    }
    else {
        if (final_percentage >= 60) {
            document.write(" C")
        }
        else {
            document.write("Fail")
        }
    }
}

document.write(
    "<br>" +
    "Remark : "
)

if (final_percentage >= 80) {
    document.write(" Excellent")
}
else {
    if (final_percentage >= 70) {
        document.write(" Good")
    }
    else {
        if (final_percentage >= 60) {
            document.write(" Need to improve")
        }
        else {
            document.write(" Sorry")
        }
    }
}

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secret_num = 3;
var user_enter = +prompt("Enter any number ")
if (secret_num == user_enter) {
    alert("Bingo! Correct answer")
}
else {
    alert("Close enough to the correct answer")
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var num = +prompt("Please Enter a any number");
var divisibleBy = num % 3 == 0
if(divisibleBy){
    document.write("The number is divisible by 3")
}


// 9. Write a program that checks whether the given input is an even number or an odd number.

var user_num = +prompt("Enter any number, Then I'm return even number or an odd number.");
if (user_num % 2 == 0) {
    alert("even number")
}
else {
    alert("an odd number")
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var userTemperature = +prompt("Enter your City Temperature")
if (userTemperature >= 40) {
    alert("It is too hot outside.")
}
else {
    if (userTemperature >= 30) {
        alert("The Weather today is Normal.")
    }
    else {
        if (userTemperature >= 20) {
            alert("Today’s Weather is cool.")
        }
        else {
            if (userTemperature >= 10) {
                alert("OMG! Today’s weather is so Cool.")
            }
        }
    }
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");
var operator = prompt("Enter any Operation (+, -, *, /, %)")

if("+" == operator){
    document.write("<h1> Result </h1>")
    document.write(num1 + num2)
}
else if("-" == operator){
    document.write("<h1> Result </h1>")
    document.write(num1 - num2)
}
else if("*" == operator){
    document.write("<h1> Result </h1>")
    document.write(num1 * num2)
}
else if("/" == operator){
    document.write("<h1> Result </h1>")
    document.write(num1 / num2)
}
else if("%" == operator){
    document.write("<h1> Result </h1>")
    document.write(num1 % num2)
}