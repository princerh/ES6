// Hoisting is JavaScript's default behaviour of moving all declarations to the top of the current scope 

/* x = 1;
alert('x = ', + x);
var x; */

for(var i = 0; i< 5; i++){
    console.log(i);
}
console.log("outside", i);


/* 0
1
2
3
4
outside 5 */

// last a i er man 5 hoisilo , tokhnn var jehtu hoisting korse tai baire dkhaise.. 

// hoisting off korte chaile var er poriborte let use korbo..

for(let i = 0; i< 5; i++){
    console.log(i);
}
console.log("outside", i); // reference error dkhabe.. cz i is not defined

print5() // full function k jehtu hoist kore tai function k jekono jaygai call kora jabe

print(10);
function print5(){
    console.log("inside print5", 5);
}

// const print10 = function(){
//     console.log("inside print10", 10);
// } // error dkhabe.. cz const amnetei upore uthay na. mane hoist kore na.. 

var print10 = function(){
    console.log("inside print10", 10);
} //ReferenceError: print is not defined, print10 er man hobe undefined.. undefined kk function hishebe use kora jabe na, so print10 is not a function 



console.log(a);
var a = 5 // output: undefined;

console.log(b);
let b = 5; // output: reference error;

console.log(c);
const c = 5; // output: reference error;

displayMessage();
function displayMessage(){
    console.log("Hello World");
}
// Hello World

displayMessage();
var displayMessage = function displayMessage(){
    console.log("Hello World");
};
// type error 

/* var => function and global scope, can be redeclared, can be reassigned , hoisign behaviour initialized;

let => block scope, no , yes, uninitialized
const => block scope, no, no, uninitialized; */