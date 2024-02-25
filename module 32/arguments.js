function sum(a, b, c) { // a b c agula holo parameter 
    console.log(arguments); //[Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 } , argument sudhu matroi function er moddhe pawa jabe, arguments array like object er moto dkhabe output.. 
    console.log(arguments[4]) //98
    // type check korle bolbe aita Object
    // jehtu agula array er moto tai for loop o chalano jabe.. 
    //arguments.push(45) // but arguments a push kora jabe na jodio array er moto
    const args = [...arguments];
    console.log(args) // akhon pure array  hye gese.. akhon shob operation kora jabe.. 
    const result = a + b+ c;
    return result;
}
const total = sum( 45, 89, 12, 45 , 98, 56); // call korar somoy jegula pathabo segula arguments
console.log(total); // 146


// function a koita perameter declare korsi seta jante chaile.. 
console.log(sum.length); // 3

