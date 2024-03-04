const { queue } = require("async");

function a(){
    console.log("a")
    b();
    console.log("aa")
}
function b(){
    console.log("b")
    d();
    console.log("bb");
}
function d(){
    console.log("d");
    console.log("dd");
}

function x(){
    console.log("x")
    y()
    console.log("xx")
}
function y(){
    console.log("y")
    z();
    console.log("yy")
}
function z(){
    console.log("z")
    console.log("zz")
}

// akhane set time out dile o seta waiting a thakbe.. asynchronous hoye jabe 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    // fetch age ase but tobuo pore console hobe. fetch ante jawar time ai javascript bakigula console kore dise .
a();
x();


// call stack 
/* 1. keeps track of all the operations in line to be executed; 
2. whenever a function is finished, it is popped from the stack; */ 

// event queue
1. sends new functions to the stack fro processing 
2. follows the queue data structure 
3. maintains the correct sequence in which all operations should be sent for execution 


// javascript single threaded holeo sudhu matro event queue er karone asynchronously kaj korte pare 