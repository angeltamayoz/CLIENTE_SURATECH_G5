export async function buscarSignoVital() {
    const URL = "http://localhost:8080/api/SignoVital";

    let peticion = {
        method: "GET"
    };

    let respuestaServidor = await fetch(URL, peticion);
    let signoVital = await respuestaServidor.json();
    return signoVital;
}

export async function registrarSignosVitales(datosSignoVital){
    const URL = "http://localhost:8080/api/SignoVital";
    let peticion = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datosSignoVital)
    };

    let respuestaInicial = await fetch(URL, peticion);
    let respuestaFinal = await respuestaInicial.json();
    return respuestaFinal;
}