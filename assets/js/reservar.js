let reservas = [];
let atenciones = [];

function reservar_cita(){
    for (let i = 0; i < 3; i++) {
        nombre = prompt("Ingrese su nombre: ");
        reservas.push(nombre);
        console.log(reservas);
    }
    console.log("Se atiende a: " + reservas.pop() );
}

function orden_llegada(){
    for (let i = 0; i < 3; i++) {
        nombre = prompt("Ingrese su nombre para su atención: ");
        atenciones.push(nombre);
        console.log(atenciones);
    }
    alert("Se atenderá primero a: " + atenciones.shift() )
    console.log(atenciones)
}
orden_llegada()