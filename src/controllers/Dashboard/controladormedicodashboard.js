//OBJETIVO: Recibir daros del back y hacerles render (render = intarlos)
//1. Simular los datos
let medicos = [
    {
        id: 990,
        nombre: "Dr. Juan Pérez",
        matriculaProfesional: "MP123456",
        especialidad: "Cardiología",
        salario: 5000,
        ips: "IPS Salud Total",
        correo: "juan.perez@example.com",
        telefono: "3001234567",
        seguro: "Colpatria",
        direccion: "Carrera 12 #45-67, Bogotá",
        disponibleFinDeSemana: true
    },
    {
        id: 991,
        nombre: "Dra. María González",
        matriculaProfesional: "MP654321",
        especialidad: "Pediatría",
        salario: 4800,
        ips: "IPS Compensar",
        correo: "maria.gonzalez@example.com",
        telefono: "3107654321",
        seguro: "Sura",
        direccion: "Calle 23 #89-12, Medellín",
        disponibleFinDeSemana: false
    },
    {
        id: 992,
        nombre: "Dr. Carlos Ramírez",
        matriculaProfesional: "MP789012",
        especialidad: "Dermatología",
        salario: 4700,
        ips: "IPS Coomeva",
        correo: "carlos.ramirez@example.com",
        telefono: "3123456789",
        seguro: "Seguros Bolívar",
        direccion: "Avenida 15 #45-32, Cali",
        disponibleFinDeSemana: true
    }
];
  
  //2. Crear una referencia a una etiqueta html donde vamos a renderizar
  let fila = document.getElementById("fila");
  
  //3. Se recorren los datos para obtenerlos de forma separada
  medicos.forEach(function(medico){
    console.log(medico);
    //4. Se crean columnas
    let columna = document.createElement("div");
    columna.classList.add("col")
  
    //5. Se crea tarjetas
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");
  
    //6. Se crea una etiqueta para poner el nombre del medico
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
  
    //PASO FINAL. Ordenar cartas
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