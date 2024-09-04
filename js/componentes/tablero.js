
export class Tablero
{
    static arrayTablero =
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];
    
    constructor(ctx, FICHA, FILAS, COLUMNAS, DIM_PANTALLA, COLORES, imagenes)
    {
        this.ctx = ctx;

        this.fichaAncho = FICHA.ANCHO;
        this.fichaAlto = FICHA.ALTO;
        this.paddingFicha = FICHA.PADDING;

        this.filas = FILAS;
        this.columnas = COLUMNAS;
        this.pantalla = DIM_PANTALLA;

        this.colores = COLORES;

        this.imgCargada = false;
        this.img = new Image();
        this.img.src = imagenes.tileTablero;

        this.img.onload = () =>
        {
            this.imgCargada = true;
            console.log('img-tablero cargada');
        }
    }

    dibuja()
    {
        for (let y = 0; y < this.filas; y ++)
        {
            for (let x = 0; x < this.columnas; x ++)
            {
                if (this.imgCargada)
                {
                    this.ctx.drawImage(
                        this.img,
                        x * this.fichaAncho,
                        y * this.fichaAlto,
                        this.fichaAncho,
                        this.fichaAlto
                    );
                }
            }
        }
    }
}
