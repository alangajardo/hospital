//Destructuring:
//mostrar doctores disponibles:
const contenedorMedicos = document.getElementById("equipoMedico");

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

cargarDoctores();

//ORDENAR:
function ordenar_menor_mayor(){
    obtener_medicos().then(medicos=>{
        contenedorMedicos.innerHTML = "";
        medicos.sort((a,b) => a.anios_exp - b.anios_exp).forEach(m=>{
            contenedorMedicos.appendChild( crear_card_medico(m) );
        });
    })
}