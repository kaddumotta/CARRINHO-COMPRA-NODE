import createItem from "./item.js";

// adicionar um item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar um item no carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1){
        userCart.splice(index, 1);
    }
}


// diminui um item
async function removeItem(userCart, item) {

const indexFound = userCart.findIndex((p) => p.name === item.name);

if (indexFound == -1){
    console.log("Item não encontrado");
    return;
}

if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1;
    return;
}

if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
}
}

// diminui um item
async function adicionarItem(userCart, item) {

const indexFound = userCart.findIndex((p) => p.name === item.name);

if (indexFound == -1){
    console.log("Item não encontrado");
    return;
}

if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity += 1;
    return;
}

}


// calcular o total
async function calculateTotal(userCart) {
    console.log("\nYour Buy Cart Total is: ")

    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🛒 Total : ${result}`);
}

async function displayCart(userCart) {
    console.log("\nYour Cart List:");
    userCart.forEach((item, index) =>{
        console.log(`${index + 1 }. ${item.name} - R$ ${item.price} | Quantity:  ${item.quantity}x | Subtotal:  ${item.subtotal()}`);
    })
    
}

export {
    addItem,
    removeItem,
    calculateTotal,
    deleteItem,
    adicionarItem,
    displayCart
}
