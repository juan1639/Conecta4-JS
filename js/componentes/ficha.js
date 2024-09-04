
export class Ficha
{
    constructor(canvas, ctx, FICHA, FILAS, COLUMNAS, zonaInfo, COLORES, x, y)
    {
        this.canvas = canvas;
        this.ctx = ctx;

        this.fichaAncho = FICHA.ANCHO;
        this.fichaAlto = FICHA.ALTO;
        this.paddingFicha = FICHA.PADDING;

        this.filas = FILAS;
        this.columnas = COLUMNAS;

        this.zonaInfo = zonaInfo;
        this.colores = COLORES;

        this.x = x;
        this.y = y;

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
            console.log('cayendo');
            this.dibujaCayendo();
        }
        else if (this.estado === this.estadosFicha[2])
        {
            console.log('tirada');
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
        /* this.ctx.beginPath();
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
        this.ctx.closePath(); */
    }

    actualizaCayendo()
    {

    }
}
