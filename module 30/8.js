const glass = {name: "glass", color: "golden", price: 12, isCleaned: true};

const keys = Object.keys(glass);
console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ] 

const values = Object.values(glass);
console.log(values);
// [ 'glass', 'golden', 12, true ]

const pair = Object.entries(glass);// two dimentional key and value in an array. array of array;
console.log(pair);
/* [
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ]  */

// Object theke kono property remove korte chaile 
// way 1
delete glass.isCleaned;
console.log(glass);

// way 2
// destructuring diye 
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);
// { name: 'glass', color: 'golden', price: 12 }


// freeze mane object a kono value chnage korte dibe na, add, remove o korte dibe na
Object.freeze(glass); // freeze na korle aita dkhato { name: 'glass', color: 'golden', price: 12, source: 'Bangladesh' }
glass.source = "Bangladesh";
console.log(glass);
// freeze korate no change { name: 'glass', color: 'golden', price: 12 } 

glass.price = 5000;
console.log(glass);
/* freeze na korle aita dkhabe { name: 'glass', color: 'golden', price: 5000, source: 'Bangladesh' 
}  */

// seal 
Object.seal(glass);
glass.price = 10000;
console.log(glass);
// modify korbe sudhu { name: 'glass', color: 'golden', price: 10000, source: 'Bangladesh' }