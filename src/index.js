import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart =[];
const myWhishList = [];

console.log("Welcome to the your Buy Cart")

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);



await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, 0);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

await cartService.adicionarItem(myCart, item2);


await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);