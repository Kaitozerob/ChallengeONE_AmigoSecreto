// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = "";
    input.focus(); 
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "⏳ Sorteando...";
    resultadoElemento.classList.add("pulse");

    setTimeout(() => {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        resultadoElemento.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;
        resultadoElemento.classList.remove("pulse");
        resultadoElemento.classList.add("highlight");
    }, 2000);
}