/**
 * FUNCTIONS:
 * 
 * 0: A function in Javascript is a reusable block of code that can be called upon at
 * any point in time throughout your code with or without different arguments. Functions
 * are constructed by declaring the function, then adding any arguments if any, then adding
 * a block of code to execute when the function is called that is ended by a return
 * statement. Functions are first-class objects and can be passed into other functions,
 * can be returned from a function, and can be assigned to a variable or object property.
 * 
 * 1. The two phrases to using functions: First we must ____? Next we can execute (or two other words for executing a function?) a function by?
 * 
 * There are two steps to using a function. First the function must be created and written
 * in your code. Then, to execute the function, you must call the function by using the
 * function name or accessing the function method followed by parentheses that includes
 * all, if any, arguements passed into the parameters. 
 * 
 * 2. What's the difference between a function's parameters and arguments PASSED to a function?
 * 
 * A function's 'parameters' are the placeholder variables that we code into the function
 * that will, when called, be replaced by our inputs. These inputs are called 'arguments'.
 * When a function is called, the arguments are whatever it is you would like to plug into
 * the function. These arguments can be any datatype, depending on what the function is
 * prepared to receive.
 * 
 * 3. What's the syntax for a NAMED function?
 * 
 * To create a named function, the statement must begin with the 'function' keyword
 * followed by the desired name for the function. After this, the rest of the structure
 * is like a normal function with parenthese containing any parameter names, then the
 * opening curly brace for the block of code.
 * 
 * 4. How do we assign a function to a variable?
 * 
 * A function can be assigned to a variable in the same fashion as you would assign
 * any other kind of datatype to a variable; using the desired variable keyword such
 * as var, let, or const, followed by the assignment operator '=' and then using
 * the function keyword, without a desired name, and immediately followed by the 
 * parentheses and curly braces to open the code block of the function.
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, how do we specify outputs? 
 * 
 * Functions do not always need parameters or inputs. The function can be written without
 * any input parameters and simply run a block of code when called. Inputs are specified
 * by adding 'parameters' inside the parenthese. When called, these parameters will be replaced
 * with the values passed into the function. Outputs are specified by the return statement
 * inside of the function. The output can be any datatype as long as it is specified
 * properly in the return statement. 
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * 
 * Within the scope of a function, a function can alter the value of variables that are not
 * in the function. Var variables can be scoped globally or functionally, and const and let
 * can be globally, functionally, or block scoped. Therefore, variables inside of a function
 * can NEVER be altered outside of the function. 
 * 
 * 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is 
 * held in memory somewhere(referenced), that closure stays ALIVE, and data can continue to exist in these closures!
 * 
 * Variables made in functions become 'private' or locally scoped variables due to closure.
 * Closure in a function can cut off access to the variables in the function to the rest of
 * your code. HOWEVER, if the result of running a function is referenced anywhere or assigned
 * to a variable, the closure of the function stays alive to provide access to the variable
 * the function created.
 * 
 */

// named function

// function keyword for delcaration
// v        v name of function
function letsAdd(x, y){

    // return statement is what will be delivered when function is called
    // v     v x and y will be replaced with arguments passed in at call time
    return x + y
}

console.log(letsAdd(5, 3));

// letsAdd(5, 3){

//             8
//   return (5 + 3);
// }
//
// 8 gets logged to console


// assigning a function to a variable


// variable assignment can be either let, const, or var
// v     v variable name for the function
// v     v               v function keyword and parameters
let letsSubtract = function(x, y){

    // return statement is what will be delivered when function is called
    // v     v x and y will be replaced with arguments passed in at call time
    return x - y
}

console.log(letsSubtract(8, 3));

// letsAdd(8, 3){
//
//             5
//   return (8 - 3);
// }
//
// 8 gets logged to console


// function without inputs

//                  does not take or need an input
//                    v
function greetingAlert(){
    console.log('Hello! Welcome to our website');
}

greetingAlert() // will log 'Hello! Welcome to our website' to the console


// function altering a global variable

let count = 0;

function counter(){

    // v increments the count variable that is outside of the function's scope
    count++
    return count;
}

console.log(counter()); // logs '1' to console 
console.log(counter()); // logs '2' to console 
console.log(counter()); // logs '3' to console 
console.log(count);     // logs '3' to console 


// closure

let oldObj = { name: 'Ava Alley' };

function alterObj(value, name, obj){

    // creating new object that will later be referenced
    let anObj = {};

    // cycling through input object's key/value pairs to push in to new object
    for(let key in obj){
        anObj[key] = obj[key];
    }

    anObj[name] = value;

    // result of calling function will ALWAYS be a new object
    return anObj;
}

// adding the call of the function to a variable keeps the closure of the function ALIVE
// since the object created can be now referenced elsewhere
let newObj = alterObj(27, 'age', oldObj);

console.log(newObj);
// logs the following object to console
// {
//     "name": "Ava Alley",
//     "age": 27
// }