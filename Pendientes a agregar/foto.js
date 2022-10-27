document.querySelector("#btnCargar").addEventListener("click", cargarFoto)
document.querySelector("#btnMostrar").addEventListener("click", MostrarFoto)

let foto ="";

function cargarFoto(){
    foto= document.querySelector("#Cargar").files[0].name
}

function MostrarFoto(){
let ruta="../img/"+foto
document.querySelector("#msgResultado").innerHTML="<img src=${ruta}>"
}
