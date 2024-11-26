export async function buscarMedico() {
    const URL = "http://localhost:8080/api/medico";

    let peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let respuestaServidor = await fetch(URL, peticion);
    let medico = await respuestaServidor.json();
    return medico;
}