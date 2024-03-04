const value = false;
console.log(!!value) // akta value truthy naki falsy ta janar sobcheye easiest way holo tar agee !! dewa , tahlei boolean value dibe

const nums = [3,5,7,9];
// const a = nums[0];
// const b = nums[1];
// const c = nums[2];
// console.log(a, b, c);
// instead of these system 

const [a, b, c, d]= nums;
console.log(a, b, c, d);

const Number = [1,2,3,4,5,6,7,8,9];
const [x,y,...z] = Number; // rest operator must be the last element
console.log(x,y,z);

const person = {
    name: "Hero Alom",
    age: 34,
    phone: "01862839456",
    address: {
        zilla: "Rajshahi",
        village: "Talaimari"
    },
    p: [1,2,3,4]
}
const person1 = person;
person1.email = "hasanriazul4@gmail.com";
console.log(person)// due to the nature of reference passing of non primitive. we could use person1 = {...person}
/* {
    name: 'Hero Alom',
    age: 34,
    phone: '01862839456',
    address: 'Faridpur',
    p: [ 1, 2, 3, 4 ],
    email: 'hasanriazul4@gmail.com'
  } */

// object destructuring 
const {phone, address, name} = person;
console.log(name); // Hero Alam 
const {zilla} = address;
console.log(zilla); // Rajshahi

const {zilla: district} = address; // property name ta k change korte chaile
console.log(district); // Rajshahi

const {name: amarName, ...rest} = person;
console.log(rest);
/* {
    age: 34,
    phone: '01862839456',
    address: { zilla: 'Rajshahi', village: 'Talaimari' },
    p: [ 1, 2, 3, 4 ],
    email: 'hasanriazul4@gmail.com'
  } */