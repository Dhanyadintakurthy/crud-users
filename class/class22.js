document.body.innerHTML = `
<div>
<input class="add-user-name" placeholder ="enter user name"/>
<input class="add-user-avatar" placeholder ="enter user pic"/>
<button onclick="adduser()">ADD USER</button>
<div/>
<section class="user-container"></section>`;
async function getallusers(){
    const data = await fetch("https://6166c4d513aa1d00170a66ef.mockapi.io/users");
    const users = await data.json();
    
    const usercontainer = document.querySelector(".user-container");
    usercontainer.innerHTML = "";

    users.forEach((user)=>{
        usercontainer.innerHTML += `
        <div>
        <img src="${user.avatar}" alt="${user.name}"/>
        <h1>${user.name}</h1>
        <button onclick="edittoggleuser()">EDIT</button>
        <button onclick="deleteuser(${user.id})">DELETE</button>
        <div class = "edituser-${user.id}">
        <input class="edit-${user.id}-user-name" placeholder ="enter user name"/>
        <input class="edit-${user.id}-user-avatar" placeholder ="enter user pic"/>
        </div>
        <button onclick="edituser()">SAVE</button>
        </div>
        `;
    });
    console.log(users);
    names = users.map((user)=>user.name);
    console.log(names);
}

getallusers();

async function deleteuser(userid) {
    console.log("deleting..",userid);
    const data = await fetch("https://6166c4d513aa1d00170a66ef.mockapi.io/users/"+ userid,
    {method: "DELETE"}
    );
    getallusers();
}

async function adduser() {
    console.log("adding..");
    const name = document.querySelector(".add-user-name").value;
    const avatar = document.querySelector(".add-user-avatar").value;
    console.log(name,avatar);
    const data = await fetch("https://6166c4d513aa1d00170a66ef.mockapi.io/users",
    {method: "POST",
    headers: { "Content-Type": "application/json"},
    body : JSON.stringify({name:name,avatar:avatar})}
    );
    getallusers();
function edittoggleuser() {
    console.log("editing..");
    const edituserform = document.querySelector(".edituser-${user.id}");
    edituserform.style.display = edituserform.style.display == "block" ? "none" : "block" ;
}
async function edituser() {
    console.log("editing..");
    const name = document.querySelector(".edit-${user.id}-user-name").value;
    const avatar = document.querySelector(".edit-${user.id}user-avatar").value;
    console.log(name,avatar);
    const data = await fetch("https://6166c4d513aa1d00170a66ef.mockapi.io/users",
    {method: "POST",
    headers: { "Content-Type": "application/json"},
    body : JSON.stringify({name:name,avatar:avatar})}
    );
    getallusers();
 }