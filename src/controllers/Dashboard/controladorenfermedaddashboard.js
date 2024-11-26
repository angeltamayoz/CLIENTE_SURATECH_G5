import {buscarEnfermedad} from "../../services/servicioEnfermedad.js";

buscarEnfermedad()
.then(function (respuestaBack){
  console.log(respuestaBack);

let fila = document.getElementById("fila");

respuestaBack.forEach(function (enfermedad) {
    console.log(enfermedad);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = enfermedad.nombre;

    let id = document.createElement("h4");
    id.textContent = enfermedad.id;

    let sintomas = document.createElement("p");
    sintomas.textContent = enfermedad.sintomas;
    
    let clasificacion = document.createElement("p");
    clasificacion.textContent = enfermedad.clasificacion;

    let grado = document.createElement("p");
    grado.textContent = enfermedad.grado;

    let probabiliadVida = document.createElement("p");
    probabiliadVida.textContent = enfermedad.probabiliadVida;


    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(sintomas);
    tarjeta.appendChild(grado);
    tarjeta.appendChild(probabiliadVida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
});