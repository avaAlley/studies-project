/**
 * OPERATORS:
 * 
 * 0: Operators in Javascript are used to execute different operations on code such as assignment, 
 * mathematical, and comparison.
 * 
 * 
 * 1. Assigment operators
 * 
 * Assignment operators are used to assign values to variables and is represented by the '=' equal 
 * sign. Values can be altered and assigned in the same action as well with different assigment
 * operators such as addition'+=', subtraction '-=', multiplication '*=', division '/=', 
 * division remainder (modulus) '%=', exponentation '**='.
 * 
 * 2. Arithmetic operators
 * 
 * Arithmetic operators perform mathematical operations on values. Arithmetic operators include
 * addition '+', subtraction '-', multiplication '*', division '/', division remainder (modulus) 
 * '%', exponentation '**', incrementing (+1) '++', and decrementing '--'.
 * 
 * 3. Comparison operators
 * 
 * Comparison operators compare values either for the truthyness or falsiness OR against another 
 * value to coerce a true or false value. The different comparison operators are equal to '==',
 * strictly equal (equal value and type) '===', not equal '!=', not strictly equal '!==', greater
 * than '>', less than '<', greater than or equal to '>=', less than or equal to '<=', ternary '?'.
 * 
 * 4. Logical operators
 * 
 * Logical operators are applied to if/else if statements to coerce a boolean from MULTIPLE different
 * comparisons or to flip the truthiness or falsiness value of a comparison. The logical operators 
 * are 'And' '&&', 'Or' '||', and 'Not' or otherwise known as the Bang operator '!'.
 * 
 * 5. Unary operators (!, typeOf, -)
 * 
 * Unary operators are an operator that applies to only one value. The Bang operator '!' flips the
 * truthiness or falsiness of a value. The typeOf operator coerces the datatype of a value such as
 * 'string', 'object', 'number', etc. The '-' unary negation operator converts a value to a negative
 * number if it isn't already negative.
 * 
 * 6. Ternary operator (a ? b : c)
 * 
 * The ternary operator is used to coerce a true or false value from a comparison in the first part
 * of the structure and then provide two different responses for if it is true or false.
 * 
 */

// assignment

let name = 'Ava Alley';
//       ^ assigning the value on the right to the variable on the left

let eight = 8;
eight *= 8; // reassigns 8 to the value of 8 * 8, 64

// arithmetic

console.log(8 + 9); // logs 17 to console
console.log(14 % 2); // logs 0, the remainder of 14 / 2 to the console

// comparison

if(8 < 28){                                 // since 8 < 28 resolves to true
    console.log("This is less than that")   // "This is less than that" logs to the console
}

// logical 

if ( 8 > 4 && 8 < 9){               // since the comparisons on either side of the && are BOTH true
    console.log('Both are true')    // 'Both are true' is logged to the console
}

if(7 > 8 || 7 < 22){                        // 7 is NOT greater than 8, but 7 is less than 22. since at least ONE of the statements is true
    console.log('At least one is true')     // 'At least one is true' is logged to the console
}

// unary

let example = 'example'     // a string is a truthy piece of data

if(typeOf example === 'string'){        // since the type of the example variable IS a string, resolving to true
    console.log('This is a string');    // 'This is a string' is logged to the console
}

if(!example){                           // since example has a truthy value, a string
    console.log('This is falsy');       // this is not triggered
} else {
    console.log('This is truthy');      // 'This is truthy' is logged to  console
}

let newExample = null;      // null is a falsy piece of data

if(!newExample){                        // since null is falsy
    console.log('This is falsy');       // 'This is falsy' is logged to console
} else {
    console.log('This is truthy');      // this is never executed
}


// ternary

function hasPurchased(question){
    return question ? 'Yes, you have purchased this.' : 'No, you have not purchased this.'
}

console.log(hasPurchased(true)); // will log 'Yes, you have purchased this.' to the console