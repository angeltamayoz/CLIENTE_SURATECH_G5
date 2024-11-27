export async function buscarMedico() {
    const URL = "http://localhost:8080/api/medico";

    let peticion = {
        method: "GET",
    };

    let respuestaServidor = await fetch(URL, peticion);
    let medico = await respuestaServidor.json();
    return medico;
}

export async function registrarMedico(datosMedico){
    const URL = "http://localhost:8080/api/medico";
    let peticion = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosMedico)
    };

    let respuestaInicial = await fetch(URL, peticion);
    let respuestaFinal = await respuestaInicial.json();
    return respuestaFinal;
}