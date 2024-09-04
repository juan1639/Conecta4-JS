
export function creaElementoDOM(elemento, elementoPadre, etiqueta, id, ancho, alto)
{
    elemento = document.createElement(etiqueta);
    elemento.setAttribute("id", id);
    elemento.style.width = ancho + 'px';
    elemento.style.height = alto + 'px';
    elementoPadre.appendChild(elemento);
}
