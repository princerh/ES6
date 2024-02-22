const data = [{id: 1, name: "Abul", address: "kochu khet"}]
console.log(data.name); 
// undefined

console.log(data[0].name);
// Abul

const products = {
    count: 5000,
    data: [
        {id: 1, name: "lenovo laptio", price: 65000},
        {id: 2, name: "Macbook", price: 35000}
        
    ]
}
console.log(products.data[1].price);
// 35000

const user = {
    id: 5001,
    name: 'shoriful raj',
    address: {
        street: {
            first: "54/1 uttor site",
            second: "poribag er goli",
            third: "no dorai"
        },
        city: "Dhaka"
    }
}

console.log(user.address.street.second)
// poribag er goli

const user2 = {
    id: 50002,
    name: "pori bibir majar",
    address: {
        city: "chittagong",
        country: "Bangladesh"
    }
}
console.log(user2.address.street?.second) // jodi street thake tahole dhukbe second a, na thakle dhukbe na , ata k bole optional chaining
// undefined