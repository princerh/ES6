console.log(1)
console.log(2)
/* setTimeout(() => {
    console.log(3); // er mane aita pore hobe.. asynchronously
}) */

setTimeout(() => {
    console.log(3) // 4 second por ashbe aita.. 
},4000 );
console.log(4)
console.log(5)
console.log(6)

/* let num = 0;
// setTimeout er khalato vai setInterval 
setInterval( ()=>{
    num++;
    console.log(num);
//  console.log("Imu");
}, 2000) */ // 2 second por por console korbe 

// aita bondho korar way hocche jor kore 


let num = 0;
// setTimeout er khalato vai setInterval 
const clockId = setInterval( ()=>{
    num++;

    if(num > 6){
        clearInterval(clockId); // timeinterval off kore dibe..
    }
    console.log(clockId, num);
//  console.log("Imu");
}, 2000)


/* setTimeout() 
a time event function used to call another function after certain time period but executes the function only once
for clearing the timeout function, 
clearTimeout() is used.

setInterval()
same as setTimeout() with a slice difference that the execution of the function occurs continuously according to the specified time setInterval. here, the time interval works like a gap between the executions.  
for clearing the timeout function, 
clearInterval() is used 
*/