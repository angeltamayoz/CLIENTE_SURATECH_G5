import {registrarEnfermedad} from "../../services/servicioEnfermedad.js";

let nombreEnfermedad = document.getElementById("nombreenfermedad")
let sintomasEnfermedad = document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad")
let gradoenfErmedad = document.getElementById("gradoenfermedad")
let probabilidadvidaEnfermedad = document.getElementById("probabilidadvidaenfermedad")

let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault();
      let datosFormularioEnfermedad = {
        nombre: nombreEnfermedad.value,
        sintomas: sintomasEnfermedad.value,
        clasificacion: clasificacionEnfermedad.value,
        grado: gradoenfErmedad.value,
        probabiliadVida: probabilidadvidaEnfermedad.value
        }

        registrarEnfermedad(datosFormularioEnfermedad)
        .then(function (respuestaBack) {
          console.log(respuestaBack);
          Swal.fire({
            title: "Registro Existoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
        });
        console.log(datosFormularioEnfermedad);
})