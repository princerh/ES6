// let num1 = 5;
// let num2 = 7;
// function multiply(a, b){
// const result = a*b;
// return result;
// }
// const output = multiply(num1, num2);
// console.log(output); //35

let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
const result = a*b;
return result;
}
console.log(num1); // 5
const output = multiply(num1, num2);
console.log(num1); // 5
console.log(output); //189 
// so primitive type er khetre function er vitore variable tar value change kore dile man same e thakbe.. change hobe na.. 
// so primitive types are passed by value ;

let student1 = { name: 'jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};


function makeMovie(couple1, couple2){
    couple1.name = 'ononto';
    couple2.partner = "mim";
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

// non primitive er khetre function er vitore eder property change kore dile change hoye jabe. cz couple1.name agula akdom reference takei change kore dey... 
// so object and array are passed by reference 