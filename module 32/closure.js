// function kitchen(){
//     let roast = 0;
    
//     return function(){ //[Function (anonymous)]
//         roast++;
//         return roast;
//     }
// }
// const firstServer = kitchen();
// console.log(firstServer);
// //[Function (anonymous)]

// console.log(firstServer());
// 1

// function stopwatch(){
//     let counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// const watch1 = stopwatch();
// watch1()


/* A closure in JavaScript is like a bundled-up function along with all the variables it needs from its surrounding environment, allowing it to access and remember those variables even after the outer function has finished executing. */

function createCounter() {
    let count = 0; // Variable count is defined in the outer function's scope

    function increment() {
        count++; // Accessing and modifying count from the enclosing scope
        console.log(count);
    }

    return increment; // Returning the inner function
}

// Create a counter
let counter = createCounter();

// Each time you call the counter function, it will increase the count
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


/* inner function outer function er scope er moddhe thaka shokol variable er access pabe.. 
r jotober outer function call kora hobe totber er alda alda instance create hbe.. tai ager counter er man dhore rakbe  */