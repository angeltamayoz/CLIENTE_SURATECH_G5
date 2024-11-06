let enfermedades = [
    {
        id: 1101,
        nombre: "Diabetes Mellitus",
        sintomas: "Sed excesiva, fatiga, pérdida de peso, visión borrosa",
        clasificacion: "Endocrina",
        grado: "Crónica",
        probabilidadVida: "Alta con tratamiento adecuado"
    },
    {
        id: 1102,
        nombre: "Hipertensión Arterial",
        sintomas: "Dolores de cabeza, mareos, zumbidos en los oídos",
        clasificacion: "Cardiovascular",
        grado: "Crónica",
        probabilidadVida: "Alta con manejo y control"
    },
    {
        id: 1103,
        nombre: "Asma",
        sintomas: "Dificultad para respirar, tos, sibilancias",
        clasificacion: "Respiratoria",
        grado: "Crónica",
        probabilidadVida: "Alta con tratamiento y control"
    },
    {
        id: 1104,
        nombre: "Gripe",
        sintomas: "Fiebre, dolor de cabeza, congestión nasal, fatiga",
        clasificacion: "Infecciosa",
        grado: "Aguda",
        probabilidadVida: "Muy alta, autolimitada"
    },
    {
        id: 1105,
        nombre: "Insuficiencia Renal Crónica",
        sintomas: "Retención de líquidos, náuseas, cansancio extremo",
        clasificacion: "Renal",
        grado: "Crónica",
        probabilidadVida: "Media, depende del tratamiento"
    },
    {
        id: 1106,
        nombre: "Alzheimer",
        sintomas: "Pérdida de memoria, desorientación, cambios de humor",
        clasificacion: "Neurológica",
        grado: "Progresiva",
        probabilidadVida: "Media a baja, según etapa"
    },
    {
        id: 1107,
        nombre: "Bronquitis",
        sintomas: "Tos persistente, dolor en el pecho, fatiga",
        clasificacion: "Respiratoria",
        grado: "Aguda o Crónica",
        probabilidadVida: "Alta en su forma aguda"
    },
    {
        id: 1108,
        nombre: "Artritis Reumatoide",
        sintomas: "Dolor e inflamación en las articulaciones, rigidez matutina",
        clasificacion: "Autoinmune",
        grado: "Crónica",
        probabilidadVida: "Alta, calidad de vida afectada"
    },
    {
        id: 1109,
        nombre: "Migraña",
        sintomas: "Dolor de cabeza severo, náuseas, sensibilidad a la luz",
        clasificacion: "Neurológica",
        grado: "Aguda o Crónica",
        probabilidadVida: "Alta, afecta calidad de vida"
    },
    {
        id: 1110,
        nombre: "Hepatitis C",
        sintomas: "Fatiga, pérdida de apetito, ictericia",
        clasificacion: "Infecciosa",
        grado: "Crónica",
        probabilidadVida: "Variable, depende del tratamiento"
    },
    {
        id: 1111,
        nombre: "Tuberculosis",
        sintomas: "Tos persistente, sudores nocturnos, pérdida de peso",
        clasificacion: "Infecciosa",
        grado: "Aguda o Crónica",
        probabilidadVida: "Alta si se trata a tiempo"
    }
];

let fila = document.getElementById("fila");

enfermedades.forEach(function (enfermedad) {
    console.log(enfermedad);

    let columna = document.createElement("div");
    columna.classList.add("col")

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = enfermedad.nombre;

    let id = document.createElement("h4");
    id.textContent = enfermedad.id;

    let sintomas = document.createElement("p");
    sintomas.textContent = enfermedad.sintomas;
    
    let clasificacion = document.createElement("p");
    clasificacion.textContent = enfermedad.clasificacion;

    let grado = document.createElement("p");
    grado.textContent = enfermedad.grado;

    let probabiliadVida = document.createElement("p");
    probabiliadVida.textContent = enfermedad.probabiliadVida;


    tarjeta.appendChild(nombre);
    tarjeta.appendChild(id);
    tarjeta.appendChild(sintomas);
    tarjeta.appendChild(grado);
    tarjeta.appendChild(probabiliadVida);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})