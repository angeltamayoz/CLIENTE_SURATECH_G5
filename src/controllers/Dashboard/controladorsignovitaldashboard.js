import { buscarSignoVital } from "../../services/servicioSignoVital.js";

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

buscarSignoVital()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let fila = document.getElementById("fila");

    respuestaBack.forEach(function (signoVital) {
      console.log(signoVital);

      let columna = document.createElement("div");
      columna.classList.add("col");

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "p-5", "shadow", "mb-4", "w-100");

      let nombre = document.createElement("h2");
      nombre.textContent = signoVital.nombre;

      let id = document.createElement("h4");
      id.textContent = signoVital.id;

      let valor = document.createElement("p");
      valor.textContent = signoVital.valor;

      let fechaMedida = document.createElement("p");
      fechaMedida.textContent = signoVital.fechaMedida;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(id);
      tarjeta.appendChild(valor);
      tarjeta.appendChild(fechaMedida);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);

      tarjeta.addEventListener("click", function () {
        modal.innerHTML = `
          <div class="modal-header">
            <h5 class="modal-title">${signoVital.nombre}</h5>
          </div>
          <div class="modal-body">
            <p><strong>ID:</strong> ${signoVital.id}</p>
            <p><strong>Valor:</strong> ${signoVital.valor}</p>
            <p><strong>Fecha de Medida:</strong> ${signoVital.fechaMedida}</p>
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

buscarSignoVital()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let tabla = document.getElementById("tabla");

    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");

    let encabezados = ["Nombre", "ID", "Valor", "Fecha de Medida", "Acciones"];

    encabezados.forEach(function (encabezado) {
      let celdaCabecera = document.createElement("th");
      celdaCabecera.classList.add("text-center");
      celdaCabecera.textContent = encabezado;
      filaCabecera.appendChild(celdaCabecera);
    });

    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    let cuerpo = document.createElement("tbody");

    respuestaBack.forEach(function (signoVital) {
      let fila = document.createElement("tr");

      let celdas = [
        signoVital.nombre,
        signoVital.id,
        signoVital.valor,
        signoVital.fechaMedida,
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
        console.log("Edit button clicked for signoVital ID:", signoVital.id);
      });

      let deleteButton = document.createElement("i");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm", "bi", "bi-x-lg");
      deleteButton.addEventListener("click", function () {
        console.log("Delete button clicked for signoVital ID:", signoVital.id);
      });

      acciones.appendChild(editButton);
      acciones.appendChild(deleteButton);
      fila.appendChild(acciones);

      cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);

    tabla.classList.add("table", "table-striped", "table-bordered", "table-hover", "table-responsive");
  });