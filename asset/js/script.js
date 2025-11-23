const ele = document.getElementById('ele1');


    pintar(ele, 'green' );

ele.addEventListener('click',() => {
    pintar(ele, 'yellow');
});

function pintar (element, color) {
    element.style.backgroundColor = color;
}