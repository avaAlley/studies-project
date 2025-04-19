/**
 * LOOPS:
 * 
 * 0: Loops in Javascript are used to iterate over some kind of data or repeat a block of code until some
 * kind of condition is met. There are three different types of loops; while loop, for loop, and for-in
 * loop. 
 * 
 * 1. While loops
 * 
 * While loops are the simplest form of loop. They are constructed using an outside, usually a 'counter',
 * variable that will eventually increment to reach a certain value, which will stop the loop from running.
 * 
 * 2. For loops
 * 
 * For loops are typically used to iterate over an array or string. For loops contain 3 different statements;
 * a variable declaration and assignment which will be used as our value that gets iterated, a condition to which
 * the loop must EVENTUALLY reach 'false' in order to stop the loop's execution, and an incrementation. 
 * 
 * 3. For-in loops
 * 
 * For-in loops are used to iterate over an object's key/value pairs. It is constructed by creating a variable
 * to access each key in the object and adding the phrase 'in object'. This will iterate through each key
 * in the object and execute a block of code on each key/value.
 * 
 */

// while loop

// positive incrementation
let count = 1;  // creating a variable in which to increment in the loop

while(count < 6){   // until count is no longer less than 5, loop will continue
    console.log(`This while loop has executed ${count} time(s)`);
    count++;
}

// running this loop will log to the console:
// 'This while loop has executed 1 time(s)'
// 'This while loop has executed 2 time(s)'
// 'This while loop has executed 3 time(s)'
// 'This while loop has executed 4 time(s)'
// 'This while loop has executed 5 time(s)'
// after ^ this is logged to the console, count increments to 6, and 6 is no longer less than 6, so the loop stops

// negative incrementation

let revCount = 5;

while(revCount >= 0){
    console.log(`Countdown: ${revCount}`);
    revCount--
}

// running this loop will decrement revCount and count in reverse and log to console each iteration
// 'Countdown: 5'
// 'Countdown: 4'
// 'Countdown: 3'
// 'Countdown: 2'
// 'Countdown: 1'
// 'Countdown: 0'
// revCount decrements to -1 which is no longer greater than or equal to 0, stopping the loop


// for loop

let myArr = [1, 2, 3, 4, 5];

function times10(array){

    // variable v  stop condition v  v each loop variable increments
    for(let i = 0; i < array.length; i++){

        // accessing each array index and reassigning and multiplying by 10
        array[i] *= 10;
    }

    // returning the altered array
    return array;
}

console.log(times10(myArr)); // logs the altered array [10, 20, 30, 40, 50] to console

function reverseTimes10(array){

    // creating a holder array for new values
    let output = [];

    // variable v  stop condition v  v each loop variable increments
    for(let i = array.length - 1; i >= 0; i--){

        // accessing each array index in reverse and pushing each value multiplied by 10
        output.push(array[i] * 10);
    }

    // returning the new array
    return output;
}

console.log(reverseTimes10(myArr));


// for-in loop

let myObj = {
    nameFirst: 'Ava',
    nameLast: 'Alley', 
}

let myDetails = {
    age: 27,
    hobby: 'Video Games',
    occupation: 'Artist'
}

function addProps(obj1, obj2){

    // declares key and accesses obj2 to iterate through
    for(let key in obj2){

        // for each key in object 2, assigns the key and value to obj1
        obj1[key] = obj2[key];
    }

    // returning the altered object
    return obj1;
}

console.log(addProps(myObj, myDetails));

// logs to console the altered object:
// {
//     "nameFirst": "Ava",
//     "nameLast": "Alley",
//     "age": 27,
//     "hobby": "Video Games",
//     "occupation": "Artist"
// }