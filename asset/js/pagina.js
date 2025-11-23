//div principal
const keyDiv = document.getElementById('key');

//Variable global para guardar color
let colorActual = '';

document.addEventListener('keydown', function (event) {
//cambiar colo del div existente
if(event.key === 'a'){
    colorActual = 'pink';
    keyDiv.style.backgroundColor = colorActual;

} else if (event.key === 's'){
    colorActual = 'orange';
    keyDiv.style.background = colorActual;

}else if (event.key === 'd'){
    colorActual = 'lightblue';
    keyDiv.style.backgroundColor = colorActual;
}
//Crear un nuevo div con otros colores 
if(event.key === 'q'){
    crearNuevoDiv ('purple');
}else if (event.key === 'w') {
    crearNuevoDiv('gray');
}else if (event.key === 'e') {
    crearNuevoDiv ('brown');
}
});

//funcion que crea un nuveo div
function crearNuevoDiv (color) {
    const nuevo = document.createElement ('div');
    nuevo.style.width = '200px';
    nuevo.style.height ='200px';
    nuevo.style.backgroundColor = color;
    nuevo.style.marginTop = '10px';
    document.body.appendChild(nuevo);
}
