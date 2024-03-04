// highly abstraction in javascript 
/* 1.  we don't have to handle garbage collection
2. we don't have to handle resource management and memory allocation 
3. reduces details so that developers can focus on logic better.
4. improves understability as well as maintainablity of the code  */


// JavaScript collects garbages automatically 
 

/* JavaScript is a JIT compiled language. 
JavaScript is not a purely interpreted language.
modern JavaScript is JIT compiled.
JUST IN TIME compiler converts the entire code into machine code and execute them immediately. */

/* JavaScript is a multi-paradigm language.. onk vabe code organize kora jay. 

1. procedural programming
2. oop
3. functional programming

JavaScript is proto-typed based language. 
array object sob gulai actually object 

JavaScript is a dynamically typed language. cz ata k data type bole dewa lage na..  */

/* JavaScript =>
1. garbage collection automatically 
2. JIT compiled 
3. multi-paradigm language
4. proto-typed based language
5. dynamically-typed language
6. High abstraction  */

JavaScript er file chalanor jinish holo V8 engine.. v8 engine ta c++ diye banano hoise. cz c++ lower level er language mane machine er kacha kachi engine.. v8 dye Node.js o chole.. 


JavaScript er compile kora lage na.. 
v8 engine JavaScript file k parse kore tree banaya then kaj kore.. 

chrome er vitore akta special engine ase named V8.. 
 

// execution context and call stack 
/* JavaScript kotay execute kore er jnno this name er key ase 
execution context -> code ta kothay  cholbe. tar sathe kar kar relation thakbe.. it is an environment 

context 2 types
1. global execution context (gec)
2. function execution context (fec)/local execution contex (lec)

whenever the JavaScript engine receives a script file, it first creates a default execution context known as the global execution context (gec);

gec is the base/default execution context;
all JavaScript code that is not inside of a function gets executed

for every JavaScript file , there can only be one gec */ 

// function execution context
each function has its own execution context

the execution context is created in two phases: 
1. creation phase 
2. execution phase


