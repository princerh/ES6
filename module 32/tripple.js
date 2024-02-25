/*
1.
const first = 2;
const second = 2;
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
//  values are equal 

2. 
const first = 1;
const second = true;
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are not equal


3. 
const first = 1;
const second = true;
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are equal 


4.
const first = 1;
const second = false;
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are not equal

5.
const first = 0;
const second = false;
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are equal


6.
const first = '0';
const second = false;
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are equal


7.
const first = '0';
const second = false;
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are not equal

// 1. type coercion
// 2. type conversion
// 3. type casting 
// behind the scene a boolean k convert kore value te .. then check kore.. 

so avoid == 
use ===
type coersion koreo dkhe.. aita vodro uttor..
fokira uttor hoilo value r data type duitai check kore...

same type er hole sora sori value check kore.. different type er hole type casting kore then check kore.. 





9.
const first = {};
const second = {};
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are not equal

10.
const first = {x: 5};
const second = {x: 5};
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}


kahni ki? same value e to dicchi..
primitive data type er khetre == and === thik thak kaj kore.. non-primitive er khetre kaj kore na.. cz non primitive er khetre tara value k check korbe na, reference k check korbe.. as tader reference ta alda.. 


11.
const first = {x: 5};
const second = first;
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are equal
as reference same dui tar e

*** 
1. always use ===
2. equal comparison doesn't wrk for non-primitive

non primitive k compare korte chaile,
prothom takey loop through korbo then arktar property or number er sathe compare korbo

or, 
const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

Object.entries(k1).toString() === Object.entries(k2).toString();
// true
*/




const first = {x: 5};
const second = first;
if(first === second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}
// values are equal