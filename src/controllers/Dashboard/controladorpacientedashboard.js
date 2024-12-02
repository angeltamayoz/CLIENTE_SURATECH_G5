import { buscarPacientes } from "../../services/servicioPaciente.js"

let btnTabla = document.querySelector(".btnTable");
let filaTarjetas = document.getElementById("fila");
let tabla = document.getElementById("tabla");
let icTabla = document.querySelector(".icTabla");
let icTarjetas = document.querySelector(".icTarjetas");
let modal = document.querySelector(".modal-body");

btnTabla.addEventListener("click", function () {
  console.log(tabla.style.display)
  if (tabla.style.display == "none" || tabla.style.display == "") {
    // Muestra la tabla y oculta las tarjetas
    tabla.style.display = "block";
    filaTarjetas.style.display = "none";
    icTabla.style.display = "none";
    icTarjetas.style.display = "block";
  } else {
    // Oculta la tabla y muestra las tarjetas
    tabla.style.display = "none";
    filaTarjetas.style.display = "flex";
    icTabla.style.display = "block";
    icTarjetas.style.display = "none";
  }
});

//OBJETIVO: Recibir datos del back y hacerles render (render = pintarlos)
//1. Llamar al API
buscarPacientes()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    //2. Crear una referencia a una etiqueta html donde vamos a renderizar
    let fila = document.getElementById("fila");

    //3. Se recorren los datos para obtenerlos de forma separada
    respuestaBack.forEach(function (paciente) {
      console.log(paciente);
      //4. Se crean columnas
      let columna = document.createElement("div");
      columna.classList.add("col")

      //5. Se crea tarjetas
      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "p-5", "shadow", "mb-4", "w-100");

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
      // tarjeta.appendChild(ciudad);
      tarjeta.appendChild(correo);
      tarjeta.appendChild(telefono);
      tarjeta.appendChild(ips);
      // tarjeta.appendChild(fechaAfiliacion);
      // tarjeta.appendChild(tienePoliza);
      // tarjeta.appendChild(grupoIngresos);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);


      tarjeta.addEventListener("click", function () {
        modal.innerHTML = `
      <div class="modal-header">
        <h5 class="modal-title">${paciente.nombre}</h5>
      </div>
      <div class="modal-body">
        <p><strong>ID:</strong> ${paciente.id}</p>
        <p><strong>Año de nacimiento:</strong> ${paciente.anioNacimiento}</p>
        <p><strong>Ciudad:</strong> ${paciente.ciudad}</p>
        <p><strong>Correo:</strong> ${paciente.correo}</p>
        <p><strong>Teléfono:</strong> ${paciente.telefono}</p>
        <p><strong>IPS:</strong> ${paciente.ips}</p>
        <p><strong>Fecha de afiliación:</strong> ${paciente.fechaAfiliacion}</p>
        <p><strong>¿Tiene póliza?:</strong> ${paciente.tienePoliza}</p>
        <p><strong>Disponible Grupo de ingresos:</strong> ${paciente.grupoIngresos}</p>
      </div>
    `;

        let mostrarModal = document.querySelector("#staticBackdrop");
        let cerrarModal = document.querySelectorAll(".cerrar");
        cerrarModal.forEach(btn => {
          btn.addEventListener("click", () => {
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
          });
        });
        mostrarModal.classList.add("show");
        mostrarModal.style.display = "block";
      });
    })
  });

buscarPacientes()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let tabla = document.getElementById("tabla");

    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");

    let encabezados = ["Nombre", "ID", "Año de Nacimiento", "Ciudad", "Correo", "Teléfono", "IPS", "Fecha de afiliación", "¿Tiene póliza?", "Grupo de ingresos", "Acciones"];

    encabezados.forEach(function (encabezado) {
      let celdaCabecera = document.createElement("th");
      celdaCabecera.classList.add("text-center");
      celdaCabecera.textContent = encabezado;
      filaCabecera.appendChild(celdaCabecera);
    });

    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    let cuerpo = document.createElement("tbody");

    respuestaBack.forEach(function (paciente) {
      let fila = document.createElement("tr");

      let celdas = [
        paciente.nombre,
        paciente.id,
        paciente.anioNacimiento,
        paciente.ciudad,
        paciente.correo,
        paciente.telefono,
        paciente.ips,
        paciente.fechaAfiliacion,
        paciente.tienePoliza,
        paciente.grupoIngresos,
      ];

      celdas.forEach(function (celda) {
        let celdaFila = document.createElement("td");
        celdaFila.classList.add("text-center");
        celdaFila.textContent = celda;
        fila.appendChild(celdaFila);
      });

      let acciones = document.createElement("td");
      acciones.classList.add("text-center");

      let editButton = document.createElement("i");
      editButton.classList.add("btn", "btn-primary", "btn-sm", "bi", "bi-pencil-square");
      editButton.addEventListener("click", function () {
        console.log("Edit button clicked for paciente ID:", paciente.id);
      });

      let deleteButton = document.createElement("i");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm", "bi", "bi-x-lg");
      deleteButton.addEventListener("click", function () {
        console.log("Delete button clicked for paciente ID:", paciente.id);
      });

      acciones.appendChild(editButton);
      acciones.appendChild(deleteButton);
      fila.appendChild(acciones);

      cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);

    tabla.classList.add("table", "table-striped", "table-bordered", "table-hover", "table-responsive");
  });