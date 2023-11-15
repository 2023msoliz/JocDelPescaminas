let numFiles = 0;
let numColumnes = 0;

function iniciarPartida() {
    let pedirNumFiles = parseInt(prompt("Introduce el numero de filas."));

    if (pedirNumFiles > 30) {
        numFiles = 30;
    } else if (pedirNumFiles < 10) {
        numFiles = 10;
    } else {
        numFiles = pedirNumFiles;
    }

    let pedirNumColumnes = parseInt(prompt("Introduce el numero de columnas"));

    if (pedirNumColumnes > 30) {
        numColumnes = 30;
    } else if (pedirNumColumnes < 10) {
        numColumnes = 10;
    } else {
        numColumnes = pedirNumColumnes;
    }
    console.log(numFiles);
    console.log(numColumnes);
}

function crearTaulell() {
    let tablaHTML = "<table class='table'>";
    for (let i = 1; i <= 10; i++) {
        const resultado = i;
        tablaHTML += `<tr><td>${i} x ${i}</td><td>${resultado}</td></tr>`;
    }

    tablaHTML += "</table>";
    // Muestra la tabla en el elemento con el ID "tablaDeMultiplicar"
    document.getElementById("taulell").innerHTML = tablaHTML;
}
