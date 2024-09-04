import { Settings } from "./settings.js";
import { click } from "./eventosListener.js";
import { Tablero } from "./componentes/tablero.js";
import { Ficha } from "./componentes/ficha.js";
import { creaElementoDOM } from "./funciones/funciones.js";

let tablero;
let ficha;
let columnasTirarFicha;

// ======================================================================
//  FUNCION INICIALIZADORA
//  ---------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function()
{
    const {
        canvas,
        ctx,
        body,
        zonaInfo,
        zonaTirarFicha,
        FICHA,
        FILAS,
        COLUMNAS,
        DIM_PANTALLA,
        COLORES
    } = Settings;

    // body.style.backgroundImage = "url('img/fondo-mosaico1.jpg')";

    canvas.width = DIM_PANTALLA.ANCHO;
    canvas.height = DIM_PANTALLA.ALTO;

    zonaInfo.style.width = canvas.width.toString() + 'px';
    zonaInfo.style.height = FICHA.ALTO.toString() + 'px';
    zonaInfo.innerText = 'Haz click debajo para tirar...';

    zonaTirarFicha.style.width = canvas.width.toString() + 'px';
    zonaTirarFicha.style.height = FICHA.ALTO.toString() + 'px';

    for (let i = 0; i < COLUMNAS; i ++)
    {
        const id = 'col' + i.toString();
        creaElementoDOM(columnasTirarFicha, zonaTirarFicha, 'button', id, FICHA.ANCHO, FICHA.ALTO);
    }

    tablero = new Tablero(ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES);
    ficha = new Ficha(canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, 200, 200);

    buclePrincipal();
});

// ======================================================================
//  BUCLE PRINCIPAL (Main loop)
//  ---------------------------------------------------------------------
function buclePrincipal()
{
    requestAnimationFrame(buclePrincipal);
    //console.log('bucle...');

    tablero.dibuja();
    ficha.dibuja();
}
