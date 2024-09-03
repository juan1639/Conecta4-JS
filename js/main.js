import { Settings } from "./settings.js";

document.addEventListener('DOMContentLoaded', function()
{
    Settings.canvas.width = Settings.DIM_PANTALLA.ANCHO;
    Settings.canvas.height = Settings.DIM_PANTALLA.ALTO;

    Settings.canvas.style.scale = (Settings.ESCALA.X, Settings.ESCALA.Y);
    
});
