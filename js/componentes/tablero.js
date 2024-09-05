import { Settings } from "../settings.js";

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

    static dibujaFichasTiradas()
    {
        const {ctx, FICHA, FILAS, COLUMNAS, COLORES} = Settings;

        for (let fila = 0; fila < FILAS; fila ++)
        {
            for (let columna = 0; columna < COLUMNAS; columna ++)
            {
                if (Tablero.arrayTablero[fila][columna] !== 0)
                {
                    const valor = Tablero.arrayTablero[fila][columna];

                    ctx.beginPath();
                    ctx.fillStyle = valor === 1 ? COLORES.ROJO_FICHA_1 : COLORES.VERDE_FICHA_1;
            
                    const centroX = Math.floor(FICHA.ANCHO / 2);
                    const centroY = Math.floor(FICHA.ALTO / 2);
            
                    ctx.arc(
                        columna * FICHA.ANCHO + centroX,
                        fila * FICHA.ALTO + centroY,
                        Math.floor(centroY / FICHA.PADDING),
                        0, 2 * Math.PI
                    );
            
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    static resetearArrayTablero()
    {
        const {FILAS, COLUMNAS} = Settings;

        for (let fila = 0; fila < FILAS; fila ++)
        {
            for (let columna = 0; columna < COLUMNAS; columna ++)
            {
                Tablero.arrayTablero[fila][columna] = 0;
            }
        }
    }
}
