import { Settings } from "./settings.js";
import { click } from "./eventosListener.js";
import { Tablero } from "./componentes/tablero.js";
import { Ficha } from "./componentes/ficha.js";
import { creaElementoDOM, setTextoSegunTurno, siTurnoCPUtirar } from "./funciones/funciones.js";

let tablero;
let ficha;
let columnasTirarFicha;

let turno = false;// true = turno jugador, false = turno CPU

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
        botonNewGame,
        FICHA,
        FILAS,
        COLUMNAS,
        DIM_PANTALLA,
        COLORES,
        TEXTOS,
        imagenes
    } = Settings;

    // body.style.backgroundImage = "url('img/fondo-mosaico1.jpg')";

    canvas.width = DIM_PANTALLA.ANCHO;
    canvas.height = DIM_PANTALLA.ALTO;

    zonaInfo.style.width = canvas.width.toString() + 'px';
    zonaInfo.style.height = FICHA.ALTO.toString() + 'px';

    zonaTirarFicha.style.width = canvas.width.toString() + 'px';
    zonaTirarFicha.style.height = FICHA.ALTO.toString() + 'px';

    for (let i = 0; i < COLUMNAS; i ++)
    {
        const id = 'col-' + i.toString();
        creaElementoDOM(columnasTirarFicha, zonaTirarFicha, 'button', id, FICHA.ANCHO, FICHA.ALTO);
    }

    tablero = new Tablero(ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES, imagenes);

    botonNewGame.style.opacity = '1';
    Settings.instanciaNuevaFicha = true;
    Settings.menuPreJuego = true;
    Settings.gameOver = false;

    buclePrincipal();
});

// ======================================================================
//  BUCLE PRINCIPAL (Main loop)
//  
//  ---------------------------------------------------------------------
function buclePrincipal()
{
    requestAnimationFrame(buclePrincipal);
    //console.log('bucle...');

    Settings.ctx.clearRect(0, 0, Settings.DIM_PANTALLA.ANCHO, Settings.DIM_PANTALLA.ALTO);

    checkInstanciarNuevaFicha_gameover();

    if (ficha)
    {
        ficha.dibuja();
    }

    Tablero.dibujaFichasTiradas();
    tablero.dibuja();
}

function checkInstanciarNuevaFicha_gameover()
{
    const {canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, TEXTOS} = Settings;

    if (Settings.instanciaNuevaFicha && !Settings.gameOver && !Settings.menuPreJuego)
    {
        Settings.instanciaNuevaFicha = false;

        turno = turno ? false : true;
        zonaInfo.innerText = setTextoSegunTurno(turno);
        console.log(turno);

        if (!turno)
        {
            siTurnoCPUtirar(2900);// 2800ms CPU simula pensar
        }

        ficha = new Ficha(canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, TEXTOS, turno);
    }
    else if (Settings.instanciaNuevaFicha && Settings.gameOver && !Settings.menuPreJuego)
    {
        Settings.instanciaNuevaFicha = false;
        zonaInfo.innerText = turno ? Settings.TEXTOS.GANA_JUGADOR : Settings.TEXTOS.GANA_CPU;
    }
}

export { ficha, turno };
