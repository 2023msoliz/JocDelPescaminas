let numFiles = 0;
let numColumnes = 0;
let juegoTerminado = false;

// Rutas de las imágenes utilizadas
const badera = "imagenes/badera20px.jpg";
const fons = "imagenes/fons20px.jpg";
const mina = "imagenes/mina20px.jpg";

// Función para iniciar una nueva partida
function iniciarPartida() {
    // Solicitar al usuario el número de filas
    let pedirNumFiles = parseInt(prompt("Introduce el número de filas."));

    // Validar y ajustar el número de filas dentro del rango permitido (10-30)
    if (pedirNumFiles > 30) {
        numFiles = 30;
    } else if (pedirNumFiles < 10) {
        numFiles = 10;
    } else {
        numFiles = pedirNumFiles;
    }

    // Solicitar al usuario el número de columnas
    let pedirNumColumnes = parseInt(prompt("Introduce el número de columnas"));

    // Validar y ajustar el número de columnas dentro del rango permitido (10-30)
    if (pedirNumColumnes > 30) {
        numColumnes = 30;
    } else if (pedirNumColumnes < 10) {
        numColumnes = 10;
    } else {
        numColumnes = pedirNumColumnes;
    }

    // Crear el tablero y colocar las minas
    crearTaulell();
    setMines();
}

// Función para crear el tablero HTML
function crearTaulell() {
    let tablaHTML = "<table class='table' style='border: 2px solid black; border-collapse: collapse; padding:2px; margin: 0 auto;'>";

    for (let i = 0; i < numFiles; i++) {
        tablaHTML += "<tr>";
        for (let x = 0; x < numColumnes; x++) {
            tablaHTML += `<td id="${i},${x}" data-mina="false" data-num-mines="0" style='border: 2px solid black; border-collapse: collapse; padding:2px;'><img onclick="obreCasella(${x},${i})" src='${fons}'></td>`;
        }
        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";
    document.getElementById("taulell").innerHTML = tablaHTML;
}


// Función para manejar el evento de abrir una casilla
function obreCasella(i, x) {
    if (juegoTerminado) {
        return; // Evitar acciones adicionales si el juego ya ha terminado
    }

    let td = document.getElementById(`${x},${i}`);
    if (esMina(x, i)) {
        // Muestra todas las minas
        mostrarMinas();
        alert("¡Boom! Has encontrado una mina. Juego terminado.");

        // Desactivar el juego
        juegoTerminado = true;

        // Deshabilitar el evento de clic en todas las celdas
        deshabilitarClicEnCeldas();
        document.getElementById("iniciarBtn").disabled = false;
    } else {
        let numMinasAlrededor = contarMinasAlrededor(x, i);
        td.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%;">${numMinasAlrededor}</div>`;
    }
}

// Función que muestra todas las minas al finalizar el juego
function mostrarMinas() {
    let celdas = document.querySelectorAll('td');
    celdas.forEach((celda) => {
        let coordenadas = celda.id.split(",");
        let x = parseInt(coordenadas[1]);
        let y = parseInt(coordenadas[0]);

        if (esMina(x, y)) {
            celda.innerHTML = `<img src='${mina}' alt='mina'>`;
        }
    });
}

// Función que deshabilita el evento de clic en todas las celdas
function deshabilitarClicEnCeldas() {
    let celdas = document.querySelectorAll('td');
    celdas.forEach((celda) => {
        celda.onclick = null; // Deshabilitar el evento de clic
    });
}

// Función para contar el número de minas alrededor de una celda
function contarMinasAlrededor(x, y) {
    let contador = 0;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i >= 0 && i < numColumnes && j >= 0 && j < numFiles && !(i === x && j === y)) {
                if (esMina(i, j)) {
                    contador++;
                }
            }
        }
    }
    return contador;
}

// Función para colocar las minas en posiciones aleatorias
function setMines() {
    let cassillasTotales = numFiles * numColumnes;
    let numMinas = Math.floor(0.17 * cassillasTotales);

    for (let index = 0; index < numMinas; index++) {
        let fila, columna, td;
        do {
            fila = Math.floor(Math.random() * numFiles);
            columna = Math.floor(Math.random() * numColumnes);
            td = document.getElementById(`${fila},${columna}`);
        } while (td.dataset.mina === "true");

        td.dataset.mina = "true";
        incrementaNumMinasAdyacentes(fila, columna);
    }
}

// Función para incrementar el contador de minas adyacentes en las celdas vecinas
function incrementaNumMinasAdyacentes(fila, columna) {
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i < numFiles && j >= 0 && j < numColumnes && !(i === fila && j === columna)) {
                let td = document.getElementById(`${i},${j}`);
                td.dataset.numMines = parseInt(td.dataset.numMines) + 1;
            }
        }
    }
}

// Función para verificar si una celda contiene una mina
function esMina(x, y) {
    let td = document.getElementById(`${y},${x}`);
    return td.dataset.mina === "true";
}

function calculaAdjacents() {
}
