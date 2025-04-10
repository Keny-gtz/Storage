

let nombre = document.getElementsByTagName("nombre").item(0);

if(localStorage.getItem("nombre")!=null){
let muestraNombre = localStorage.getItem("nombre");
encabezado1.innerText = `Hola! ${muestraNombre} bienvenido/a de nuevo 
Por favor ve al inicio e ingresa tu nombre `;
}

