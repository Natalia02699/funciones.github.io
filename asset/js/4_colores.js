const cuadroUno = document.getElementById('uno');
const cuadroDos = document.getElementById('dos');
const cuadroTres = document.getElementById('tres');
const cuadroCuatro = document.getElementById('cuatro');

pintar(cuadroUno, 'blue')
pintar(cuadroDos, 'red')
pintar(cuadroTres , 'green')
pintar(cuadroCuatro , 'yellow')

function pintar (element, color){
    element.style.backgroundColor =color;
    element.style.width = '200px';
    element.style.height = '200px';
}
cuadroUno.addEventListener( 'click', () => {
    pintar(cuadroUno, 'black')
});
cuadroDos.addEventListener('click',() => {
    pintar(cuadroDos, 'black')
});
cuadroTres.addEventListener ('click', ()=> {
    pintar( cuadroTres, 'black')
});
cuadroCuatro.addEventListener ('click',()=> {
    pintar(cuadroCuatro, 'black')
});
