export class Settings
{
    static canvas = document.getElementById('canvas');
    static ctx = Settings.canvas.getContext('2d');
    
    static body = document.getElementById('body');
    static zonaInfo = document.getElementById('zona-info');
    static zonaTirarFicha = document.getElementById('zona-tirar-ficha');

    static FICHA =
    {
        ANCHO: 80,
        ALTO: 80,
        PADDING: 1.2,
    };

    static FILAS = 6;
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
        ROJO_FICHA_1: '#ff2209',
        ROJO_FICHA_2: '#cc1100',
        ZONA_TIRA_FICHA_1: '#33f023',
        ZONA_TIRA_FICHA_2: '#10cccc',
    };
}
