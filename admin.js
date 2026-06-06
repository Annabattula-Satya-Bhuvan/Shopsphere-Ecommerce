const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(

!currentUser ||

currentUser.role !== "admin"

){

window.location =
"login.html";

}

/* PRODUCTS */

function loadProducts(){

const products =
JSON.parse(
localStorage.getItem(
"products"
)
) || [];

const container =
document.getElementById(
"adminProducts"
);

container.innerHTML="";

products.forEach(product=>{

container.innerHTML +=

`

<div class="admin-card">

<h3>

${product.name}

</h3>

<p>

₹${product.price}

</p>

<p>

${product.category}

</p>

<button
onclick="deleteProduct(${product.id})">

Delete

</button>

</div>

`;

});

}

loadProducts();

function addProduct(){

const name =
document.getElementById(
"productName"
).value;

const price =
document.getElementById(
"productPrice"
).value;

const category =
document.getElementById(
"productCategory"
).value;

const image =
document.getElementById(
"productImage"
).value;

let products =
JSON.parse(
localStorage.getItem(
"products"
)
) || [];

products.push({

id:Date.now(),

name,

price:Number(price),

category,

image

});

localStorage.setItem(

"products",

JSON.stringify(products)

);

loadProducts();

alert(
"Product Added"
);

}

function deleteProduct(id){

let products =
JSON.parse(
localStorage.getItem(
"products"
)
);

products =
products.filter(
p=>p.id!==id
);

localStorage.setItem(

"products",

JSON.stringify(products)

);

loadProducts();

}

/* ORDERS */

function loadOrders(){

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

const container =
document.getElementById(
"adminOrders"
);

container.innerHTML="";

orders.forEach(order=>{

container.innerHTML +=

`

<div class="admin-card">

<h3>

Order #${order.id}

</h3>

<p>

User:
${order.user}

</p>

<p>

₹${order.total}

</p>

<select
onchange="updateStatus(${order.id},this.value)">

<option
${order.status==="Pending"?"selected":""}>
Pending
</option>

<option
${order.status==="Processing"?"selected":""}>
Processing
</option>

<option
${order.status==="Shipped"?"selected":""}>
Shipped
</option>

<option
${order.status==="Delivered"?"selected":""}>
Delivered
</option>

</select>

</div>

`;

});

}

loadOrders();

function updateStatus(id,status){

let orders =
JSON.parse(
localStorage.getItem(
"orders"
)
);

orders =
orders.map(order=>{

if(order.id===id){

order.status=status;

}

return order;

});

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

}
