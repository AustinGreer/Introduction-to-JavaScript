/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

//variable for votingAge
//will need if statement to return if votingAge > 18

const votingAge = 19;

if (votingAge > 18) {
    console.log("True")
} else {
    console.log("false")
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a 
//second variable (no function required)

//Step One: Declare a variable
let myVar = true;

//Step Two: Conditional
    //conditional should change the value of myVar based on value assigned to a second variable. 

let otherVar = 3;

if(otherVar > 6) {
    console.log(myVar)
} else if(otherVar < 6) {
    myVar = false;
    console.log(myVar)
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1988"));

//Task d: Write a function to multiply a*b 


function multiplyNum(a, b) {
    return a * b;
}

console.log(multiplyNum(3, 2));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

/* Define Problem: We need a function that has code that when ran, it will convert one number, human years, to another number that represents dog years. One human year = 7 dog years. */

/* What we need to complete task:
    1. A function
    2. A variable to represent human years.
    3. A variable to represent dog years. 
    4. Multiply human years by seven. That is what will equal the dog years.
    5. The function should return dog years */

function dogAge(years) {
    let dogYears = years * 7;
    return dogYears
}

console.log(dogAge(7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder (age, weight) {
    if (age >= 1 && weight <= 5) {
        return weight * 0.05;
    } else if (age >= 1 && weight >= 6 && weight <= 10) {
        return weight * 0.04;
    } else if (age >= 1 && weight >= 11 && weight <= 15) {
        return weight * 0.03;
    } else if (age >= 1 && weight > 15) {
        return weight * 0.02;
    } else if (age >= 0.16666667 && age < 0.25) {
        return weight * 0.10;
    } else if (age >= 0.25 && age < 0.58333333) {
        return weight * 0.05;
    } else if (age >= 0.58333333 && age < 1) {
        return weight * 0.04;
    }
}
console.log(dogFeeder(1, 15));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let rpc = Math.random();

if (rpc < 0.34) {
    compChoice = "Rock";
} else if (rpc < 0.67) {
    compChoice = "Paper";
} else {
    compChoice = "Scissors";
}
//console.log(compChoice);

function rpcGame (userChoice) {
    if (userChoice === "Rock" && compChoice === "Scissors" || userChoice === "Paper" && compChoice === "Rock" || userChoice === "Scissors" && compChoice === "Paper") {
        return "you win!";
    } else if (userChoice === "Rock" && compChoice === "Paper" || userChoice === "Scissors" && compChoice === "Rock" || userChoice === "Paper" && compChoiceq === "Scissors"){
        return "You lose...";
    } else if (userChoice === "Rock" && compChoice === "Rock" || userChoice === "Paper" && compChoice === "Paper" || userChoice === "Scissors" && compChoice === "Scissors") {
        return "It's a tie.";
    }
}

console.log(rpcGame("Rock"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmConverter(km) {
    mile = 0.62137 * km;
    return mile;
}

console.log(kmConverter(2));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function myGrade (grade) {
    if (grade >= 90) {
        console.log("A");
    } else if (grade <= 89 && grade >= 80) {
        console.log("B");
    } else if (grade <= 79 && grade >= 70) {
        console.log("C");
    } else if (grade <= 69 && grade >= 60) {
        console.log("D");
    } else {
        console.log("F")
    }
}

myGrade(93);
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





