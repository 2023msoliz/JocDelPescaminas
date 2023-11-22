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
    crearTaulell();
    setMines();
}

function crearTaulell() {
    let tablaHTML = "<table class='table' style='border: 2px solid black; border-collapse: collapse; padding:2px;'>";


    for (let i = 0; i < numFiles; i++) {
        tablaHTML += "<tr>";
        for (let x = 0; x < numColumnes; x++) {
            tablaHTML += `<td id="${i},${x}" data-mina="false" style='border: 2px solid black; border-collapse: collapse; padding:2px;'><img onclick="obreCasella(${x},${i})"src='${fons}'></td>`;
        }
        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("taulell").innerHTML = tablaHTML;
}

function obreCasella(i, x) {
    alert(`fila ${i} columna ${x}`);
    if (condition) {

    } else {
        

    }

}

function setMines() {
    let cassillasTotales = numFiles * numColumnes;
    console.log(cassillasTotales);
    let numMinas = Math.floor(0.17 * cassillasTotales);
    for (let index = 0; index < numMinas; index++) {
        let fila = Math.floor(Math.random() * numFiles);
        let columna = Math.floor(Math.random() * numColumnes);
        let td = document.getElementById(`${fila},${columna}`);
        console.log(td);
        if (td.dataset.mina ==="true") {
            index--;
        } else {
            td.dataset.mina = "true";
        }

    }

}
function calculaAdjacents() {

}
function esMina(i, x) {
    let td = document.getElementById(`${index},${j}`);
    if (td.dataset.mina == "true") {
        return true;
    } else {
        return false;
    }

}
