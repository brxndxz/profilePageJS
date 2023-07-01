var user = document.querySelector("#user-name");

function editProfile(){
user.innerHTML = "Ana Torroja";
}

var usuarioDiv = [
    document.querySelector("#usuario"),
    document.querySelector("#usuario1"),
]
function borrarDiv(i) {
    usuarioDiv[i].remove();
}

var connections = [
    document.querySelector("#conn-request"),
    document.querySelector("#your-connections"),
]
//Agregar
function addConnection(i){
    var conn = connections[1];
    conn = parseInt(conn.innerText);
    conn++;
    connections[1].innerText = conn;
}
//Restar
function decrease(i){
    var conn = connections[0];
    conn = parseInt(conn.innerText);
    conn--;
    connections[0].innerText = conn;
}