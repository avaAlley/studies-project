/**
 * VARIABLES:
 * 
 * 0: Variables are a way that we can store data in our program. Variables can hold any 
 * datatype and are named pieces of data that we can call upon throughout our program.
 * There are three different types of variables in Javascript; var, let, and const. Var
 * was the only variable type in javascript pre-ES6. Let and Const were added post ES6 to
 * provide for more varied uses of variables.
 * 
 * 1: Declaration and assignment
 * 
 * There are two steps to using a variable; declaration and assigment. Variables are declared
 * by using the var, let, or const key words followed by a name, most typically using the
 * camelCase naming convention. 
 * 
 * var - var can be re-declared and re-assigned freely at any point in the program.
 * 
 * let - let can be re-assigned freely but NOT re-declared. This functionality was added to 
 * differentiate it from var so that a variable could not accidently be re-declared at any
 * point in the program.
 * 
 * const - const cannot be re-declared OR re-assigned. If const is a complex datatype, such as
 * an object or an array, the object or array can be manipulated.
 * 
 * 
 * 2: Hoisting
 * 
 * Var variables are hoisted to the top of the global/function scope BENEATH any functions that
 * are hoisted. This allows for var variables to be called upon before declaration or assignment.
 * Only the variable name is hoisted, NOT any values attached. Let and Const are not hoisted and
 * cannot be accessed before their declaration or assignment, unlike var variables.
 * 
 * 
 */

// Declaration

var myName;


// Assignment

myName = 'Ava Alley';


// Var variables can be re-declared AND re-assigned

var myName = 'Serki Alley';


// Variables declared with let and const

let myAge = 27;
const myHobbies = ['Art', 'Streaming', 'Video Games'];


// let variables CAN be re-assigned

myAge = '28';


// const variables cannot be re-assigned, but with complex datatypes, can be mutated

myHobbies.push('Makeup'); // will change myHobbies to ['Art', 'Streaming', 'Video Games', 'Makeup']


// variables can be accessed BEFORE declaration, but will not have their values hoisted

console.log(favFood); // will log 'undefined' to the console instead of throwing an error, which using let or const would give

var favFood = 'Shepherd\'s Pie'
console.log(favFood); // will log 'Shepherd's Pie' to the console