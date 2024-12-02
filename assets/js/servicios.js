let medicos = [
    {
        "codigo_medico": 1,
        "img": "dr_stephen_strange.jpeg",
        "alt": "dr. Stephen Strange",
        "nombre": "Dr. Stephen Strange",
        "especialidad": "Traumatología",
        "descripcion": "El Dr. Stephen Strange es un especialista en traumatología con experiencia en el diagnóstico y tratamiento de lesiones musculoesqueléticas y fracturas. Se ha formado en instituciones de prestigio y participa en congresos médicos, priorizando la recuperación funcional y el bienestar de sus pacientes.",
        "contacto": {
            "correo": "stephen.strange@hcare.cl",
            "telefono": 912312312
        },
        "anios_exp": 3,
        "horario": {
            "lunes": ["10:00", "11:00", "12:00"],
            "martes": ["10:00", "11:00", "12:00"],
            "miercoles": ["10:00", "11:00", "12:00"],
            "jueves": ["10:00", "11:00", "12:00"],
            "viernes": ["10:00", "11:00", "12:00"]
        },
        "disponibilidad": true
    },
    {
        "codigo_medico": 2,
        "img": "dr_christine_palmer.jpeg",
        "alt": "dr. christine palmen",
        "nombre": "Dr. Christine Palmer",
        "especialidad": "Ginecología",
        "descripcion": "La Dra. Christine Palmer es una ginecóloga con experiencia en el cuidado de la salud femenina, especializada en afecciones ginecológicas y control prenatal. Combina conocimiento científico con un enfoque empático y se compromete a brindar atención integral y personalizada para el bienestar de cada mujer.",
        "contacto": {
            "correo": "christine.palmer@hcare.cl",
            "telefono": 945645645
        },
        "anios_exp": 10,
        "horario": {
            "lunes": ["14:00", "15:00", "16:00"],
            "martes": ["14:00", "15:00", "16:00"],
            "miercoles": ["14:00", "15:00", "16:00"],
            "jueves": ["14:00", "15:00", "16:00"],
            "viernes": ["14:00", "15:00", "16:00"]
        },
        "disponibilidad": false
    },
    {
        "codigo_medico": 3,
        "img": "dr_fate.webp",
        "alt": "dr. fate",
        "nombre": "Dr. Fate",
        "especialidad": "Pediatría",
        "descripcion": "El Dr. Fate es un pediatra comprometido con la salud infantil, desde recién nacidos hasta adolescentes. Su enfoque se centra en el diagnóstico y tratamiento de enfermedades, promoviendo el desarrollo saludable y ofreciendo atención personalizada para cada niño.",
        "contacto": {
            "correo": "fate@hcare.cl",
            "telefono": 954354354
        },
        "anios_exp": 15,
        "horario": {
            "lunes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "martes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "miercoles": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "jueves": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "viernes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"]
        },
        "disponibilidad": false
    },
    {
        "codigo_medico": 4,
        "img": "dr_derek_sheperd.jpeg",
        "alt": "dr. derek sheperd",
        "nombre": "Dr. Derek Sheperd",
        "especialidad": "Neurología",
        "descripcion": "El Dr. Derek Shepherd es un neurólogo especializado en el diagnóstico y tratamiento de trastornos del sistema nervioso, como epilepsia y accidentes cerebrovasculares. Se dedica a brindar tratamientos personalizados que mejoran la calidad de vida de sus pacientes.",
        "contacto": {
            "correo": "derek.sheperd@hcare.cl",
            "telefono": 897697697
        },
        "anios_exp": 4,
        "horario": {
            "lunes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "martes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "miercoles": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "jueves": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"],
            "viernes": ["10:00", "11:00", "12:00","14:00", "15:00", "16:00"]
        },
        "disponibilidad": true
    }
]

let servicios = [
    {
        "nombre": "Urgencia",
        "descripcion": "El servicio de urgencia de un hospital ofrece atención médica inmediata a pacientes en condiciones críticas, funcionando las 24 horas con personal especializado y equipamiento para estabilizar y diagnosticar.",
        "img": "servicio_1.jpg"
    },
    {
        "nombre": "Telemedicina",
        "descripcion": "El servicio de telemedicina proporciona atención médica a distancia mediante tecnologías como videollamadas y chats, permitiendo consultas sin desplazamientos y optimizando recursos sanitarios, manteniendo la confidencialidad y calidad del cuidado.",
        "img": "servicio_2.jpg"
    },
    {
        "nombre": "Paliativos",
        "descripcion": "El servicio de cuidados paliativos mejora la calidad de vida de pacientes con enfermedades avanzadas sin cura, como el cáncer terminal, aliviando el dolor y síntomas, y brindando apoyo a las familias mientras prioriza el confort del paciente.",
        "img": "servicio_3.jpg"
    }
]

console.warn("MERGE DE LISTAS DE VALORES")
console.log(medicos.concat(servicios))