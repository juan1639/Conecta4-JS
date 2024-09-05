import { ficha, turno } from './main.js';
import { Settings } from './settings.js';
import { Tablero } from './componentes/tablero.js';

export const click = document.addEventListener('click', (e) => {

    console.log(e.target.id, e.target.parentElement.id);
    //console.log(e);

    if (e.target.parentElement.id === 'zona-tirar-ficha' && turno && !Settings.menuPreJuego)
    {
        console.log(e.target.id);

        const arraySplit = e.target.id.split('-');
        const columnaSel = parseInt(arraySplit[1]);

        ficha.setEstado(ficha.estadosFicha[1]);
        ficha.setColumnaSeleccionada(columnaSel);
    }

    if (e.target.id === 'botonNewGame' && Settings.menuPreJuego)
    {
        Settings.menuPreJuego = false;
        Settings.botonNewGame.style.opacity = '0';
        Tablero.resetearArrayTablero();

        if (Settings.AUDIO.musicaFondo.paused)
        {
            Settings.AUDIO.musicaFondo.play();
            Settings.AUDIO.musicaFondo.loop = true;
        }
    }
});
