import { Settings } from '../settings.js';
import { Tablero } from './tablero.js';
import { siTurnoCPUtirar, checkPosibleGanador } from '../funciones/funciones.js';

export class Ficha
{
    constructor(canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, TEXTOS, turno)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.turno = turno;

        this.fichaAncho = FICHA.ANCHO;
        this.fichaAlto = FICHA.ALTO;
        this.paddingFicha = FICHA.PADDING;

        this.filas = FILAS;
        this.columnas = COLUMNAS;

        this.textos = TEXTOS;
        this.zonaInfo = zonaInfo;
        
        this.colores = COLORES;
        
        this.columnaSeleccionada = 999;// validas (0 al 6)
        this.x = this.columnaSeleccionada * this.fichaAncho;
        this.y = 0;
        
        this.velY = 4;
        
        this.estadosFicha = ['pre-tirada', 'cayendo', 'tirada']; 
        this.estado = this.estadosFicha[0];

        this.opacity = 0.9;
        this.incOpacity = 0.005;
    }

    dibuja()
    {
        if (this.estado === this.estadosFicha[0])
        {
            this.dibujaPre();
        }
        else if (this.estado === this.estadosFicha[1])
        {
            this.dibujaCayendo();
        }
    }

    dibujaPre()
    {
        this.actualizaPre();
    }

    actualizaPre()
    {
        this.opacity += this.incOpacity;

        if ((this.opacity >= 1 && this.incOpacity > 0) || (this.opacity <= 0.4 && this.incOpacity < 0))
        {
            this.incOpacity = -this.incOpacity;
        }

        this.zonaInfo.style.opacity = this.opacity.toString();

        this.zonaInfo.style.color = this.turno ? Settings.COLORES.TEXTO_TURNO_JUGADOR : Settings.COLORES.TEXTO_TURNO_CPU;
    }

    dibujaCayendo()
    {
        this.actualizaCayendo();

        this.ctx.beginPath();
        this.ctx.fillStyle = this.turno ? this.colores.ROJO_FICHA_1 : this.colores.VERDE_FICHA_1;

        const centroX = Math.floor(this.fichaAncho / 2);
        const centroY = Math.floor(this.fichaAlto / 2);

        this.ctx.arc(
            this.x + centroX,
            this.y + centroY,
            Math.floor(centroY / this.paddingFicha),
            0, 2 * Math.PI
        );

        this.ctx.fill();
        this.ctx.closePath();
    }

    actualizaCayendo()
    {
        this.zonaInfo.innerText = this.textos.TURNO_TRANSICION;

        //  CHECK SI COLUMNA LLENA (Return inmediato):
        const checkY = Math.floor(this.y / this.fichaAlto);

        if (Tablero.arrayTablero[checkY][this.columnaSeleccionada] !== 0)
        {
            console.log('columna llena! prueba otra...');
            this.estado = this.estadosFicha[2];

            if (!this.turno)
            {
                siTurnoCPUtirar(900);
            }
            
            return;
        }

        //  CHECK LIMITE BAJO DEL TABLERO:
        const limiteBajo = (this.filas - 1) * this.fichaAlto;

        if (this.y >= limiteBajo)
        {
            this.habilitarSiguienteFicha(this.filas - 1);
            return;
        }

        //  CHECK SI HAY FICHA DEBAJO:
        if (Tablero.arrayTablero[checkY + 1][this.columnaSeleccionada] !== 0)
        {
            this.habilitarSiguienteFicha(checkY);
            return;
        }

        //  ACTUALIZA FICHA (Sigue bajando)...
        this.x = this.columnaSeleccionada * this.fichaAncho;
        this.y += this.velY;
    }

    habilitarSiguienteFicha(fila)
    {
        this.estado = this.estadosFicha[2];
        Settings.instanciaNuevaFicha = true;
        
        // 1 = fichaRoja(Jugador) / 2 = fichaVerde(CPU)
        Tablero.arrayTablero[fila][this.columnaSeleccionada] = this.turno ? 1 : 2;

        if (checkPosibleGanador(this.turno)) console.log('gana jugador');
        console.log(Tablero.arrayTablero);
    }

    // ========================================================================
    //  G e t t e r s  &  S e t t e r s
    // ------------------------------------------------------------------------
    getColumnaSeleccionada()
    {
        return this.columnaSeleccionada;
    }

    setColumnaSeleccionada(columna)
    {
        this.columnaSeleccionada = columna;
    }

    getEstado()
    {
        return this.estado;
    }

    setEstado(nuevoEstado)
    {
        this.estado = nuevoEstado;
    }
}
