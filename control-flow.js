/**
 * CONTROL FLOW:
 * 
 * 0: Code in javascript is run from top to bottom, first line to last line, unless 
 * a structure changes the control flow by adding forks in the road with things like
 * if and switch statements. This allows for different behaviors to be triggered
 * when different conditions are met.
 * 
 * 1. If
 * 
 * If statements are used to create a fork in the code to test a value for a certain
 * condition and execute different blocks of code depending on if the condition is
 * met or not. 
 * 
 * 2. Else-if
 * 
 * Else-if satements are add after an if statement is created, to test for additional
 * conditions that can execute different blocks of code.
 * 
 * 3. Else
 * 
 * An else statement can be added to the end of an if-else-if chain without a condition
 * that needs to be met and acts as a "default" statement if none of the conditions in
 * the if-else-if chain are met.
 * 
 * 4. Switch
 * 
 * A switch statement takes in an input and evaluates that input against different 'cases'
 * and will execute some code depending on if any of the conditions are met. 
 * 
 */

// if, else-if, and else

let num1 = 28;
let num2 = 15;
let num3 = -1

function greaterOrLessThan(number1, number2){
    if(number1 > number2){   // if number1 > number2 is TRUE the next line will execute
        return `${number1} is greater than ${number2}.`
    } else if (number1 < number2){ // if the above returns FALSE, this comparison will run and the line below will execute
        return `${number1} is less than ${number2}`
    } else {    // if neither of the above trigger TRUE, this default line below runs
        return 'Both numbers are equal';
    }
}

console.log(greaterOrLessThan(num1, num2)); // '28 is greater than 15' will be logged to the console
console.log(greaterOrLessThan(num3, num1)); // '-1 is less than 15' will be logged to the console
console.log(greaterOrLessThan(num2, num2)); // 'Both numbers are equal' will be logged to the console

// switch

let pet = 'cat';

petStore (pet){
    case 'dog': // the input animal is not a dog, so this case will skip
        console.log('We do sell dogs!');
        break;
    case 'bird': // the input animal is not a bird, so this case will skip
        console.log('We have many different kinds of birds in stock!');
        break;
    case 'lizard': // the input animal is not a lizard, so this case will skip
        console.log('We usually have lizards, but we are currently out of stock.');
        break;
    case 'cat': // the input animal IS a cat, so the console will log 'We do sell cats!'
        console.log('We do sell cats!');
        break; // this break line will stop the rest of the switch statement from running
    case 'fish':
        console.log('We have many different kinds of fish in stock.');
    default:
        console.log('We do not have the pet you are looking for.')
}

