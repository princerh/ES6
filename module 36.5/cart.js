const showDetails = () => {
    const productField = document.getElementById("productField")
    const product = productField.value
    const quantityField = document.getElementById("quantityField")
    const quantity = quantityField.value
productField.value = ''
quantityField.value = ''
    show(product, quantity);

    saveProductToLocalStorage(product, quantity)
}

const show = (product, quantity) => {
    const ulContainer = document.getElementById("ul-container");
    const lit = document.createElement("li");
    lit.innerText = `${product}: ${quantity}`
    ulContainer.appendChild(lit);
    
}

const getStoredShoppingCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
cart = JSON.parse(storedCart) // local a string hishebe thake.. so string k object  a convert korte parse use korbo

    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
const cart = getStoredShoppingCart();
cart[product] = quantity;
console.log(cart);

// cart k amra object hishebe paitesi. object k shora shori local storage a set kora jay na . string hishebe pathaite hoy. ajnno amra object k stringfied kore nibo 

const cartStringified = JSON.stringify(cart)
console.log(cartStringified); // {"mobile":"7"}

// aiber ata ke amra local storage a set korte parbo 
localStorage.setItem("cart", cartStringified)

}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart()
    
console.log(savedCart) // {mobile: '7', drink: 'water'} 

for(const product in savedCart)
{
    //console.log(product); // mobile drink akekta property name dibe
    const quantity = savedCart[product] // property name diya value gula pabo
    console.log(product, ":", quantity);
    show(product, quantity); // append to li lists  so always browser a thakbe..  
}
}

displayProductsFromLocalStorage()

