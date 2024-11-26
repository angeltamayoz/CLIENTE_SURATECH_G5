//PASOS PARA CONSUMIR API CON JS

export async function buscarPacientes() {
    //1. Se configura la url del servicio que se desesa consumir
    const URL = "http://localhost:8080/api/paciente";

    //2. Se configura la petición del servicio a consumir
    let peticion = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    //3. Consumir el API
    let respuestaServidor = await fetch(URL, peticion);
    let pacientes = await respuestaServidor.json();
    return pacientes;
}