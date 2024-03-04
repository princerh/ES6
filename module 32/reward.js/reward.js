const arr = [10, 34, 78, 18, 89, 23];
const sum = arr.reduce(function(prev , curr){
    console.log("Previous: ", prev, "Current: ", curr);

    return prev + curr;
}, 0)
console.log(sum); 
/* Previous:  0 Current:  10
Previous:  10 Current:  34 
Previous:  44 Current:  78 
Previous:  122 Current:  18
Previous:  140 Current:  89
Previous:  229 Current:  23
252 */

const obj = [
    {name:"Someone 0", salary: 100 }, 
    {name:"Someone 1", salary: 200 }, 
    {name:"Someone 2", salary: 300 }, 
    {name:"Someone 3", salary: 400 }, 
]
const totalSalary = obj.reduce(function(prev, curr){
    return prev + curr.salary;
}, 0)
console.log(totalSalary); // 1000

// nested Object 
const person = {
    name: "Prince",
    age: 26,
    address: {
        city: "Dhaka",
        sector: {
            Number: 15,
            age: "old"
        },
        location: "Shanir Akhra"
    }
}
console.log(person.address.location); //Shanir Akhra

console.log(person.address.sector.age); //old