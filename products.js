/* ---------- AUTH CHECK ---------- */

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

/* ---------- DEFAULT PRODUCTS ---------- */

if(!localStorage.getItem(
"products"
)){

const products=[

{
id:1,
name:"Laptop",
price:79999,
category:"Electronics",
image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},

{
id:2,
name:"Smartphone",
price:49999,
category:"Electronics",
image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
id:3,
name:"Headphones",
price:4999,
category:"Accessories",
image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
id:4,
name:"Keyboard",
price:1999,
category:"Accessories",
image:
"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},

{
id:5,
name:"Mouse",
price:999,
category:"Accessories",
image:
"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
},

{
id:6,
name:"Monitor",
price:14999,
category:"Electronics",
image:
"https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500"
}

];

localStorage.setItem(

"products",

JSON.stringify(products)

);

}

/* ---------- LOAD PRODUCTS ---------- */

let products =
JSON.parse(
localStorage.getItem(
"products"
)
);

const container =
document.getElementById(
"productsContainer"
);

function displayProducts(){

const search =
document.getElementById(
"searchInput"
)
.value
.toLowerCase();

const category =
document.getElementById(
"categoryFilter"
)
.value;

let filtered =
products.filter(product=>{

const matchSearch=

product.name
.toLowerCase()
.includes(search);

const matchCategory=

category === "" ||

product.category === category;

return(

matchSearch &&

matchCategory

);

});

container.innerHTML="";

filtered.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img
src="${product.image}"
alt="${product.name}">

<h3>
${product.name}
</h3>

<p>
₹${product.price}
</p>

<button
class="add-cart-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}

displayProducts();

/* ---------- FILTERS ---------- */

document
.getElementById(
"searchInput"
)
.addEventListener(
"input",
displayProducts
);

document
.getElementById(
"categoryFilter"
)
.addEventListener(
"change",
displayProducts
);

/* ---------- CART ---------- */

function addToCart(id){

let cart =
JSON.parse(
localStorage.getItem(
"cart"
)
) || [];

const product =
products.find(
p=>p.id===id
);

const existing =
cart.find(
item=>item.id===id
);

if(existing){

existing.quantity++;

}else{

cart.push({

...product,

quantity:1

});

}

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

alert(
"Added to cart"
);

}
