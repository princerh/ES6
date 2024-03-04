const student = {
    name: "Reazul Hasan Prince",
    Roll: 1710003,
    Address: {
        Road: "Maitri Sorok",
        Area: "Nurpur",
        "House No": 1362/7
    },
    Result: [3.28, 3.66, 3.77],
    Subject: ["EEE", "CSE"]
}
console.log(student);

const jsonFormat = JSON.stringify(student);
console.log(jsonFormat);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 