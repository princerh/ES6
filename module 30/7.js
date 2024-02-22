const doubleThem = (a, b) => [a**2, b**2]; 

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

const actor = {
    name: 'Ananta',
    age: 30,
    phone: '023323',
    money: 23212432
};
// const name = actor.name
// console.log(name);

// if right side Object, left side of destructuring will be Object
// use property name as the variable 
const {phone, age} = actor;
console.log(phone, age); 
// 023323 30

// new variable ao newa jabe chaile 
const {phone, age: boyosh} = actor;
console.log(phone, boyosh); 
// 023323 30

// array destructuring 
const numbers = [45, 99];
const [first, second] = numbers;
console.log(`first one is  ${first} and second one is ${second}`);

// first one is  45 and second one is 99

