import { Settings } from "./settings.js";
import { Tablero } from "./componentes/tablero.js";

let tablero;

document.addEventListener('DOMContentLoaded', function()
{
    const {canvas, ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES} = Settings;

    canvas.width = DIM_PANTALLA.ANCHO;
    canvas.height = DIM_PANTALLA.ALTO;

    tablero = new Tablero(ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES);
    tablero.dibuja();
});
