/* ---------- DEFAULT ADMIN ---------- */

if(!localStorage.getItem("users")){

const users=[

{
username:"admin",
password:"admin123",
role:"admin"
}

];

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

/* ---------- REGISTER ---------- */

function register(){

const username=
document.getElementById(
"registerUsername"
).value.trim();

const password=
document.getElementById(
"registerPassword"
).value.trim();

if(!username || !password){

alert(
"Please fill all fields"
);

return;

}

const users=
JSON.parse(
localStorage.getItem(
"users"
)
);

const exists=
users.find(
user=>
user.username===username
);

if(exists){

alert(
"Username already exists"
);

return;

}

users.push({

username,

password,

role:"user"

});

localStorage.setItem(

"users",

JSON.stringify(users)

);

alert(
"Registration successful"
);

window.location=
"login.html";

}

/* ---------- LOGIN ---------- */

function login(){

const username=
document.getElementById(
"loginUsername"
).value.trim();

const password=
document.getElementById(
"loginPassword"
).value.trim();

const users=
JSON.parse(
localStorage.getItem(
"users"
)
);

const user=
users.find(

u=>

u.username===username &&

u.password===password

);

if(!user){

alert(
"Invalid credentials"
);

return;

}

localStorage.setItem(

"currentUser",

JSON.stringify(user)

);

if(user.role==="admin"){

window.location=
"admin.html";

}else{

window.location=
"products.html";

}

}

/* ---------- HELPERS ---------- */

function getCurrentUser(){

return JSON.parse(

localStorage.getItem(
"currentUser"
)

);

}

function logout(){

localStorage.removeItem(
"currentUser"
);

window.location=
"login.html";

}
