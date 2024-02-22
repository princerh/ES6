const numbers = [4,5,2,8,10];
// const doubled = [];
// for(const num of numbers){
//     const dobule = num**2;
//     doubled.push(dobule);
// }
// console.log(doubled);

function doubleIt(num){
    return num*2;
}

const result = numbers.map(doubleIt)
console.log(result);
// [ 8, 10, 4, 16, 20 ]
/* 
MAP loops through each Element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the result; */
 
const double2 = n => n *2;
const output = numbers.map(double2);
console.log(output);
// [ 8, 10, 4, 16, 20 ]


const output2 = numbers.map( n => n*3)
console.log(output2);

const num = [ 8, 10, 4, 16, 20 ];
const fourth = num.map(num => num*4);
console.log(fourth);
// [ 32, 40, 16, 64, 80 ]

const halves = num.map(num => num/2);
console.log(halves);
// [ 4, 5, 2, 8, 10 ]

const add = num.map(num => num + 10);
console.log(add);

const juniors = ["sakib", "barshon", "mayeen", "protik", "mahdi", "hasib", "dipto"];
const length = juniors.map(junior => junior.length);
console.log(length);
/* [
    5, 7, 6, 6,
    5, 5, 5
  ]  */

  const friends = ["udoy", "saber", "peal", "barshon", "moyeen", "ahsan", "islam"];
  const firstLetter = friends.map(friend => friend[0]);
  console.log(firstLetter);
  /* [
    'u', 's', 'p',
    'b', 'm', 'a',
    'i'
  ] */
