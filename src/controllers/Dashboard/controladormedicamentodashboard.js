import { buscarMedicamento } from "../../services/servicioMedicamento.js";

let btnTabla = document.querySelector(".btnTable");
let filaTarjetas = document.getElementById("fila");
let tabla = document.getElementById("tabla");
let icTabla = document.querySelector(".icTabla");
let icTarjetas = document.querySelector(".icTarjetas");
let modal = document.querySelector(".modal-body");

btnTabla.addEventListener("click", function () {
  console.log(tabla.style.display);
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

buscarMedicamento()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let fila = document.getElementById("fila");

    respuestaBack.forEach(function (medicamento) {
      console.log(medicamento);

      let columna = document.createElement("div");
      columna.classList.add("col");

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "p-5", "shadow", "mb-4", "w-100");

      let nombre = document.createElement("h2");
      nombre.textContent = medicamento.nombre;

      let id = document.createElement("h4");
      id.textContent = medicamento.id;

      let presentacion = document.createElement("p");
      presentacion.textContent = medicamento.presentacion;

      let dosis = document.createElement("p");
      dosis.textContent = medicamento.dosis;

      let laboratiorio = document.createElement("p");
      laboratiorio.textContent = medicamento.laboratiorio;

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
      tarjeta.appendChild(laboratiorio);
      tarjeta.appendChild(fechaCaducidad);
      // tarjeta.appendChild(contraIndicaciones);
      // tarjeta.appendChild(registro);
      // tarjeta.appendChild(tieneCopago);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);

      tarjeta.addEventListener("click", function () {
        modal.innerHTML = `
          <div class="modal-header">
            <h5 class="modal-title">${medicamento.nombre}</h5>
          </div>
          <div class="modal-body">
            <p><strong>ID:</strong> ${medicamento.id}</p>
            <p><strong>Presentación:</strong> ${medicamento.presentacion}</p>
            <p><strong>Dosis:</strong> ${medicamento.dosis}</p>
            <p><strong>laboratiorio:</strong> ${medicamento.laboratiorio}</p>
            <p><strong>Fecha de caducidad:</strong> ${medicamento.fechaCaducidad}</p>
            <p><strong>Contraindicaciones:</strong> ${medicamento.contraIndicaciones}</p>
            <p><strong>Registro:</strong> ${medicamento.registro}</p>
            <p><strong>¿Tiene copago?:</strong> ${medicamento.tieneCopago}</p>
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
    });
  });

buscarMedicamento()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let tabla = document.getElementById("tabla");

    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");

    let encabezados = ["Nombre", "ID", "Dosis", "laboratiorio", "Fecha de caducidad", "Contraindicaciones", "Registro", "¿Tiene copago?", "Acciones"];

    encabezados.forEach(function (encabezado) {
      let celdaCabecera = document.createElement("th");
      celdaCabecera.classList.add("text-center");
      celdaCabecera.textContent = encabezado;
      filaCabecera.appendChild(celdaCabecera);
    });

    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    let cuerpo = document.createElement("tbody");

    respuestaBack.forEach(function (medicamento) {
      let fila = document.createElement("tr");

      let celdas = [
        medicamento.nombre,
        medicamento.id,
        medicamento.dosis,
        medicamento.laboratiorio,
        medicamento.fechaCaducidad,
        medicamento.contraIndicaciones,
        medicamento.registro,
        medicamento.tieneCopago
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
        console.log("Edit button clicked for medicamento ID:", medicamento.id);
      });

      let deleteButton = document.createElement("i");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm", "bi", "bi-x-lg");
      deleteButton.addEventListener("click", function () {
        console.log("Delete button clicked for medicamento ID:", medicamento.id);
      });

      acciones.appendChild(editButton);
      acciones.appendChild(deleteButton);
      fila.appendChild(acciones);

      cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);

    tabla.classList.add("table", "table-striped", "table-bordered", "table-hover", "table-responsive");
  });