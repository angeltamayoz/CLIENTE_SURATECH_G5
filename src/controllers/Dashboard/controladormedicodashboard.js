import { buscarMedico } from "../../services/servicioMedico.js"

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

buscarMedico()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let fila = document.getElementById("fila");

    respuestaBack.forEach(function (medico) {
      console.log(medico);

      let columna = document.createElement("div");
      columna.classList.add("col")

      let tarjeta = document.createElement("div");
      tarjeta.classList.add("card", "p-5", "shadow", "mb-4", "w-100");

      let nombre = document.createElement("h2");
      nombre.textContent = medico.nombre;

      let id = document.createElement("h4");
      id.textContent = medico.id;

      let matriculaProfesional = document.createElement("p");
      matriculaProfesional.textContent = medico.matriculaProfesional;

      let especialidad = document.createElement("p");
      especialidad.textContent = medico.especialidad;

      let salario = document.createElement("p");
      salario.textContent = medico.salario;

      let ips = document.createElement("p");
      ips.textContent = medico.ips;

      let correo = document.createElement("p");
      correo.textContent = medico.correo;

      let telefono = document.createElement("p");
      telefono.textContent = medico.telefono;

      let seguro = document.createElement("p");
      seguro.textContent = medico.seguro;

      let direccion = document.createElement("p");
      direccion.textContent = medico.direccion;

      let disponibleFinDeSemana = document.createElement("p");
      disponibleFinDeSemana.textContent = medico.disponibleFinDeSemana;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(id);
      tarjeta.appendChild(matriculaProfesional);
      // tarjeta.appendChild(especialidad);
      // tarjeta.appendChild(salario);
      tarjeta.appendChild(ips);
      tarjeta.appendChild(correo);
      tarjeta.appendChild(telefono);
      // tarjeta.appendChild(seguro);
      // tarjeta.appendChild(direccion);h
      // tarjeta.appendChild(disponibleFinDeSemana);
      columna.appendChild(tarjeta);
      fila.appendChild(columna);

      tarjeta.addEventListener("click", function () {
        modal.innerHTML = `
        <div class="modal-header">
          <h5 class="modal-title">${medico.nombre}</h5>
        </div>
        <div class="modal-body">
          <p><strong>ID:</strong> ${medico.id}</p>
          <p><strong>Matrícula Profesional:</strong> ${medico.matriculaProfesional}</p>
          <p><strong>Especialidad:</strong> ${medico.especialidad}</p>
          <p><strong>Salario:</strong> ${medico.salario}</p>
          <p><strong>IPS:</strong> ${medico.ips}</p>
          <p><strong>Correo:</strong> ${medico.correo}</p>
          <p><strong>Teléfono:</strong> ${medico.telefono}</p>
          <p><strong>Seguro:</strong> ${medico.seguro}</p>
          <p><strong>Dirección:</strong> ${medico.direccion}</p>
          <p><strong>Disponible Fin de Semana:</strong> ${medico.disponibleFinDeSemana}</p>
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

buscarMedico()
  .then(function (respuestaBack) {
    console.log(respuestaBack);
    let tabla = document.getElementById("tabla");

    // Crea la cabecera de la tabla
    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");

    let encabezados = ["Nombre", "ID", "Matrícula Profesional", "Especialidad", "Salario", "IPS", "Correo", "Teléfono", "Seguro", "Dirección", "Disponible Fin de Semana", "Acciones"];

    encabezados.forEach(function (encabezado) {
      let celdaCabecera = document.createElement("th");
      celdaCabecera.classList.add("text-center");
      celdaCabecera.textContent = encabezado;
      filaCabecera.appendChild(celdaCabecera);
    });

    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);

    // Crea el cuerpo de la tabla
    let cuerpo = document.createElement("tbody");

    respuestaBack.forEach(function (medico) {
      let fila = document.createElement("tr");

      let celdas = [
        medico.nombre,
        medico.id,
        medico.matriculaProfesional,
        medico.especialidad,
        medico.salario,
        medico.ips,
        medico.correo,
        medico.telefono,
        medico.seguro,
        medico.direccion,
        medico.disponibleFinDeSemana
      ];

      celdas.forEach(function (celda) {
        let celdaFila = document.createElement("td");
        celdaFila.classList.add("text-center"); // Añade la clase de Bootstrap para centrar el texto
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

    // Añade estilos CSS personalizados para darle formato y diseño a la tabla
    tabla.classList.add("table", "table-striped", "table-bordered", "table-hover", "table-responsive");
  });