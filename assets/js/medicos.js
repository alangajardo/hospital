
function cargarDoctores(anios_exp){
    fetch("./assets/files/medicos.json")
    .then(medicos => medicos.json())
    .then(function(medicos){
        const contenedorMedicos = document.getElementById("equipoMedico");
    
        medicos.forEach(medico=>{
            if(medico.anios_exp>5){
                const article = document.createElement("article");
                article.className = "col-sm-12 col-md-6 col-lg-3 pt-3";
        
                article.innerHTML = `
                    <div class="card h-100">
                        <img class="card-img-top equipo__img" src="${medico.img}" alt="${medico.alt}">
                        <div class="card-body">
                            <h5 class="card-title">${medico.nombre}</h5>
                            <p class="card-text"><small class="text-body-secondary">${medico.especialidad}</small></p>
                            <p class="card-text">${medico.descripcion}</p>
                        </div>
                    </div>
                `;
        
                contenedorMedicos.appendChild(article);
            }
        });
    
    })
    .catch(error=>{
        console.log("ERROR: " + error);
    });
}
cargarDoctores();

function filtrar(){
    cargarDoctores();
}