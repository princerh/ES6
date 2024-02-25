function greeting(greetingHandler, name){
    //console.log(greetingHandler()); //Good Morning and undefined
   // greetingHandler(); // Good Morning
   greetingHandler(name);
}
// const name = "Halim mama"; 
// const numbers = [45, 54, 78];
// greeting(numbers);

// const laptop = {price: 23000, brand: "lenovo", memory: '8gb' }
// console.log(laptop);

function greetingHandler(name){
    console.log("Good Morning", name);
}

function greetEvening(name){
    console.log("Good Evening", name);
}

function greetNight(name){
    console.log("Good Night", name);
}

greeting(greetingHandler, 'Prince'); // greeting ta akta function pathacche greetingHandler namer..

greeting(greetingHandler, "Riazul"); // Good Morning Riazul
greeting(greetEvening, "Hasan"); //Good Evening Hasan

greeting(greetNight, "Bokachondro"); //Good Night Bokachondro

/* callBack amon akta funtion jeta ke parameter hishebe pathano hoy , jokhon e kono function k parameter hishebe pathano hoy and then vitore take call kora hoy, aita ke callBack function bole..  */


// a callback function is a function that is passed as an argument to another function, to be 'called back' at a time. 
