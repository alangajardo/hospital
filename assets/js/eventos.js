const pacientes = [
    {
        "nombre": "Pedro"
    },{
        "nombre": "Juan"
    },{
        "nombre": "Diego"
    }
]

//2. Programación orientada a eventos y programación asíncrona.
//2.1 Capturar eventos del usuario en página contacto:
const botonEnviar = document.getElementById("enviarFormulario");

document.addEventListener('DOMContentLoaded', ()=>{
    let random = Math.floor(Math.random() * 3);
    alert(`Bienvenido al Hospital Care estimad@ ${pacientes[random].nombre}, ya será su turno!`);
});

botonEnviar.addEventListener('click', ()=>{
    alert("Consulta enviada");
});


//2.2 - 2.3 Función async/await:
const doctores = [
    {
        "identificador": 1,
        "nombre": "Stephen Strange",
        "especialidad": "Traumatología",
        "anios_experiencia": 10
    },
    {
        "identificador": 2,
        "nombre": "Gregory House",
        "especialidad": "General",
        "anios_experiencia": 20
    },
    {
        "identificador": 3,
        "nombre": "Christine Palmen",
        "especialidad": "Neurología",
        "anios_experiencia": 5
    },
    {
        "identificador": 4,
        "nombre": "Derek Sheperd",
        "especialidad": "Cardiología",
        "anios_experiencia": 12
    }
]

function rescatarDoctores(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(doctores);
        }, 4000);
    });
}

async function obtenerDoctores(){
    try {
        const docs = await rescatarDoctores();
        console.warn("Luego de 4 segundos se logró rescatar:")
        console.log(docs);
    } catch (error) {
        console.error(error);
    }
}

obtenerDoctores();
