export async function buscarEnfermedad() {
    const URL = "http://localhost:8080/api/enfermedad";

    let peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let respuestaServidor = await fetch(URL, peticion);
    let enfermedad = await respuestaServidor.json();
    return enfermedad;
}