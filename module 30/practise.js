// task 1 
const mul = (a , b , c) => a * b * c ;
console.log(mul(2, 3, 4));

// task 2
const str = `I am a web developer.
I love to code.
I love to eat biriyani`;
console.log(str);

// task 3 
const add = (x, y = 7) => x + y;
console.log(add(3));

// task 4 problem 2
const friends = ["shakil", "peal", "udoy", "saber", "shameem"];
const newFriends = [];

const check = friends => {
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newFriends.push(friend);
        }
    }
    return newFriends;
}

console.log(check(friends));

// task 5 problem 3

let sum = 0;
const sqauree = array => {
    for(const arr of array){
        sum = sum + arr**2;
    }
    return sum/array.length;
}
console.log(sqauree([1,2,3,4]));

// problem 4
const merge = (array1, array2) =>  Math.max(...array1, ...array2);
console.log(merge([1,20,3,4],[5,6,7,8,9]));
