// 1. Global scope: globally kono variable declare korle sobai access korte parbe 
// 2. Function scope: function er vitore kono variable declare korle sudhu matro function er vitorer sobai access korte parbe 
// 3. Block scope: kono second bracket er moddhe (if ,loop) kono variable declare korle sudhu second bracker vitorer block er sobai access pabe.. 





function add(a,b){
    const total = a+b;
    
    if(b>5){
        const sum = 25 + a + b;
    }

    // error. cz sum if er age declare korte hobe. so sum sudhu matro if er moddhe available 
// aita k bole block scope 
else {
    const sum = 5 + a + b;
    var current = sum;
}
// console.log(sum); // reference error
console.log(current); //13
}
//console.log(a,b); // reference error dkhabe.. cz a and b baire pawa jabe na.. agula function er vitore pawa jabe sudhu
// add(5,3) undefined

add(5,3);
// 12 

// var diye declare korle sha man ta chara declaration ongsho k upore niye jay,,, aita k bole hoising.. jei condition ai dhukuk, var current upore chole jay.. ager bar var current kono value pay nai tai undefined dkhaisilo...  


// var er vitore kono function likle function pura ta k hoisting korbe 
