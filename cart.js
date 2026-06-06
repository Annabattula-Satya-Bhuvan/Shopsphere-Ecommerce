/* ---------- AUTH ---------- */

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(!currentUser){

window.location =
"login.html";

}

/* ---------- LOAD CART ---------- */

function loadCart(){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
) || [];

const container =
document.getElementById(
"cartContainer"
);

container.innerHTML="";

let total = 0;

cart.forEach(item=>{

total +=
item.price *
item.quantity;

container.innerHTML += `

<div class="cart-item">

<img
src="${item.image}"
alt="${item.name}">

<div class="cart-info">

<h3>
${item.name}
</h3>

<p>

₹${item.price}

</p>

</div>

<div class="cart-actions">

<button
class="qty-btn"
onclick="decreaseQty(${item.id})">

-

</button>

<span>

${item.quantity}

</span>

<button
class="qty-btn"
onclick="increaseQty(${item.id})">

+

</button>

<button
class="remove-btn"
onclick="removeItem(${item.id})">

Remove

</button>

</div>

</div>

`;

});

document.getElementById(
"cartTotal"
).innerText = total;

}

loadCart();

/* ---------- INCREASE ---------- */

function increaseQty(id){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
);

cart =
cart.map(item=>{

if(item.id===id){

item.quantity++;

}

return item;

});

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

loadCart();

}

/* ---------- DECREASE ---------- */

function decreaseQty(id){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
);

cart =
cart.map(item=>{

if(

item.id===id &&

item.quantity > 1

){

item.quantity--;

}

return item;

});

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

loadCart();

}

/* ---------- REMOVE ---------- */

function removeItem(id){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
);

cart =
cart.filter(
item=>item.id!==id
);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

loadCart();

}

/* ---------- CHECKOUT ---------- */

function checkout(){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
) || [];

if(cart.length===0){

alert(
"Cart is empty"
);

return;

}

let orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

const total =
cart.reduce(

(sum,item)=>

sum +
item.price *
item.quantity,

0

);

orders.push({

id:Date.now(),

user:
currentUser.username,

items:cart,

total,

status:"Pending",

date:
new Date()
.toLocaleString()

});

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

localStorage.removeItem(
"cart"
);

alert(
"Order placed successfully"
);

window.location =
"orders.html";

}
