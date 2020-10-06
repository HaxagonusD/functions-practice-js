//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
const students = [
  "Angel",
  "Ayman",
  "David",
  "Diana",
  "Ezra",
  "Jahaziel",
  "Jennifer",
  "Julian",
  "Katherine",
  "Leesel",
  "Naeem",
  "Nashid",
  "Quiana",
  "Shafee",
  "Shan",
  "Stephanie",
  "Tinesha",
  "Zipporah",
];

const studentInClass = () => {
  student.forEach((student) => {console.log(`${student} is in the Web Development Class`)});
};

//Exercise #2
//Write a function named calculateDogAge that:
//takes one argument: your puppy's age
//calculates your dog's age based on the conversion rate of
// 1 human year to 7 dog years
//outputs the result to the screen like so:
//"Your dog is something years old in dog years"
//call the function with different sets of values
//Add an additional argument to the function that takes the conversion
//rate of human to dog years

const calculateDogAge = (age) =>
  console.log(`You dog's age in human years is ${age * 7}`);

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

const calculateSupply = (age, amountPerday) =>
  `You will need SOMETHING to last you until the age of ${Math.round(
    (80 - age) * 365 * amountPerday
  )}`;
//Exercise #4
//http://math2.org/math/geometry/circles.htm
//
//Create 2 functions that calculate properties of a circle:
//First: Create a function called calcCircumference
// - Pass the radius to the function
// - Calculate the circumference based on the radius
// - and output " The circumference is SOMETHING"
// Second: Create a function called calcArea:
// - Pass the radius to the function
// - Calculate the area based on the radius and output "The area is SOMETHING"
const calcCircumference = (radius) => Math.PI * 2 * radius;
const calcArea = (radius) => Math.PI * radius ** 2;
//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"
const celsiusToFahrenheit = (celcius) => `${celcius} degrees in celcius is ${celcius * (9 / 5) + 32} in fahrenheit`; //(0°C × 9/5) + 32 = 32°F
const fahrenheitToCelsius = (fahrenheit) => `${fahrenheit} degrees in fahrenheit is ${((fahrenheit - 32) * 5) / 9} in celcius`; //(32°F − 32) × 5/9 = 0°C

//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3
//pseucode 

const powerRaise = (a, b, c) => (a*b) ** c;


//before trying to solve algorithm 
// a series of steps 
//or
// math 

//pseudocode  
//1. solve the problem in your head 

//5 = 2x -3 ----------what is x?

//2. write it  out step by step 
// as simple as possible 

/**
 * take 3  
 * subtract what we took from both sides 
 * divide everything 
 * and divide it by whsts in front of x 
 */

 //3. convert to code syntax 



//var = let but var doesnt exist

/**Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
 */

 /**pseudocode 
  * create function 
  * prints number  1
  * prints number 2 
  * prints number 3 ...
  * ...
  * 
  * prints 10
  * 
  * there is a counter 
  * 
  * this couter increases in the loop 
  *  every time I increase the counter i print something 
  * until it gets the end which is 10
  */

const counter = () => {
  for(let i = 0; i < 10;i++){
    console.log(i)
  }
};