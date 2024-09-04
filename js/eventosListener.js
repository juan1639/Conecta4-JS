
export const click = document.addEventListener('click', (e) => {

    console.log(e.target.id, e.target.parentElement.id);
    //console.log(e);

    if (e.target.parentElement.id === 'zona-tirar-ficha')
    {
        console.log(e.target.id);
    }
});
