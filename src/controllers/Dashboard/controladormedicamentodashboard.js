import {buscarMedicamento} from "../../services/servicioMedicamento.js"

buscarMedicamento()
.then(function (respuestaBack){
  console.log(respuestaBack);
let fila = document.getElementById("fila");

respuestaBack.forEach(function (medicamento) {
    console.log(medicamento);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = medicamento.nombre;

    let id = document.createElement("h4");
    id.textContent = medicamento.id;

    let presentacion = document.createElement("p");
    presentacion.textContent = medicamento.presentacion;

    let dosis = document.createElement("p");
    dosis.textContent = medicamento.dosis;

    let laboratorio = document.createElement("p");
    laboratorio.textContent = medicamento.laboratorio;

    let fechaCaducidad = document.createElement("p");
    fechaCaducidad.textContent = medicamento.fechaCaducidad;

    let contraIndicaciones = document.createElement("p");
    contraIndicaciones.textContent = medicamento.contraIndicaciones;

    let registro = document.createElement("p");
    registro.textContent = medicamento.registro;

    let tieneCopago = document.createElement("p");
    tieneCopago.textContent = medicamento.tieneCopago;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraIndicaciones);
    tarjeta.appendChild(registro);
    tarjeta.appendChild(tieneCopago);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
});