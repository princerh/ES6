const products = [
    {id: 1, name: "lenovo", price: 54000},
    {id: 2, name: "dell", price: 44000},
    {id: 3, name: "hp", price: 64000},
    {id: 4, name: "mac", price: 24000}
]
const names = products.map(product => product.name);
console.log(names);
// [ 'lenovo', 'dell', 'hp', 'mac' ]

const prices = products.map(product => product.price )
console.log(prices);
// [ 54000, 44000, 64000, 24000 ]

// forEach 
products.forEach(product => console.log(product.id));
/* 1
2
3
4 */

// filter 
const expensive = products.filter(product => product.price > 30000);
const varib = expensive.map(price => price.price);
console.log(varib);
// [ 54000, 44000, 64000 ] 
console.log(expensive);
/* [
    { id: 1, name: 'lenovo', price: 54000 },
    { id: 2, name: 'dell', price: 44000 },
    { id: 3, name: 'hp', price: 64000 }
  ] */

// //   find 
// const affordable = products.find(p => p.price < 40000);
// console.log(affordable);
// // { id: 4, name: 'mac', price: 24000 }

// // reduce 
// const total = products.reduce( (acum, current) => acum + current.price, 0);
// console.log(total);
// // 186000