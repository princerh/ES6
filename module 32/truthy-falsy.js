/*
Truthy:
1. true 
const x = true;

2. Any positive or negative number except zero
const x = 4;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

3. Any string is truthy except empty string
const x = "S";
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}
or, 
const x = " ";
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}
or, 
const x = '0';
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}
or,
const x = 'false';
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

4. '0' , 'false'

5. empty object, object with property
let x = {}
console.log(x) // undefined;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

6. empty array , array with numbers 
let x = [];
console.log(x) // undefined;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

7. 


Falsy:
1. false 
const x = false;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

2. 0
const x = 0;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

3. empty string , ''
const x = "";
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

4. undefined 
let x;
console.log(x) // undefined;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

5. null 
let x = null;
console.log(x) // undefined;
if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}

6. 
*/


// Optional

// check falsy 
const y = '';
if(!y){
// jodi x falsy hoy tahole truthy banabe. tahle if er vitore dhukbe. 
console.log("value is falsy");
}
// value is falsy 

const x = null;
if(!x){
// jodi x falsy hoy tahole truthy banabe. tahle if er vitore dhukbe. 
console.log("value is falsy");
}
// value is falsy



// check true 
const z = {class: 9};
if(!!z){
    // value jodi true hoy tahole prothom a negative a nibe, tarpor abar positive nibe 
    console.log("value is truthy");
}
// value is truthy