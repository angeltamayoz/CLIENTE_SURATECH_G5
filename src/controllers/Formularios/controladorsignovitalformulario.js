import {registrarSignosVitales} from "../../services/servicioSignoVital.js";

let fechaSignoVital = document.getElementById("fechasignovital")
let nombreSignoVital = document.getElementById("nombresignovital")
let valorSignoVital = document.getElementById("valorsignovital")

let botonRegistroSignoVital = document.getElementById("botonregistrosignovital")

botonRegistroSignoVital.addEventListener("click", function(evento){
    evento.preventDefault();
      let datosFormularioSignoVital = {
        fechaMedida: fechaSignoVital.value,
        nombre: nombreSignoVital.value,
        valor: valorSignoVital.value
        }

        registrarSignosVitales(datosFormularioSignoVital)
        .then(function (respuestaBack) {
          console.log(respuestaBack);
          Swal.fire({
            title: "Registro Existoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
        });
        console.log(datosFormularioSignoVital);
})