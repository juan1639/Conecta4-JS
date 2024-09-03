export class Settings
{
    static canvas = document.getElementById('canvas');
    static ctx = Settings.canvas.getContext('2d');

    static FICHA =
    {
        ANCHO: 80,
        ALTO: 80,
    };

    static FILAS = 7;
    static COLUMNAS = 7;

    static ESCALA =
    {
        X: 2,
        Y: 2,
    };

    static DIM_PANTALLA =
    {
        ANCHO: Settings.FICHA.ANCHO * Settings.COLUMNAS,
        ALTO: Settings.FICHA.ALTO * Settings.FILAS,
    };

    static COLORES =
    {
        AZUL_TABLERO_1: '#0162c8',
        AZUL_TABLERO_2: '#55e7fc',
        HUECO_VACIO_FICHA: '#393939',
    };
}
