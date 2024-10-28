//OBJETIVO: Capturar los datos de un formulario.

//1. Por cada input, select, textarea del formulario se crea una variable.
//2. Por cada variable debo utilizar el DOM para asociar el HTML con JS.
let nombrePaciente = document.getElementById("nombrepaciente")
let nacimientoPaciente = document.getElementById("nacimientopaciente")
let ciudadPaciente = document.getElementById("ciudadpaciente")
let correoPaciente = document.getElementById("correopaciente")
let telefonoPaciente = document.getElementById("telefonopaciente")
let ipsPaciente = document.getElementById("ipspaciente")
let afiliacionPaciente = document.getElementById("afiliacionpaciente")
let polizaPaciente = document.getElementById("polizapaciente")
let grupoIngresoPaciente = document.getElementById("grupoingresopaciente")

//3. Crear una variabke para asocuarla al id del botón que tengo en html
let botonRegistroPaciente = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventos en el botón
botonRegistroPaciente.addEventListener("click", function(evento){
    evento.preventDefault();
      //5. Crear un objeto para almacenar los datos del formulario
      let datosFormularioPaciente = {
        nombre: nombrePaciente.value,
        anioNacimiento: nacimientoPaciente.value,
        ciudad: ciudadPaciente.value,
        correo: correoPaciente.value,
        telefono: telefonoPaciente.value,
        ips: ipsPaciente.value,
        fechaAfiliacion: afiliacionPaciente.value,
        tienePoliza: polizaPaciente.value,
        grupoIngresos: grupoIngresoPaciente.value
        }
    
        //6. Se envían los datos al BACK
        console.log(datosFormularioPaciente);

        Swal.fire({
            title: "Registro Existoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
})