/* 1. tell the difference between primitive and non primitive data types in javascript with example


Primitive Data Types:

Primitive data types are immutable, meaning they cannot be changed after they are created.
They are stored directly in memory and are accessed by value.
There are six primitive data types in JavaScript: number, string, boolean, null, undefined, and symbol.
Example:

javascript
Copy code
let num = 10; // number
let str = "Hello"; // string
let bool = true; // boolean
let n = null; // null
let undef = undefined; // undefined
Non-Primitive (Reference) Data Types:

Non-primitive data types are mutable, meaning they can be changed after they are created.
They are stored in memory heap and accessed by reference.
Examples of non-primitive data types include object, array, function, Date, etc.
Example:

javascript
Copy code
let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3]; // array
function greet() { return "Hello!"; } // function
In the case of non-primitive data types, when you assign a variable to another variable or pass it as an argument to a function, you are actually passing a reference to the original data, not a copy of it. This means that changes made to the data through one reference will affect all other references to the same data. */

/* 2. what are truthy and falsy value , give some example 
Truthy Values:

Values that are considered true when evaluated in a Boolean context are called truthy values.
Examples of truthy values include:
Non-empty strings: "hello", "true"
Non-zero numbers: 42, 3.14
Non-empty arrays: [1, 2, 3]
Objects: {name: "John", age: 30}
The boolean value true
The special value Infinity
Falsy Values:

Values that are considered false when evaluated in a Boolean context are called falsy values.
Examples of falsy values include:
An empty string: ""
The number 0 (zero)
The special value NaN (Not a Number)
The boolean value false
The special value null
The special value undefined */

/* 3. what is the difference between null and undefined 

In JavaScript, null and undefined are both used to represent the absence of a value, but they have slightly different meanings.

null:

null is a primitive value that represents the intentional absence of any object value.
It is explicitly assigned by a programmer to signify that a variable has no value or that an object does not exist or is unavailable.
It is a valid value of its own type null.
When you see null, it usually means that a variable has been explicitly set to indicate "no value."

undefined:

undefined is a primitive value automatically assigned to variables that have been declared but have not been assigned a value.
It indicates a variable that has not been initialized, or a property that does not exist in an object.
It is a valid value of its own type undefined.
When you see undefined, it usually means that a variable has not been assigned a value or that a property does not exist. */



/* 4. what are the difference between double equal and tripple equal
Double Equal (==):

The double equal operator performs type coercion if the operands are of different types before making the comparison.
It compares the values of the operands after attempting to convert them to a common type.
It can lead to unexpected results due to type conversion.
Example: 0 == false evaluates to true because false is coerced to 0.
Triple Equal (===):

The triple equal operator performs strict equality comparison without type coercion.
It compares both the values and the types of the operands.
It does not perform type conversion, so if the types are different, it returns false.
It is generally recommended to use === over == to avoid unexpected behavior caused by type coercion.
Example: 0 === false evaluates to false because 0 is a number and false is a boolean, and their types do not match.


 */

/* 5. what is scope in JavaScript 
In JavaScript, scope refers to the visibility and accessibility of variables and functions within your code. It determines where these variables and functions are available for use. */

/* 6. Define block scope and global scope 

Block Scope:

Block scope refers to the visibility and accessibility of variables and functions within a block of code, such as within curly braces {}.
Variables declared with let and const have block scope, meaning they are only accessible within the block in which they are defined.
Functions declared with function keyword do not have block scope.

Global Scope:

Global scope refers to the visibility and accessibility of variables and functions throughout the entire JavaScript codebase.
Variables and functions declared outside of any function or block have global scope.
They are accessible from anywhere within the JavaScript code. */