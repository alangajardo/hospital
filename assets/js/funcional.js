
const atenciones = [
    {
        "id_atencion": 1,
        "especialidad": "oftalmología",
        "doctor": "Dr. House",
        "fecha_atencion": "10-01-2024",
        "tiempo_atencion": 50,
        "total": 5000,
        "nom_paciente": "Pedrito",
        "tiempo_espera": 10
    },
    {
        "id_atencion": 2,
        "especialidad": "traumatología",
        "doctor": "Dr. Fate",
        "fecha_atencion": "15-03-2024",
        "tiempo_atencion": 45,
        "total": 1000,
        "nom_paciente": "Maria",
        "tiempo_espera": 15
    },
    {
        "id_atencion": 3,
        "especialidad": "oftalmología",
        "doctor": "Dr. House",
        "fecha_atencion": "21-06-2024",
        "tiempo_atencion": 55,
        "total": 8000,
        "nom_paciente": "Pedrito",
        "tiempo_espera": 8
    },
    {
        "id_atencion": 4,
        "especialidad": "traumatología",
        "doctor": "Dr. Fate",
        "fecha_atencion": "19-08-2024",
        "tiempo_atencion": 35,
        "total": 4500,
        "nom_paciente": "Pedrito",
        "tiempo_espera": 20
    },
    {
        "id_atencion": 5,
        "especialidad": "oftalmología",
        "doctor": "Dr. House",
        "fecha_atencion": "05-10-2024",
        "tiempo_atencion": 40,
        "total": 8900,
        "nom_paciente": "Maria",
        "tiempo_espera": 22
    },
];

//1. Programación funcional en Javascript:
//1.1 CURRYING:
/*function calcularCosto(nombre_paciente, especialidad){
    costo = 0;
    atenciones.forEach(atencion => {
        if(atencion.nom_paciente == nombre_paciente && atencion.especialidad==especialidad){
            costo += atencion.total;
        }
    });
    return costo;
}*/

function calcularCosto(atenciones){
    return function(nombre_paciente){
        return function(especialidad){
            let acumulador = 0;
            atenciones.forEach(atencion => {
                if(atencion.nom_paciente == nombre_paciente && atencion.especialidad == especialidad){
                    acumulador += atencion.total;
                }
            });
            return acumulador;
        }
    }
}

let nombre = "Maria";
let esp = "oftalmología";
console.log(`El total a pagar de ${nombre} por atenciones de ${esp} es ${ calcularCosto(atenciones)(nombre)(esp) } pesos.`);

//1.2 FUNCIÓN FLECHA:
/*function calcularTiempoPromedioEspera(atenciones){
    let acumulador = 0;
    atenciones.forEach(atencion => {
        acumulador += atencion.tiempo_espera;
    });
    return acumulador/atenciones.length;
}*/

let calcularTiempoPromedio = (atenciones) => {
    let acumulador = 0;
    atenciones.forEach(atencion => {
        acumulador += atencion.tiempo_espera;
    });
    return acumulador/atenciones.length;
};

let tiempoPromedio = calcularTiempoPromedio(atenciones);
console.log(`El tiempo promedio de las atenciones es ${tiempoPromedio} minutos.`);

//1.3 RECURSIÓN:
/*function totalHorasDoctor(atenciones, nom_doctor){
    let acumulador = 0;
    atenciones.forEach(atencion => {
        if(atencion.doctor == nom_doctor){
            acumulador += atencion.tiempo_atencion;
        }
    });
    return acumulador;
}*/

function totalHorasDoctor(atenciones, nom_doctor, posicion){
    if(posicion === atenciones.length-1){
        return atenciones[atenciones.length-1].tiempo_atencion;
    }
    let horas = 0;
    if(atenciones[posicion].doctor == nom_doctor){
        horas = atenciones[posicion].tiempo_atencion;
    }
    return (horas + totalHorasDoctor(atenciones, nom_doctor, posicion+1));
}

let doctor = "Dr. House";
console.log(`El tiempo de atención de ${doctor} es de ${totalHorasDoctor(atenciones, doctor, 0)/60} horas.`);

//1.4 Composición de funciones:
/*function costoAtencion(id, atenciones){
    let atencion = atenciones.find(a => a.id_atencion == id)
    
    let contador = 0;
    atenciones.forEach(atencion => {
        if(atencion.nom_paciente == atencion.nom_paciente){
            contador++;
        }
    });

    if(contador >=2 && contador<=3){
        console.log("costo: " + atencion.total);
        console.log("costo con 10% descuento: " + atencion.total*0.9);
    }else if(contador>3 && contador<=5){
        console.log("costo: " + atencion.total);
        console.log("costo con 20% descuento: " + atencion.total*0.8);
    }else{
        console.log("costo: " + atencion.total);
        console.log("costo con 30% descuento: " + atencion.total*0.7);
    }
}*/

function encontrarAtencion(id, atenciones){
    return atenciones.find(a => a.id_atencion == id);
}
function contarAtencionesPaciente(nombre, atenciones){
    return atenciones.filter(a => a.nom_paciente==nombre).length;
}
function calcularDescuento(total, contador){
    if(contador == 1){
        return total;
    }else if(contador >=2 && contador<=3){
        return total * 0.9;
    }else if(contador>3 && contador<=5){
        return total * 0.8;
    }else{
        return total * 0.7;
    }
}
function costoAtencion(id, atenciones){
    let atencion = encontrarAtencion(id, atenciones);
    let contador = contarAtencionesPaciente(atencion.nom_paciente, atenciones);
    return totalDescuento = calcularDescuento(atencion.total, contador);
}

let id = 1;
console.log(`El total de la atención ${id} es de ${costoAtencion(id, atenciones)} pesos`)
