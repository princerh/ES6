const max = Math.max(6,23,45,67,4);
console.log(max);
// 67
const numbers = [3,4,2,45,5,43,90,32,15];
const arrayMax = Math.max(numbers);
console.log(arrayMax);
// NaN cause math.max er vitor akta array gese. math.max sudhu sonkha niye kaj kore..

// Math.max k sudhu sonkha dite chaile 
const arrym = Math.max(...numbers);
console.log(arrym);
// 90
// kono arra theke number nite chaile spread operator nibo
const nums = [4,5,61,67,8];
const nums2 = nums;
// const nums2.push(12); nums2 te 12 dhukaisi.. nums a dhukai nai , but tobuo nums ao 12 k dkha jabe. cause javascript array er reference ao value set kore dey . non primitve like object and array computer a same memory refer kore. 
console.log(nums);
console.log(nums2);
// [ 4, 5, 61, 67, 8 ]
// [ 4, 5, 61, 67, 8 ]

const dosto = [...nums]; // spread diye korle reference ta r thake na. 
nums.push(34);
console.log(dosto);
// [ 4, 5, 61, 67, 8 ]
console.log(nums);
// [ 4, 5, 61, 67, 8, 34 ]

const sonkha = [15, ...dosto, 12, 45]; // adding extra element using spread operator
console.log(sonkha);
/* [
    15, 4,  5, 61, 67,
    8, 12, 45
  ] */