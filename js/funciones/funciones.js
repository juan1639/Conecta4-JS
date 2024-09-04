import { Settings } from "../settings.js";
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
