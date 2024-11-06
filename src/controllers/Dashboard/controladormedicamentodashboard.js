let medicamentos = [
    {
        id: 1001,
        nombre: "Paracetamol",
        presentacion: "Tabletas 500 mg",
        dosis: "500 mg cada 8 horas",
        laboratorio: "Laboratorios Roche",
        fechaCaducidad: "2025-10-12",
        contraIndicaciones: "No administrar en casos de insuficiencia hepática grave.",
        registro: "REG-123456",
        tieneCopago: true
    },
    {
        id: 1002,
        nombre: "Ibuprofeno",
        presentacion: "Tabletas 200 mg",
        dosis: "200 mg cada 6-8 horas",
        laboratorio: "Pfizer",
        fechaCaducidad: "2025-08-23",
        contraIndicaciones: "Evitar en pacientes con úlceras gástricas.",
        registro: "REG-789101",
        tieneCopago: false
    },
    {
        id: 1003,
        nombre: "Amoxicilina",
        presentacion: "Cápsulas 500 mg",
        dosis: "500 mg cada 8 horas por 7 días",
        laboratorio: "Laboratorios Abbott",
        fechaCaducidad: "2026-03-05",
        contraIndicaciones: "No utilizar en pacientes alérgicos a penicilina.",
        registro: "REG-111213",
        tieneCopago: true
    },
    {
        id: 1004,
        nombre: "Loratadina",
        presentacion: "Jarabe 5 mg/5 ml",
        dosis: "10 mg una vez al día",
        laboratorio: "Bayer",
        fechaCaducidad: "2025-12-15",
        contraIndicaciones: "Evitar en personas con problemas hepáticos graves.",
        registro: "REG-141516",
        tieneCopago: false
    },
    {
        id: 1005,
        nombre: "Metformina",
        presentacion: "Tabletas 850 mg",
        dosis: "850 mg dos veces al día",
        laboratorio: "Merck",
        fechaCaducidad: "2026-01-20",
        contraIndicaciones: "No administrar en pacientes con insuficiencia renal.",
        registro: "REG-171819",
        tieneCopago: true
    },
    {
        id: 1006,
        nombre: "Omeprazol",
        presentacion: "Cápsulas 20 mg",
        dosis: "20 mg una vez al día",
        laboratorio: "Laboratorios Saval",
        fechaCaducidad: "2025-11-10",
        contraIndicaciones: "Evitar en personas con hipersensibilidad al omeprazol.",
        registro: "REG-202122",
        tieneCopago: false
    }
];

let fila = document.getElementById("fila");

medicamentos.forEach(function (medicamento) {
    console.log(medicamento);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = medicamento.nombre;

    let id = document.createElement("h4");
    id.textContent = medicamento.id;

    let presentacion = document.createElement("p");
    presentacion.textContent = medicamento.presentacion;

    let dosis = document.createElement("p");
    dosis.textContent = medicamento.dosis;

    let laboratorio = document.createElement("p");
    laboratorio.textContent = medicamento.laboratorio;

    let fechaCaducidad = document.createElement("p");
    fechaCaducidad.textContent = medicamento.fechaCaducidad;

    let contraIndicaciones = document.createElement("p");
    contraIndicaciones.textContent = medicamento.contraIndicaciones;

    let registro = document.createElement("p");
    registro.textContent = medicamento.registro;

    let tieneCopago = document.createElement("p");
    tieneCopago.textContent = medicamento.tieneCopago;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(laboratorio);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraIndicaciones);
    tarjeta.appendChild(registro);
    tarjeta.appendChild(tieneCopago);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})