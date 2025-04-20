/**
 * STRING MANIPULATION:
 * 
 * 0: Strings can be manipulated in a couple different ways. Strings can be concatenated with the '+'
 * operator or with one of many string methods.
 * 
 * 1. With operators
 * 
 * Strings can be joined together by using the '+' operator to join two or more strings together. When
 * concatenating strings this way, it will join the strings directly, so any spaces that are needed
 * must be added manually either between strings or tacking the spaces to the beginning or end of
 * a string.
 * 
 * 2. With string methods
 * 
 * There are many different string methods that can be used to manipulate strings. Some of the most 
 * common string manipulation methods are string.toUpperCase() and string.toLowerCase(), string.concat(),
 * string.replace(), string.split(), string.slice(), and there are many more. 
 * 
 */

// with operators

let myStr = 'Hello'
console.log(myStr + ', how are you?');  // logs 'Hello, how are you?' to the console

// with string methods

console.log(myStr.toUpperCase());       // logs 'HELLO' to console.

console.log(myStr.slice(1));            // logs 'ello' to console

let myArr = myStr.split('')     // splits each letter in the string to a value in an array

console.log(myArr);             // logs the array ['H', 'e', 'l', 'l', 'o']

let strangeStr = '$A$v$a$'

console.log(strangeStr.replaceAll(/\W/g, '')) // removes all non-word characters and logs 'Ava' to console