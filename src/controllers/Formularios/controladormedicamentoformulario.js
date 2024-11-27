import {registrarMedicamento} from "../../services/servicioMedicamento.js";

let nombreMedicamento = document.getElementById("nombremedicamento")
let presentacionMedicamento = document.getElementById("presentacionmedicamento")
let dosisMedicamento = document.getElementById("dosismedicamento")
let laboratorioMedicamento = document.getElementById("laboratoriomedicamento")
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
        laboratiorio: laboratorioMedicamento.value,
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
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
        });
        console.log(datosFormularioMedicamento);
})