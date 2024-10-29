<img src="./assets/img/hospital_logo.jpg" width="250">

# **Hospital Care**

El proposito del proyecto es generar una página web responsiva para el Hospital Care, ya que actualmente no cuentan con una página web que les permita presentar a sus pacientes los servicios que ofrece y obtener información de ellos en base a testimonios de los mismos paciente que se atienden en el hospital.

Dentro de sus principales características se encuentra:

1. La presentación del logo del hospital que lo identifica.
2. Un menu de navegación para moverse a través de la página web y su contenido.
3. Un Botón para reservar citas médicas con los doctores disponibles.
4. Presentar nuestra misión, visión servicios y testimonios claves de los pacientes que se han atendido en Hospital Care.
5. Presentar al equipo de médicos que atienden en el hospital.
6. Un formulario de contacto, donde los paciente podrán realizar todas las preguntas que tengan.

# Algunas de las tecnologías que utilicé:
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

El proyecto se compone de una estructura simple:

1. Carpeta assets que contiene las imágenes, css y sass del proyecto.
2. Archivo .gitignore para controlar los elementos que suben a GitHub.
3. Página principal, contacto y equipo del proyecto web.

En cuanto a la forma de trabajar los estilos se utilizó la metodología BEM (Block, Element, Modifier). EN el cual para mantener el proyecto se utilización modularización de los elementos a través de SASS, lo cual permite una mejor mantenibilidad, orden y escalabilidad a futuro para modificaciones de la interfaz gráfica.

Ademas que se permite la utilización de variables e importación entre archivos, lo cual genera un ambiente de desarrollo ás intuitivo.

Se trabajo con una página responsiva a través de la utilización de media queries, para controlar los distintos puntos de ruptura de los dispositivos. Particularmente en el proyecto se utilizaron 1024px como primer punto de modificación para las tarjeta de la sección principal y luego 768px para la adpatación de los elementos del footer.

Sobre ls distribución que se utilizó de los elementos SASS, se partió creando una carpeta dentro de los ASSETS, la cual se dividió en componentes como header, footer, bienvenida, formulario de contacto, principal y testimonios, todos cumpliendo con el formato de escritura para modularizar en SASS. A parte se creó una carpeta con modulos generales como la base del proyecto y las variables. Finalmente un archivo general styles donde se importante los archivos modulares.


# Levantar el proyecto
Para poder trabajar en el proyecto debe abrir una linea de comando y seguir los siguientes pasos (la versión 1.1 de la página trabaja con html y css a través de SASS, por lo cual se recomienda instalar alguna extensión como live server):
```
cd UBICACION_A_TRABAJAR
```
```
git clone https://github.com/alangajardo/hospital.git
```
```
cd hospital
```
```
code .
```

## Autor
| [<img src="https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/321995472_1228880011041329_3615063310632845232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4hlnzdtF3RMQ7kNvgHL6Zi3&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&_nc_gid=A5I3Brykzh8PH4luat7pArB&oh=00_AYBoTuxohtWs2HIX50EWGIAD5xpiHq1dsW-smD1v60vTsw&oe=6726F586" width=115><br><sub>Alan Gajardo Medina</sub>](https://github.com/alangajardo) |
| :---: |