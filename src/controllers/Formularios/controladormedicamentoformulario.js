import {registrarMedicamento} from "../../services/servicioMedicamento.js";

let nombreMedicamento = document.getElementById("nombremedicamento")
let presentacionMedicamento = document.getElementById("presentacionmedicamento")
let dosisMedicamento = document.getElementById("dosismedicamento")
let laboratiorioMedicamento = document.getElementById("laboratoriomedicamento")
let caducidadMedicamento = document.getElementById("caducidadmedicamento")
let contraindicacionesMedicamento = document.getElementById("contraindicacionesmedicamento")
let registroMedicamento = document.getElementById("registromedicamento")
let copagoMedicamento = document.getElementById("copagomedicamento")

let botonRegistroMedicamento = document.getElementById("botonregistromedicamento")

botonRegistroMedicamento.addEventListener("click", function(evento){
    evento.preventDefault();
      let datosFormularioMedicamento = {
        nombre: nombreMedicamento.value,
        presentacion: presentacionMedicamento.value,
        dosis: dosisMedicamento.value,
        laboratiorio: laboratiorioMedicamento.value,
        fechaCaducidad: caducidadMedicamento.value,
        contraIndicaciones: contraindicacionesMedicamento.value,
        registro: registroMedicamento.value,
        tieneCopago: true
        }

        registrarMedicamento(datosFormularioMedicamento)
        .then(function (respuestaBack) {
          console.log(respuestaBack);
          Swal.fire({
            title: "Registro Existoso!",
            icon: "success"
          }).then(() => {
            window.location.href = "../view/dashboards/dashboardMedicamento.html";
          });
          nombreMedicamento.value = "",
          presentacionMedicamento.value = "",
          dosisMedicamento.value = "",
          laboratiorioMedicamento.value = "",
          caducidadMedicamento.value = "",
          contraindicacionesMedicamento.value = "",
          registroMedicamento.value = ""
        });
        console.log(datosFormularioMedicamento);
})