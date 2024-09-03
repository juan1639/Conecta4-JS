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
        X: 1,
        Y: 1,
    };

    static DIM_PANTALLA =
    {
        ANCHO: Settings.FICHA.ANCHO * Settings.COLUMNAS,
        ALTO: Settings.FICHA.ALTO * Settings.FILAS,
    };
    
}