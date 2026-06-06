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

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

const container =
document.getElementById(
"ordersContainer"
);

const userOrders =
orders.filter(
order =>
order.user === currentUser.username
);

if(userOrders.length === 0){

container.innerHTML =

`
<h2>
No orders found
</h2>
`;

}

userOrders.forEach(order=>{

container.innerHTML +=

`

<div class="order-card">

<h3>

Order #${order.id}

</h3>

<p>

Date:
${order.date}

</p>

<p>

Total:
₹${order.total}

</p>

<p>

Status:
<span class="status">

${order.status}

</span>

</p>

</div>

`;

});
