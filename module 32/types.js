// other programming language 
// int a = 5;
// string b = "alim halim kalim";
// bool c = true;
// object student = {name: "noya", id: 55}
// int[] Numbers = [12, 45, 78];
// string[] friends = ['abul', 'babul'];


// dynamic type language like javascript 
// javaScript is a dynamic typed programming language 
const a = 5;
const b = "alim halim kalim";
const d = true 
const ages = [45,65,48];
const student = {id: 23, class: 7};
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);
// therefore, arrays are also a object ;
// primitive - single value rakhe - number string boolean
// Non primitive - multiple value - array Object

let x = 5;
let y = x;
console.log(x, y);
// 5 5
y = 7;
console.log(x, y);
// 5 7
// so y er value change hocche, kintu x er value change hoy nai... y er value reasign korsi jodio. akhane x r y alda alda memory space a value rakhse.. 

// let p = {job: 'web developer'};
// let q = p;
// console.log(p, q);
// { job: 'web developer' } { job: 'web developer' } p and q er duitar value e same

// let p = {job: 'web developer'};
// let q = p;
// q = {job: "backend"}; //q er full new man value hishebe set korsi.. so q er new value e console a pawar kotha.. 
// console.log(p, q);
// { job: 'web developer' } { job: 'backend' } 



let p = {job: 'web developer'};
let q = p;
q.job = "frond end develper";
console.log(p, q); 
// { job: 'frond end develper' } { job: 'frond end develper' }  pura q change korle alda hishab.. but q er akta property change korle p o change hobe.. cz p and q ke ak e space a reference korse Object.. 
// ajnnoi object and array non primitive.. karon era reference takey dhore rakhe.. 

// Primitive type 
// 1. numbers 
// 2. strings
// 3. boolean 
// 4. null 
// 5. undefined 

// Non Primitive type
// 1. objects 
// 2. arrays 






