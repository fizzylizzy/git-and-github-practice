/********************************
*
* DO YOUR ASSIGNMENT IN THIS FILE
*
*********************************/

// TEST EARLY AND OFTEN - node starter.js in the terminal
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all four steps specified below - each step needs a console.log statement - and follow the homework submission process (check the wiki!).

// EXAMPLE - Try running node starter.js before working on any of the parts and see what happens in the terminal.
var givenVariable = 20;
var doubledVariable = givenVariable * 2;
var tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log("EXAMPLE","tripledVariable",tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )



// STEP A: Pythagorean Theorem

var a = 1;
var b = 2;

var c;

var SumSquareLegs  = function(a,b) {
  return (a*a)+(b*b)
}
console.log(SumSquareLegs (3,4));


// STEP B: Basic Conversion

var pounds = 155;

var kilograms;

var PoundsToKg = function(p){
  return p*.453592;
}
console.log(PoundsToKg(155));

// STEP C: Old Modems

var sizeInGB = 25;

var timeToDownload;

// Please note my JS assumes that 28.8 KB download in 1 second

var MinToDownload=function(g) {
  return g*(1000000/28.8/60)
}
console.log(MinToDownload(25));





// STEP D: Killer Caffeine

// For this part create you own appropriately named variables for
// any values you want to use

// Create a variable which will store the number of cups
// which will kill you

// Compute the number of cups

// Log the answer to the console
