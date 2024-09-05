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

    static instanciaNuevaFicha = true;

    static COLORES =
    {
        AZUL_TABLERO_1: '#0162c8',
        AZUL_TABLERO_2: '#55e7fc',
        HUECO_VACIO_FICHA: '#393939',
        TRANSPARENTE: 'transparent',
        ROJO_FICHA_1: '#ff2209',
        ROJO_FICHA_2: '#cc1100',
        VERDE_FICHA_1: '#39f009',
        VERDE_FICHA_2: '#10cc00',
        ZONA_TIRA_FICHA_1: '#032f57',
        ZONA_TIRA_FICHA_2: '#10cccc',
        TEXTO_TURNO_JUGADOR: '#ee7711',
        TEXTO_TURNO_CPU: '#33ee10',
    };

    static TEXTOS =
    {
        TURNO_JUGADOR: 'Click aquí debajo para tirar...',
        TURNO_CPU: 'CPU Pensando...',
        TURNO_TRANSICION: '',
        GANA_JUGADOR: 'Ganaste!',
        GANA_CPU: 'Perdiste',
        EMPATE: 'Empate!',
    };

    static imagenes =
    {
        tileTablero: "./img/tablero-4enRaya.png",
    };
}
