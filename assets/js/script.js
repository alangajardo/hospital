//REQUISITOS:
//1. Manipulación de Datos con JSON y simulacion de API REST:
//2. Implementación de algoritmos y estructuras de datos:
function obtenerDatos(ruta){
    return function(archivo){
        return fetch(`./${ruta}/${archivo}.json`)
        .then(data => data.json())
        .then(data=>{
            return data;
        });
    }
}

function crearCardDoctor(doctor){
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
function crearFiltros(especialidad){
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
function crearCardServicio(servicio){
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

document.addEventListener('DOMContentLoaded', ()=>{
    const body = document.body;
    if(body.id == "equipoBody"){
        obtenerDatos('assets/files')('doctores').then(doctores=>{
            const contenedorDoctores = document.getElementById("equipoDoctor");
            cargarDoctores(doctores, contenedorDoctores);

            const contenedorFiltros = document.getElementById("filtroEspecialidad");
            const especialidadesUnicas = [...new Set(doctores.map(doctor => doctor.especialidad))];
            especialidadesUnicas.forEach(especialidad=>{
                let filtro = crearFiltros(especialidad);
                contenedorFiltros.appendChild(filtro);
            });

            let filtroEspecialidades = new Set();
            contenedorFiltros.addEventListener("change", (event) => {
                if (event.target.classList.contains("form-check-input")) {
                    manejarCambioCheckbox(event, filtroEspecialidades);
                    actualizarVista(filtroEspecialidades, doctores, contenedorDoctores);
                }
            });

            const botonOrden = document.getElementById("exp_mayor_5");            
            const doctoresOriginal = [...doctores];
            let ordenActual = 0;

            function cargarDoctoresEnVista(listaDoctores) {
                contenedorDoctores.innerHTML = "";
                listaDoctores.forEach(d => {
                    contenedorDoctores.appendChild(crearCardDoctor(d));
                });
            }
            botonOrden.addEventListener('click', ()=>{
                ordenActual = (ordenActual + 1) % 3;
                let doctoresOrdenados;
                switch (ordenActual) {
                    case 0:
                        // Orden original
                        botonOrden.innerHTML = "Ordenar años servicio";
                        doctoresOrdenados = [...doctoresOriginal];
                        console.log("Se restaura el orden original");
                        break;
                    case 1:
                        // Orden de menor a mayor
                        botonOrden.innerHTML = "Ordenar años servicio &#x2191";
                        doctoresOrdenados = [...doctoresOriginal].sort((a, b) => a.anios_exp - b.anios_exp);
                        console.log("Orden de menor a mayor");
                        break;
                    case 2:
                        // Orden de mayor a menor
                        botonOrden.innerHTML = "Ordenar años servicio &#8595";
                        doctoresOrdenados = [...doctoresOriginal].sort((a, b) => b.anios_exp - a.anios_exp);
                        console.log("Orden de mayor a menor");
                        break;
                }
        
                cargarDoctoresEnVista(doctoresOrdenados);
            });

        });
    } else if(body.id == "serviciosBody"){
        obtenerDatos('assets/files')('servicios').then(servicios=>{
            const contenedorServicios = document.getElementById("carousel-servicios");
            servicios.forEach(servicio=>{
                let articuloDatos = crearCardServicio(servicio);
                contenedorServicios.appendChild(articuloDatos);
            });
        });
    }
});


//3. Programación funcional:
//composición de funciones:
function filtrarDoctoresPorEspecialidades(doctores, especialidades) {
    return doctores.filter(doctor => especialidades.has(doctor.especialidad));
}
function cargarDoctores(doctores, contenedor){
    doctores.forEach(doctor=>{
        let articuloDatos = crearCardDoctor(doctor);
        contenedor.appendChild(articuloDatos);
    });
}
function manejarCambioCheckbox(event, filtroEspecialidades) {
    const label = event.target.nextElementSibling;
    const especialidad = label.textContent;

    if (event.target.checked) {
        filtroEspecialidades.add(especialidad);
    } else {
        filtroEspecialidades.delete(especialidad);
    }
}
function actualizarVista(filtroEspecialidades, doctores, contenedorDoctores) {
    contenedorDoctores.innerHTML = "";
    const doctoresFiltrados = filtroEspecialidades.size > 0 ? filtrarDoctoresPorEspecialidades(doctores, filtroEspecialidades) : doctores;
    cargarDoctores(doctoresFiltrados, contenedorDoctores);
}

//4. Programación orientada a objetos:
class Doctor{
    constructor(nombre, especialidad, descripcion, aniosExp, img, disponibilidad){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.descripcion = descripcion;
        this.aniosExp = aniosExp;
        this.img = img;
        this.disponibilidad = disponibilidad;
    }

    calcularCostoConsulta(costoConsulta, porcDescuento){
        let descuento = Math.round(costoConsulta * porcDescuento);
        return costoConsulta - descuento;
    }

    gestionarDisponibilidad(nuevaFechaHora){
        this.disponibilidad.apend(nuevaFechaHora);
        return `se agregó ${nuevaFechaHora} a su disponibilidad`;
    }
}

class Cirujano extends Doctor{
    constructor(nombre, especialidad, descripcion, aniosExp, img, disponibilidad){
        super(nombre, especialidad, descripcion, aniosExp, img, disponibilidad);
    }

    calcularCostoConsulta(costoConsulta, horasCirugia){
        let descuento = Math.round(costoConsulta * horasCirugia/2);
        return costoConsulta - descuento;
    }
}
class Pediatra extends Doctor{
    constructor(nombre, especialidad, descripcion, aniosExp, img, disponibilidad){
        super(nombre, especialidad, descripcion, aniosExp, img, disponibilidad);
    }

    calcularCostoConsulta(costoConsulta, edad){
        let descuento = Math.round(costoConsulta * edad);
        return costoConsulta - descuento;
    }
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

const botonCitas = document.getElementById("botonCitas");
botonCitas.addEventListener("click", async ()=>{
    try {
        botonCitas.innerText = "reservando...";
        let citas = await rescatarCitas();
        console.warn("Luego de 3 segundos se logró rescatar:")
        console.log(citas);
        
        const rutCita = document.getElementById("rutCita");
        const espCita = document.getElementById("espCita");
        const fechaCita = document.getElementById("fechaCita");
        
        const nuevaCita = [{
            codigoCita: citas[citas.length-1].codigoCita + 1,
            rutPaciente:rutCita.value,
            especialidad: espCita.value,
            fechaCita: fechaCita.value,
            estado: "pendiente"
        }];
        
        citas = [...citas, ...nuevaCita];
        alert("Nueva cita agendada con éxito!");
        
        botonCitas.innerText = "Reservar";
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
        console.log(citas);
    } catch (error) {
        console.error(error);
    }
});
