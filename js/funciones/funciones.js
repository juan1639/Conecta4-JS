import { Settings } from "../settings.js";
import { Tablero } from "../componentes/tablero.js";
import { ficha } from "../main.js";

export function creaElementoDOM(elemento, elementoPadre, etiqueta, id, ancho, alto)
{
    elemento = document.createElement(etiqueta);
    elemento.setAttribute("id", id);
    elemento.style.width = ancho + 'px';
    elemento.style.height = alto + 'px';
    elementoPadre.appendChild(elemento);
}

export function setTextoSegunTurno(turno)
{
    const texto = turno ? Settings.TEXTOS.TURNO_JUGADOR : Settings.TEXTOS.TURNO_CPU;
    return texto;
}

export function siTurnoCPUtirar(pensandoCPU)
{
    setTimeout(() =>
    {
        const columnaSel = Math.floor(Math.random() * Settings.COLUMNAS);

        ficha.setEstado(ficha.estadosFicha[1]);
        ficha.setColumnaSeleccionada(columnaSel);

    }, pensandoCPU);
}

export function checkPosibleGanador(boolTurno)
{
    const {FILAS, COLUMNAS} = Settings;

    for (let y = 0; y < FILAS; y ++)
    {
        for (let x = 0; x < COLUMNAS; x ++)
        {
            if (checkHorizontales(boolTurno, y, x, 0, 0)) return true;
            if (checkVerticales(boolTurno, y, x, 0, 0)) return true;
            if (checkDiagonales(boolTurno, y, x, 0, 1)) return true;
            if (checkDiagonales(boolTurno, y, x, 0, -1)) return true;
        }
    }
    return false;
}

function checkHorizontales(boolTurno, y, x, contador, diagIzqDer)
{
    const fichaCorrecta = boolTurno ? 1 : 2;
    const cuatroRayaHorizontal = 4;

    for (let offset = 0; offset < cuatroRayaHorizontal; offset ++)
    {
        if (x + offset < Settings.COLUMNAS) {

            if (Tablero.arrayTablero[y][x + offset] === fichaCorrecta) contador ++;
        }
    }

    if (contador >= cuatroRayaHorizontal) return true;// 4 en Raya!

    return false;
}

function checkVerticales(boolTurno, y, x, contador, diagIzqDer)
{
    const fichaCorrecta = boolTurno ? 1 : 2;
    const cuatroRayaVertical = 4;

    for (let offset = 0; offset < cuatroRayaVertical; offset ++)
    {
        if (y + offset < Settings.FILAS) {

            if (Tablero.arrayTablero[y + offset][x] === fichaCorrecta) contador ++;
        }
    }

    if (contador >= cuatroRayaVertical) return true;// 4 en Raya!

    return false;
}

function checkDiagonales(boolTurno, y, x, contador, diagIzqDer)
{
    const fichaCorrecta = boolTurno ? 1 : 2;
    const cuatroRayaDiagDcha = 4;

    for (let offset = 0; offset < cuatroRayaDiagDcha; offset ++)
    {
        const haciaIzqDer = offset * diagIzqDer;

        if (x + haciaIzqDer < Settings.COLUMNAS && y + offset < Settings.FILAS)
        {
            if (Tablero.arrayTablero[y + offset][x + haciaIzqDer] === fichaCorrecta) contador ++;
        }
    }

    if (contador >= cuatroRayaDiagDcha) return true;

    return false;
}

