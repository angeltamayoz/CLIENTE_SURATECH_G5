let signosVitales = [
    {
        id: 1201,
        nombre: "Presión Arterial",
        valor: "120/80 mmHg",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1202,
        nombre: "Frecuencia Cardíaca",
        valor: "72 bpm",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1203,
        nombre: "Temperatura Corporal",
        valor: "36.8 °C",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1204,
        nombre: "Saturación de Oxígeno",
        valor: "98%",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1205,
        nombre: "Frecuencia Respiratoria",
        valor: "16 rpm",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1206,
        nombre: "Glucosa en Sangre",
        valor: "95 mg/dL",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1207,
        nombre: "Índice de Masa Corporal (IMC)",
        valor: "23.5",
        fechaMedida: "2024-10-30",
    },
    {
        id: 1208,
        nombre: "Nivel de Colesterol",
        valor: "180 mg/dL",
        fechaMedida: "2024-10-30",
    }
];

let fila = document.getElementById("fila");

signosVitales.forEach(function (singoVital) {
    console.log(singoVital);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = singoVital.nombre;

    let id = document.createElement("h4");
    id.textContent = singoVital.id;

    let valor = document.createElement("p");
    valor.textContent = singoVital.valor;

    let fechaMedida = document.createElement("p");
    fechaMedida.textContent = singoVital.fechaMedida;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(valor);
    tarjeta.appendChild(fechaMedida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})