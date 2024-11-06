//OBJETIVO: Recibir datos del back y hacerles render (render = intarlos)
//1. Simular los datos
let pacientes = [
  {
    id: 890,
    nombre: "Chirstopher Andrés Gallego",
    anioNacimiento: "2006-03-08",
    ciudad: "Medellín",
    correo: "chris@gmail.com",
    telefono: "123456789",
    ips: "Coopsana Calazans",
    fechaAfiliacion: "2020-01-01",
    tienePoliza: true,
    grupoIngresos: "C"
  },
  {
    id: 891,
    nombre: "Daniela Sofía Ramírez",
    anioNacimiento: "2005-11-15",
    ciudad: "Bogotá",
    correo: "daniela@example.com",
    telefono: "987654321",
    ips: "Sura",
    fechaAfiliacion: "2021-06-10",
    tienePoliza: false,
    grupoIngresos: "B"
  },
  {
    id: 892,
    nombre: "Luis Fernando Martínez",
    anioNacimiento: "2007-07-22",
    ciudad: "Cali",
    correo: "luisfm@example.com",
    telefono: "456789123",
    ips: "Famisanar",
    fechaAfiliacion: "2019-09-25",
    tienePoliza: true,
    grupoIngresos: "A"
  },
  {
    id: 893,
    nombre: "Andrea Pilar López",
    anioNacimiento: "2006-01-30",
    ciudad: "Cartagena",
    correo: "andrea_pl@example.com",
    telefono: "321654987",
    ips: "Nueva EPS",
    fechaAfiliacion: "2022-03-15",
    tienePoliza: false,
    grupoIngresos: "C"
  }
];

//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila");

//3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function(paciente){
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