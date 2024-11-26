import {buscarSignoVital} from "../../services/servicioSignoVital.js"

buscarSignoVital()
.then(function (respuestaBack){
  console.log(respuestaBack);

let fila = document.getElementById("fila");

respuestaBack.forEach(function (singoVital) {
    console.log(singoVital);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = singoVital.nombre;

    let id = document.createElement("h4");
    id.textContent = singoVital.id;

    let valor = document.createElement("p");
    valor.textContent = singoVital.valor;

    let fechaMedida = document.createElement("p");
    fechaMedida.textContent = singoVital.fechaMedida;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaMedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
});