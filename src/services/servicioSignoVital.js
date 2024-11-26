export async function buscarSignoVital() {
    const URL = "http://localhost:8080/api/SignoVital";

    let peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let respuestaServidor = await fetch(URL, peticion);
    let signoVital = await respuestaServidor.json();
    return signoVital;
}