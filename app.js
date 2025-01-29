// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombreCampo = document.getElementById("amigo").value;
    if(nombreCampo === ""){
        alert("Debe ingresar un nombre");
    }else{
        amigos.push(nombreCampo);
    limpiarCampo();
    }
    recorrerAmigos();
}

function recorrerAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}


function sortearAmigo(){
    let numero = Math.floor(Math.random() * amigos.length);;
    if(amigos.length === 0){
        document.getElementById('resultado').innerHTML = "No hay amigos para sortear";
    }else{
        document.getElementById('resultado').innerHTML = `El amigo a sortear es: ${amigos[numero]}`;
    }
}

function limpiarCampo(){
    document.getElementById("amigo").value = "";
}