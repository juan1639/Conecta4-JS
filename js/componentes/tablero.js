
export class Tablero
{
    constructor(ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES)
    {
        this.ctx = ctx;

        this.fichaAncho = FICHA.ANCHO;
        this.fichaAlto = FICHA.ALTO;
        this.paddingFicha = 1.2;

        this.filas = FILAS;
        this.columnas = COLUMNAS;
        this.pantalla = DIM_PANTALLA;

        this.colores = COLORES;
    }

    dibuja()
    {
        let degradado = this.ctx.createLinearGradient(
            0, this.fichaAlto, this.fichaAncho * this.columnas, this.fichaAlto * this.filas
        );
        
        degradado.addColorStop(0, this.colores.AZUL_TABLERO_2);
        degradado.addColorStop(0.5, this.colores.AZUL_TABLERO_1);
        degradado.addColorStop(1, this.colores.AZUL_TABLERO_2);
        
        //this.ctx.fillStyle = this.colores.AZUL_TABLERO_1;
        this.ctx.fillStyle = degradado;

        this.ctx.fillRect(
            0,
            this.fichaAlto,
            this.fichaAncho * this.columnas,
            this.fichaAlto * (this.filas - 1)
        );

        for (let y = 0; y < this.filas; y ++)
        {
            if (y === 0) continue;

            for (let x = 0; x < this.columnas; x ++)
            {
                //  HUECOS FICHA (CIRCULOS)
                this.ctx.beginPath();
                this.ctx.fillStyle = this.colores.HUECO_VACIO_FICHA;

                const centroX = Math.floor(this.fichaAncho / 2);
                const centroY = Math.floor(this.fichaAlto / 2);

                this.ctx.arc(
                    x * this.fichaAncho + centroX,
                    y * this.fichaAlto + centroY,
                    Math.floor(centroY / this.paddingFicha),
                    0, Math.PI * 2
                );

                this.ctx.fill();
                this.ctx.closePath();
            }
        }
    }
}
