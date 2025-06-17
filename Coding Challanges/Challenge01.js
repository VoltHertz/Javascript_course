/*
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

*/

// Data 1
const massMak = 78; // kg
const heightMark = 1.69; // m

const massJohn = 92; // kg
const heightJohn = 1.95; // m


function CalculateBMI( height , mass) {
    let actualBMI = mass / (height ** 2)
    return actualBMI;
}

const markBMI = CalculateBMI(heightMark, massMak);
const johnBMI = CalculateBMI(heightJohn, massJohn);

console.log ( markBMI );
console.log ( johnBMI );

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI is higher than John's: " + markHigherBMI);

// Data 2
const massMak2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const markBMI2 = CalculateBMI(heightMark2, massMak2);
const johnBMI2 = CalculateBMI(heightJohn2, massJohn2);

console.log ( markBMI2 );
console.log ( johnBMI2 );

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Mark's BMI is higher than John's: " + markHigherBMI2);

