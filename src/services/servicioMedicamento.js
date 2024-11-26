export async function buscarMedicamento() {
    const URL = "http://localhost:8080/api/medicamento";

    let peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let respuestaServidor = await fetch(URL, peticion);
    let medicamento = await respuestaServidor.json();
    return medicamento;
}