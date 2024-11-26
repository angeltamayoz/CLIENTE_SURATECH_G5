import {buscarMedico} from "../../services/servicioMedico.js"
  

buscarMedico()
.then(function (respuestaBack){
  console.log(respuestaBack);
  let fila = document.getElementById("fila");
  
  respuestaBack.forEach(function(medico){
    console.log(medico);

    let columna = document.createElement("div");
    columna.classList.add("col")
  
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");
  
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
    tarjeta.appendChild(especialidad);
    tarjeta.appendChild(salario);
    tarjeta.appendChild(ips);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(seguro);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(disponibleFinDeSemana);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  })
});