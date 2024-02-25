
// let number = null; // null set kore diso.. 
// let number; // kono value e defined koro nai,, undefined



/* 
8 ways to get undefined: 
1.  variable that is not initialized will give undefined
let first ;
console.log(first);
// undefined

2. function with no return 
function second(a, b){
    const total = a + b;
}
const result = second();
console.log(result);
// undefined

3. parameters that are not passed to the function 
function third(a, b, c, d){
    const total = a+ b +c +d;
    console.log(a, b, c, d);

}
third(2, 5);
// 2 5 undefined undefined

4. if return has nothing on the right side will return undefined
function noNegative(a, b){
    if(a < 0 || b < 0){
        return 
    }
    return a + b;
}

// const total = noNegative(2, 5);
// console.log(total); // 7

const total = noNegative(2, -5);
console.log(total); // undefined

5. property doesn't exist in an object will return undefined
const fifth = {id: 2, name: "ponchom", age: 40};
console.log(fifth.age, fifth.salary); 
// 40 undefined

6. accessing array elements outside of the index range 
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200])
// 89 undefined undefined

7. Deleting array elements outside of the index range
const sixth = [4, 89, 87, 56, 54];
you should not use explicitly delete an array value. Rathe use splice() method;
delete sixth[1]; //explicitly delete an index
console.log(sixth[1], sixth[5], sixth[200]);
// undefined undefined undefined 

8. set a value directly to undefined.. instead use null
const eight = undefined;
// if you mean that data has nothing to read, then use 'null';
const ninth = null;
// Object, null er data type object.. aita akta bug javaScript er.. 
const data = {results: [], updated: null}
console.log(typeof undefined, typeof ninth);
// undefined
*/ 







// Quiz 
let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);

const isTrue=true;
console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }
   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);