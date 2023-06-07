import nav from "../component/nav.js";


document.getElementById("nav").innerHTML=nav()


let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}

document.getElementById("cart").innerHTML = `Total Price: ${totalprice}`;