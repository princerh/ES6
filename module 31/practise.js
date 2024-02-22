// Task 1

let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC Primary School" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary: [
                    { school_name: "CDE secondary school" },
                    { location: "st lorence" }
                ]
            }
        ]
    }
}
console.log(data.sophia.study[1].secondary[1].location);

// st lorence

// Task 2 

let students = {
    2222: {
        name: "jack",
        section: "c",
        class: "ix",
        address: {
            "building no": 12,
            "street": "st. jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "herry",
        section: "D",
        class: "x",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "kachukhet",
            "country": "Bangladesh"
        }
    }
}
console.log(students[2222].address["city"]);
// Petersburg
console.log(students[3333].name);
// herry

// problem 1 
const numbers = [1,3,5,7,9];
const evenNumbers = numbers.map(x => x+1);
console.log(evenNumbers);
// [ 2, 4, 6, 8, 10 ]

// problem 2
const numbers2 = [33,50,79,78,90,101,30];
const divisible = numbers2.filter(x => x%10 === 0);
console.log(divisible);
// [ 50, 90, 30 ]

const tivisible = numbers2.find(x => x%10 === 0);
console.log(tivisible);
// 50

const instructor = [
    {name: "Nodi", age: 28, position: "Senior"},
    {name: "Akil", age: 26, position: "Junior"},
    {name: "Shobuj", age: 30, position: "Senior"},
    {name: "S.N Sakib", age: 70, position: "Junior"}
];

console.log(instructor);
const pos = instructor.filter(x => x.position === "Junior")
const name = pos.map(x => x.name).join(" ")
console.log(name);
// Akil S.N Sakib

const people = [
{name: "Meena", age: 20},
{name: "Rina", age: 15},
{name: "Suchorita", age: 22}
];

const result = people.reduce((accumulator, person) => accumulator + person.age, 0)
console.log(result);
// 57

// How can u empty an array? 
let myArray = [1, 2, 3, 4, 5];
myArray.length = 0;
console.log(myArray);

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);