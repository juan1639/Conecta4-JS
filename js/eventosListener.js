import { ficha } from './main.js';

export const click = document.addEventListener('click', (e) => {

    console.log(e.target.id, e.target.parentElement.id);
    //console.log(e);

    if (e.target.parentElement.id === 'zona-tirar-ficha' && ficha.turno)
    {
        console.log(e.target.id);

        const arraySplit = e.target.id.split('-');
        const columnaSel = parseInt(arraySplit[1]);

        ficha.setEstado(ficha.estadosFicha[1]);
        ficha.setColumnaSeleccionada(columnaSel);
    }
});
