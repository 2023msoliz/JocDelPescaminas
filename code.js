let numFiles = 0;
let numColumnes = 0;

const badera = "imagenes/badera20px.jpg";
const fons = "imagenes/fons20px.jpg";
const mina = "imagenes/mina20px.jpg";

function iniciarPartida() {
    let pedirNumFiles = parseInt(prompt("Introduce el número de filas."));

    if (pedirNumFiles > 30) {
        numFiles = 30;
    } else if (pedirNumFiles < 10) {
        numFiles = 10;
    } else {
        numFiles = pedirNumFiles;
    }

    let pedirNumColumnes = parseInt(prompt("Introduce el número de columnas"));

    if (pedirNumColumnes > 30) {
        numColumnes = 30;
    } else if (pedirNumColumnes < 10) {
        numColumnes = 10;
    } else {
        numColumnes = pedirNumColumnes;
    }

    console.log(numFiles);
    console.log(numColumnes);
    crearTaulell();
}

function crearTaulell() {
    let tablaHTML = "<table class='table' styles='border:1px solid black'>";

    for (let i = 0; i < numFiles; i++) {
        tablaHTML += "<tr>";
        tablaHTML += `<th><img src='${fons}'></th>`;

        for (let x = 0; x < numColumnes; x++) {
            tablaHTML += `<td><img src='${fons}'></td>`;
        }

        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("taulell").innerHTML = tablaHTML;
}

function obreCasella(){
    
}
