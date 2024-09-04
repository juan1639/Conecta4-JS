import { Settings } from '../settings.js';
import { Tablero } from './tablero.js';

export class Ficha
{
    constructor(canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, TEXTOS)
    {
        this.canvas = canvas;
        this.ctx = ctx;

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
        
        this.velY = 2;
        
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
        else if (this.estado === this.estadosFicha[2])
        {
            console.log('tirada (agregada al array)');
        }
    }

    dibujaPre()
    {
        this.actualizaPre();
    }

    actualizaPre()
    {
        this.opacity += this.incOpacity;

        if ((this.opacity >= 1 && this.incOpacity > 0) || (this.opacity <= 0.05 && this.incOpacity < 0))
        {
            this.incOpacity = -this.incOpacity;
        }

        this.zonaInfo.style.opacity = this.opacity.toString();
    }

    dibujaCayendo()
    {
        this.actualizaCayendo();

        this.ctx.beginPath();
        this.ctx.fillStyle = this.colores.ROJO_FICHA_1;

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
        const limiteBajo = (this.filas - 1) * this.fichaAlto;

        if (this.y >= limiteBajo)
        {
            this.estado = this.estadosFicha[2];
            Settings.instanciaNuevaFicha = true;
            
            Tablero.arrayTablero[5][this.columnaSeleccionada] = 1;
            console.log(Tablero.arrayTablero);
            return;
        }

        this.x = this.columnaSeleccionada * this.fichaAncho;
        this.y += this.velY;
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
