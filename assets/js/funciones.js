console.log("Aquí tenemos un formulario para hacer consultas al hospital");

let nombre;
while(true){
    nombre = prompt("Ingrese su nombre: ");
    if(nombre.trim().length > 0){
        break;
    }else{
        alert("ERROR! el nombre no puede estar en blanco!");
    }
}
let correo_electronico;
while(true){
    correo_electronico = prompt("Ingrese su correo electrónico: ");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(correo_electronico)){
        break;
    }else{
        alert("ERROR! Formato de correo incorrecto!");
    }
}

let telefono;
while(true){
    telefono = parseInt(prompt("Ingrese su teléfono: "));
    if(isNaN(telefono)){
        alert("ERROR! debe ingresar un número");
    }else{
        break;
    }
}


console.log(`Bienvenido ${nombre} (${typeof nombre})`);
console.log(`Tu correo es: ${correo_electronico} (${typeof correo_electronico})`);
console.log(`Tu teléfono es: ${telefono} (${typeof telefono})`);

alert(`Bienvenido a Hospital Care ${nombre}
El correo registrado es: ${correo_electronico ? correo_electronico : "CORRE INCORRECTO"}
Tu teléfono es: ${telefono}`);
