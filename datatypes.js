/**
 * DATATYPES:
 * 
 * 0: (introduction) Datatypes are built-in data structures in Javascript that are what our code
 * is built with. There are two different categories of datatypes in Javascript; primitive and
 * complex datatypes.
 * 
 * 1. Number
 * 
 * The Number datatype is any numerical value that can be added, subtracted, multiplied, or divided. 
 * Values from any type of equation must be saved as a number variable. Numbers are a simple/primitive
 * datatype and is a truthy value.
 * 
 * 2. String
 * 
 * A String is any text that is wrapped in 'quotations' with either single quotes '', double quotes "", 
 * or backticks ``. Strings can be singular words, letters, or full sentences. Strings have index values
 * starting at the 0th index, and strings  have a length property. Strings can be combined with the +
 * operator and can be manipulated with different methods. (more in string manipulation). Strings are
 * a simple/primitive datatype and is a truthy value.
 * 
 * 3. Boolean
 * 
 * Boolean values are true or false values. Boolean values are coerced by using comparison operators
 * such as === or >. A variable can have a boolean datatype assigned to it. You can coerce a boolean
 * value out of an if statement. Booleans are a simple/primitive datatype. True values are truthy and
 * false values are falsy.
 * 
 * 4. Array
 * 
 * An Array is a collection of values that can be any other datatype, including arrays and objects. Arrays
 * have index values starting at the 0th index. You can access arrays by using bracket notation with the
 * value's index in [brackets]. Arrays are a complex datatype and are truthy values.
 * 
 * 5. Object
 * 
 * Objects are a collection of key/value pairs. The key/value pairs in an object are in no particular order
 * and can only be called upon by accessing the object[key] with bracket notation or object.key dot notation.
 * Key/value pairs can be added at any point in the program to an object. Object keys are stored as 'strings'
 * but do not have to be called in dot notation as a string. Values on an object's key can be any kind of 
 * datatype. Objects are a complex datatype and are truthy values.
 * 
 * 6. Function
 * 
 * Functions are a reusable block of code that takes in inputs/parameters, processes inputs, and returns a
 * new data value. Function declaration requires parameter(s), a section in the function with code to run
 * against the parameters, and a return statement. Functions are usually named but can also be 'anonymous'
 * unnamed functions that can be written as a value to a variable or a key to an object. To run the code
 * that a function contains, the function must be called with or without arguments as the parameters. 
 * Functions are a complex datatype and are truthy values.
 * 
 * 7. Undefined
 * 
 * Undefined is a value that is assigned to a variable that does not have another datatype assigned. 
 * Variables that are not assigned a value, get assigned 'undefined' by default. Functions that do not
 * have a return statement will always return undefined. Undefined is a simple/primitive datatype and
 * is a falsy  value.
 * 
 * 8. Null
 * 
 * Null is a value that is intentionally absent. It can be used as a falsy piece of data when a boolean
 * value is trying to be coerced. Null is a simple/primitive datatype and is a falsy value.
 * 
 * 9. NaN
 * 
 * NaN is a property that represents a result of 'Not a Number'. NaN is produced when there is a failure
 * when equating a number and another datatype that is not a number and is a falsy value. Null is often
 * used as a placeholder to be reassigned later.
 * 
 * 10. Infinity and -Infinity
 * 
 * Infinity is a numeric value that represents infinity or negative infinity. They are used as numeric values
 * that are greater than (infinity) or less than (-infinity) any other numeric value. No value with be greater
 * than or less than infinity or -infinity. Infinity and -Infinity are primitive datatypes and both are
 * considered truthy values.
 * 
 * 11. What's the difference between primitive/simple and complex datatypes?
 * 
 * Primitive datatypes are datatypes that are NOT complex/object. Primitive datatypes are immutable and cannot
 * be altered. Complex datatypes are all collection types. Complex types are mutable and can be changed and 
 * can be altered.
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? 
 * 
 * Primitive datatypes are "copy by value", which boils down to the actual value being copied when a variable
 * is referenced by another variable. Meaning if the variable that a type is assigned to another variable, it
 * cannot alter the original variable's value. Complex datatypes are "copy by reference". When two variables
 * are assigned the same object or references another variable that is attached to an object, if one is
 * altered, the object itself is altered. Complex types are stored in one place and when referenced are NOT
 * copied, it only references the original object, which is why it can be altered when altered by another
 * variable that references the same object.
 * 
 */

// number

let num = 3 * 3; // num = 9

// string

let string = 'This is a string';

// boolean

let isTrue = true;
let isFalse = false;

// array

let arr = [
    'String', 
    8, 
    false, 
    [1, 2, 3], 
    { name: 'Ava' }
]

// object

let obj = {
    nameFirst: 'Ava';
    nameLast: 'Alley';
    age: 27;
}

// function

function add(x, y){     // x and y represents values that can be passed in, say (8, 3)
    return x + y;       // function, when called will return x + y,             8 + 3
}

add(8, 3);              // returns 11

// undefined

var notDefined;

console.log(notDefined); // will return 'undefined'

function subtract(x, y){
    x - y
}

subtract(8, 3); // will return 'undefined' because there is no return statement

// null

let objectFill = {
    value1: null,
    value2: null,
    value3: null
}

console.log(objectFill.value1); // return null
objectFill.value2 = 8; // reassigning value2 to 8 

// NaN

function returnNaN(string, number){
    return string - number;
}

console.log(returnNaN(string, num)); // returns NaN because you cannot subtract a number from a string

// Infinity & -Infinity

let num2 = 800000000000000000000000;

function greaterThanInfinity(number){
    return number > Infinity;
}

console.log(greaterThanInfinity(num2)); // will ALWAYS return false because no number put into this function can ever be larger than infinity

let num3 = -8000000000000000000000000;

function lessThanNegativeInfinity(number){
    return number < Number.NEGATIVE_INFINITY;
}

console.log(lessThanNegativeInfinity(num3)); // will ALWAYS return false because no number passed into this function can ever be less than negative infinity

// Copy by Value

let x = 8;
let y = x;
y -= 3 

console.log(x); // x will return 8 because the changes made to y are only made to the COPIED value that was attached from X to Y
console.log(y); // y will return 5 because it copied 8 from x and that number can be altered independantly from X's value

// Copy by Reference

let person = obj;   // referencing the object made above in object section
person.age = 28;    // changes the age value on obj since it is REFERENCING the object, not copying the object to person

console.log(obj);   // logs obj { nameFirst: 'Ava, nameLast: 'Alley', age: 28 } with the changed age value