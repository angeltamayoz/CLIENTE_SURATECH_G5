let nombreMedico = document.getElementById("nombremedico")
let matriculaMedico = document.getElementById("matriculamedico")
let especialidadMedico = document.getElementById("especialidadmedico")
let salarioMedico = document.getElementById("salariomedico")
let telefonomMedico = document.getElementById("telefonomedico")
let ipsMedico = document.getElementById("ipsmedico")
let correoMedico = document.getElementById("correomedico")
let seguroMedico = document.getElementById("seguromedico")
let direccionMedico = document.getElementById("direccionmedico")
let disponibilidadMedico = document.getElementById("disponibilidadmedico")

let botonRegistroMedico = document.getElementById("botonregistromedico")

botonRegistroMedico.addEventListener("click", function(evento){
    evento.preventDefault();
      let datosFormularioMedico = {
        nombre: nombreMedico.value,
        matriculaProfesional: matriculaMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        telefono: telefonomMedico.value,
        ips: ipsMedico.value,
        correo: correoMedico.value,
        seguro: seguroMedico.value,
        direccion: direccionMedico.value,
        disponibleFinDeSemana: disponibilidadMedico.value
        }

        console.log(datosFormularioMedico);

        Swal.fire({
            title: "Registro Existoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
})