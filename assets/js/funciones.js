//1. Manipulación de Datos con JSON y simulacion de API REST:
//2. Implementación de algoritmos y estructuras de datos:
export function obtenerDatos(ruta){
    return function(archivo){
        return fetch(`./${ruta}/${archivo}.json`)
        .then(data => data.json())
        .then(data=>{
            return data;
        });
    }
}

export function crearCardDoctor(doctor){
    const article = document.createElement("article");
    article.className = "col-sm-12 col-md-6 col-lg-3 pt-3";

    article.innerHTML = `
        <div class="card h-100">
            <img class="card-img-top equipo__img" src="assets/img/doctores/${doctor.img}" alt="${doctor.alt}">
            <div class="card-body">
                <h5 class="card-title">${doctor.nombre}</h5>
                <p class="card-text"><small class="text-body-secondary">${doctor.especialidad} (${doctor.anios_exp} años exp.)</small></p>
                <p class="card-text">${doctor.descripcion}</p>
            </div>
        </div>
    `;
    return article;
}

export function crearFiltros(especialidad){
    const div = document.createElement("div");
    div.className = "col-6 col-md-3";
    
    div.innerHTML = `
        <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label" value="${especialidad}">${especialidad}</label>
        </div>
    `;
    return div;
}

export function crearCardServicio(servicio){
    const article = document.createElement("div");
    article.className = "carousel-item active";

    article.innerHTML = `
        <article>
            <img class="d-block w-100 servicio__img" src="assets/img/servicios/${servicio.img}" alt="${servicio.nombre}">
            <div class="carousel-caption d-md-block servicio__parrafo">
                <h4><b>${servicio.nombre}</b></h4>
                <p>${servicio.descripcion}</p>
            </div>
        </article>
    `;
    return article;
}

//3. Programación funcional:
//composición de funciones:
export function filtrarDoctoresPorEspecialidades(doctores, especialidades) {
    return doctores.filter(doctor => especialidades.has(doctor.especialidad));
}
export function cargarDoctores(doctores, contenedor){
    doctores.forEach(doctor=>{
        let articuloDatos = crearCardDoctor(doctor);
        contenedor.appendChild(articuloDatos);
    });
}
export function manejarCambioCheckbox(event, filtroEspecialidades) {
    const label = event.target.nextElementSibling;
    const especialidad = label.textContent;

    if (event.target.checked) {
        filtroEspecialidades.add(especialidad);
    } else {
        filtroEspecialidades.delete(especialidad);
    }
}
export function actualizarVista(filtroEspecialidades, doctores, contenedorDoctores) {
    contenedorDoctores.innerHTML = "";
    const doctoresFiltrados = filtroEspecialidades.size > 0 ? filtrarDoctoresPorEspecialidades(doctores, filtroEspecialidades) : doctores;
    cargarDoctores(doctoresFiltrados, contenedorDoctores);
}

//5. Programación asíncrona y eventos:
function rescatarCitas(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            obtenerDatos('assets/files')('citas').then(citas=>{
                resolve(citas);
            });
        }, 3000);
    });
}

export async function rescatarCitasReintento(intentos=3){
    try {
        return await rescatarCitas();
    } catch (error) {
        if(intentos > 0){
            console.warn(`Reintentanto... quedan ${intentos} intentos`);
            return await rescatarCitasReintento(intentos-1);
        }else{
            throw new Error("Error al rescatar citas después de 3 intentos");
        }
    }
}
