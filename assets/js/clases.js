let listaAtenciones = [
    {
        "codigo": 1,
        "doctor": "Stephen Strange",
        "paciente": "Mario Perez"
    },
    {
        "codigo": 2,
        "doctor": "Gregory House",
        "paciente": "Arturo Diaz"
    },
    {
        "codigo": 3,
        "doctor": "Stephen Strange",
        "paciente": "Marcelo Gallardo"
    },
    {
        "codigo": 4,
        "doctor": "Gregory House",
        "paciente": "Maria Lavin"
    },
    {
        "codigo": 5,
        "doctor": "Stephen Strange",
        "paciente": "Tomas Claro"
    },
]
let listaOperaciones = [
    {
        "codigo": 1,
        "doctor": "Stephen Strange",
        "paciente": "Mario Perez"
    },
    {
        "codigo": 2,
        "doctor": "Stephen Strange",
        "paciente": "Arturo Diaz"
    },
    {
        "codigo": 3,
        "doctor": "Stephen Strange",
        "paciente": "Marcelo Gallardo"
    },
    {
        "codigo": 4,
        "doctor": "Gregory House",
        "paciente": "Maria Lavin"
    },
    {
        "codigo": 5,
        "doctor": "Stephen Strange",
        "paciente": "Tomas Claro"
    },
]

//3. Programación orientada a objetos:
//3.1 Crear una clase Doctor con atributos y métodos:
class Doctor{
    constructor(nombre, especialidad, aniosExperiencia){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._aniosExperiencia = aniosExperiencia;
    }

    get aniosExperiencia(){
        return this._aniosExperiencia;
    }

    set aniosExperiencia(nuevoAniosExperiencia){
        if(nuevoAniosExperiencia >= 0){
            this._aniosExperiencia = nuevoAniosExperiencia;
        }else{
            console.error("Los años debe ser a partir de cero!");
        }
    }

    presentar(){
        console.log(`Tarjeta de presentación:\n Nombre: ${this.nombre}\n Especialidad: ${this.especialidad}\n Años experiencia: ${this.aniosExperiencia}`)
    }

    calcularPacientesAtendidos(atenciones){
        let cont = 0;
        atenciones.forEach(atencion => {
            if(atencion.doctor == this.nombre){
                cont++;
            }
        });
        return cont;
    }
}

let doctor1 = new Doctor("Stephen Strange", "Neurólogo", -15);
doctor1.presentar();
let cantAtenciones = doctor1.calcularPacientesAtendidos(listaAtenciones);
console.log(`El doctor ${doctor1.nombre} atendió a ${cantAtenciones} pacientes`);


//3.2 - 3.3 - 3.4 Crear una subclase como Cirujano:
class Cirujano extends Doctor{
    constructor(nombre, especialidad, aniosExperiencia){
        super(nombre, especialidad, aniosExperiencia);
    }

    calcularPacientesAtendidos(operaciones){
        let cont = 0;
        operaciones.forEach(operacion => {
            if(operacion.doctor == this.nombre){
                cont++;
            }
        });
        return cont;
    }
}

let cirujano1 = new Cirujano("Gregory House", "Cardiología", 5);
let cantOperaciones = cirujano1.calcularPacientesAtendidos(listaOperaciones);
console.log(`El doctor ${cirujano1.nombre} operó a ${cantAtenciones} pacientes`)