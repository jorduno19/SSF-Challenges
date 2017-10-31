// We need a function that takes in an array and a target value(targetValue) we are looking for
var search = function(array, targetValue) {

    //Variables for the minium possible index of array and highest possible index
    var min = 0;
    var max = array.length - 1;

    // Create a variable that stores our guess
    var guess;

    // sort array in numerical order
    array.sort(function(a, b) { return a - b });

    //Loop that will keep guessing the midpoint between min and max til targetValue is found
    while (max >= min) {
        // console.log("hit");

        //Guess should be half of min and max
        guess = Math.floor((min + max) / 2);

        // if guess equals targetValue return success
        if (array[guess] === targetValue) {
            return console.log(targetValue + " is at the " + guess + " index");
        }

        // if guess does not equal targetValue check if targetValue is greater or less than guess
        //if targetValue is greater than guess make min equal to guess + 1
        else if (targetValue > array[guess]) {
            min = guess + 1;
        }
        else {
            //if targetValue is less than guess make max equal to guess - 1
            max = guess - 1;
        }
    }
    // if loop fails to find array return "not in array"
    return console.log(targetValue + " is not found!");
}

var array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


var searchResult = search(array, 59);
console.log(searchResult);


// We need a function that takes in an array and a target value we are looking for
// make a variable for mimium possible value and maxium possible
//this variable will get new values as we go through
// we need to find the length of the array to get the maxium possible value
// Create a variable that stores our guess
// this variable will get new values as we through 
// sort array in numerical order
// we need a loop that guesses the mid point of the array
// if the guess does not equal target value 
// is guess greater or larger then value
// half the array
// assign value of guess + 1 to min
// assign value of ((min + max))/2) to guess
// if guess does equal target value return success
