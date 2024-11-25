import {buscarPacientes} from "../../services/serviciosPaciente.js"

//OBJETIVO: Recibir datos del back y hacerles render (render = pintarlos)
//1. Llamar al API
buscarPacientes()
.then(function (respuestaBack){
  console.log(respuestaBack);
  //2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila");

//3. Se recorren los datos para obtenerlos de forma separada
respuestaBack.forEach(function(paciente){
  console.log(paciente);
  //4. Se crean columnas
  let columna = document.createElement("div");
  columna.classList.add("col")

  //5. Se crea tarjetas
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");

  //6. Se crea una etiqueta para poner el nombre del paciente
  let nombre = document.createElement("h2");
  nombre.textContent = paciente.nombre;

  let id = document.createElement("h4");
  id.textContent = paciente.id;

  let anioNacimiento = document.createElement("p");
  anioNacimiento.textContent = paciente.anioNacimiento;

  let ciudad = document.createElement("p");
  ciudad.textContent = paciente.ciudad;

  let correo = document.createElement("p");
  correo.textContent = paciente.correo;

  let telefono = document.createElement("p");
  telefono.textContent = paciente.telefono;

  let ips = document.createElement("p");
  ips.textContent = paciente.ips;

  let fechaAfiliacion = document.createElement("p");
  fechaAfiliacion.textContent = paciente.fechaAfiliacion;

  let tienePoliza = document.createElement("p");
  tienePoliza.textContent = paciente.tienePoliza;

  let grupoIngresos = document.createElement("p");
  grupoIngresos.textContent = paciente.grupoIngresos;

  //PASO FINAL. Ordenar cartas
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(id);
  tarjeta.appendChild(anioNacimiento);
  tarjeta.appendChild(ciudad);
  tarjeta.appendChild(correo);
  tarjeta.appendChild(telefono);
  tarjeta.appendChild(ips);
  tarjeta.appendChild(fechaAfiliacion);
  tarjeta.appendChild(tienePoliza);
  tarjeta.appendChild(grupoIngresos);
  columna.appendChild(tarjeta);
  fila.appendChild(columna);
})
});