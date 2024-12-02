//función para obtener datos:
function obtener_medicos(){
    return fetch("./assets/files/medicos.json")
    .then(medicos => medicos.json())
    .then(medicos=>{
        return medicos;
    });
}

function crear_card_medico(medico){
    const article = document.createElement("article");
    article.className = "col-sm-12 col-md-6 col-lg-3 pt-3";

    article.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top equipo__img" src="assets/img/medicos/${medico.img}" alt="${medico.alt}">
            <div class="card-body">
                <h5 class="card-title">${medico.nombre}</h5>
                <p class="card-text"><small class="text-body-secondary">${medico.especialidad}</small></p>
                <p class="card-text">${medico.descripcion}</p>
            </div>
        </div>
    `;

    return article;
}

function cargarDoctores(){
    obtener_medicos().then(function(medicos){
        const contenedorMedicos = document.getElementById("equipoMedico");
        medicos.forEach(medico=>{
            let articulo_datos = crear_card_medico(medico);
            contenedorMedicos.appendChild(articulo_datos);
        });
    })
    .catch(error=>{
        console.log("ERROR: " + error);
    });
}

//Destructuring:
//mostrar doctores disponibles:
const contenedorMedicos = document.getElementById("equipoMedico");

function cargar_doctor_disponible(){
    obtener_medicos().then(medicos =>{
        console.warn("CLONACIÓN: 1ero ORIGINAL, 2do FILTRADO SIN AFECTAR ORIGINAL");
        let medicos_clonados = JSON.parse(JSON.stringify(medicos))
        medicos_clonados.forEach(m => {
            m.disponibilidad = true;
        });
        console.log(medicos);
        console.log(medicos_clonados);
        
        medicos.filter(m => m.disponibilidad).forEach(medico => {
            console.warn("MÉDICOS FILTRADOS")
            console.log(medico);
            contenedorMedicos.appendChild( crear_card_medico(medico) );
        });
    })
    .catch(error=>{
        console.log("ERROR: " + error);
    });
}

cargar_doctor_disponible();


//implementación de estructuras de datos:
function trabajar_lista_doctores(){
    obtener_medicos().then(medicos => {
        console.warn("TRABAJAR MEDICOS");
        let nuevo_medico = {
            "codigo_medico": 5,
            "nombre": "Dr. Gregory House",
            "especialidad": "General",
            "descripcion": "El Dr. Housees genial.",
            "contacto": {
                "correo": null,
                "telefono": null
            },
            "anios_exp": 10,
            "disponibilidad": true
        };
        console.warn("ORIGINAL");
        console.table(medicos);
        
        console.warn("AGREGADO NUEVO");
        medicos.push(nuevo_medico);
        console.table(medicos);
        
        console.warn("ELIMINAR DOCTOR");
        let lista_actualizada = medicos.filter(m => m.codigo_medico != 3);
        console.table(lista_actualizada);

        console.warn("BUSCAR 1 DOCTOR");
        console.log(medicos.find(m=>m.codigo_medico==2))
    })
    .catch(error=>{
        console.log("ERROR: " + error);
    });
}
trabajar_lista_doctores();

//ORDENAR:
function ordenar_menor_mayor(){
    obtener_medicos().then(medicos=>{
        contenedorMedicos.innerHTML = "";
        medicos.sort((a,b) => a.anios_exp - b.anios_exp).forEach(m=>{
            contenedorMedicos.appendChild( crear_card_medico(m) );
        });
    })
}