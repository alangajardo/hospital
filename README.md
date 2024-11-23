<img src="./assets/img/logo.png" width="250">

# **Hospital Care**

El  proyecto web desarrollado abarca una página web responsiva creada para dar a conocer al Hospital Care.
El sitio web cuenta con información relevantes sobre los servicios que ofrece a sus pacientes como el servicio de urgencias, telemedicina y cuidados paliativos, todos demostrados a través de imágenes y explicando el servicio que se ofrece.
Además cuanta con una sección de comentarios de los pacientes que se han atendido en el hospital en sus distintas especialidades.
En otra de las páginas del sitio web se puede ver a los profesionales que trabajan en el hospital y las áreas de especialización que cubren como traumatología, ginecología, pediatría y neurología, destacando la gran carrera de los médicos presenten para la atención.
Como toda página web, cuenta con un formulario de contacto que le permite a un futuro paciente realizar preguntas al hospital y aclarar cualquier duda que pueda presentar, entregando información como nombre y correo para un posterior contacto.
Cada página cuenta con un pie de página que entrega información sobre el hospital, un teléfono de contacto y las redes sociales del mismo junto con su ubicación.

Para lograr lo anterior se eligió trabajar el proyecto de un stack web que utiliza Bootstrap Y SASS para manejar el aspecto visual del sitio web. Se utilizaron los patrones de 7-1 y BEM para organizar el código. Se aplicaron funcionalidades para que el contenido de las páginas se vea correctamente en todos los tamaños comunes de pantalla, por lo que es un diseño responsivo.

Dentro de sus principales características se encuentra:

1. La presentación del logo del hospital que lo identifica.
2. Un menu de navegación para moverse a través de la página web y su contenido.
3. Un botón para reservar citas médicas con los doctores disponibles.
4. Presentar nuestra misión, visión servicios y testimonios claves de los pacientes que se han atendido en Hospital Care.
5. Presentar al equipo de médicos que atienden en el hospital.
6. Un formulario de contacto, donde los paciente podrán realizar todas las preguntas que tengan.
7. Ubicación del hospital.
8. Pie de página con información complementaria del hospital.

# Algunas de las tecnologías que utilicé:
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

El proyecto se compone de una estructura simple:

1. Carpeta assets que contiene las imágenes, css y sass del proyecto.
2. Archivo .gitignore para controlar los elementos que suben a GitHub.
3. Página principal, contacto y equipo del proyecto web.
4. Archivo package.json que se encarga de controlar la versión de bootstrap utilizada en el proyecto.

En cuanto a la forma de trabajar los estilos se utilizó la metodología BEM (Block, Element, Modifier). En el cual para mantener el proyecto se utilización modularización de los elementos a través de SASS y 7-1, lo cual permite una mejor mantenibilidad, orden y escalabilidad a futuro para modificaciones de la interfaz gráfica.

Ademas que se permite la utilización de variables e importación entre archivos, lo cual genera un ambiente de desarrollo ás intuitivo.

Se trabajó con una página responsiva a través de la utilización de bootstrap, para controlar los distintos puntos de ruptura de los dispositivos. Particularmente se utilizaron mas medidas sm, md, lg y xl de las clases de bootstrap para controlar los puntos de ruptura.

Se instalo bootstrap al proyecto, de tal manera que a través de SASS se tomó la librería de bootstrap y compiló. Se sobrescribieron algunas de las variables nativas de bootstrap para utilizar los colores del hospital.

# Inclusión de JavaScript o TypeScript al proyecto

Como conclusión, tiene muchas más ventajas que desventajas la implementación de JavaScript o TypeScript en nuestro proyecto, ya que nos entregará herramientas más avanzadas para mejorar ya se la interfaz visual a través del manejo del DOM, la interacción con el usuario final a través de su integración con botones y/o formularios, e incluso ayudará a manejar de mejor manera la información que muestra el sitio web, puesto que todo es estático y de difícil modificación o actualización, y a través por ejemplo de objetos, listas o archivos JSON, se podría manejar la información de las especialidades y/o doctores de una manera más simple.

1)	Inicialmente, ya sea utilizando JavaScript o TypeScript, esto permitirá que nuestra página web pueda alcanzar nuevos horizontes, ya que podríamos utilizar nuevos recursos interactivos y aplicarlos al sitio web, de tal manera que mejoraría la experiencia del usuario.
2)	La implementación del botón para generar una reserva no sería funcional sin la programación que aporta JavaScript y/o TypeScript, así también la funcionalidad del formulario de contacto, puesto que de esta manera podemos validar la información ingresada, enviarla a una base de datos por ejemplo e incluso enviar un correo de verificación con la consulta.
3)	Se han mencionado ventajas, como desventaja podría verse el tiempo que se deberá invertir en la aplicación de ellos al sitio web y la curva de aprendizaje necesario si se elige la opción de TypeScript.

# **Implementación de JavaScript**

Dentro del proyecto se comenzó aplicando el comando prompt para solicitar al usuario el ingreso de datos y comenzar a validar y analizar los datos que un usuario puede entregar. Se validaron los datos con ciclos y condicionales para restringir lo que el usuario pueda ingresar.

Por otra parte tenemos los tipos de variables que se utilizaron, que en esta ocasión fueron let y const, la primera nos permite almacenar información, puede variar y tiene alcance de bloque, en cambio la segunda no pueda mutar su valor.

Además tenemos el **debugger**, el cual nos permite detener la pausar la ejecución del código de javascript y analizar el paso a paso que ocurre a medida que avanzamos en la ejecución del código.

Al momento de aplicar javascript al proyecto, se debe tener en consideración como funciona **event loop**:
1. Stack: le da orden al llamado de las operaciones e indica el orden de ejecución al llamar a varias funciones.
2. Heap: almacena en memoria los elementos que necesitan quedarse en el programa por mas tiempo.
3. Queue: es donde las tareas quedan en espera para ejecutarse.

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
npm install
```
```
code .
```

## Autores
[<img src="https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/321995472_1228880011041329_3615063310632845232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE0FAwgoYNy1qe2BsmB8IktNxci0VAU0tY3FyLRUBTS1oTqXOpZpNGmTfqGgZULfuw&_nc_ohc=3kM2qqydNuoQ7kNvgE-YvBP&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&_nc_gid=AaTe7_f2gQf0AeasOOcquH0&oh=00_AYC6-AQ2eXCOEO4gy-6BGMF2Eu7KLiMd-4m-Vwbg7_N3VQ&oe=6730A086" width=115><br><sub>Alan Gajardo Medina</sub>](https://github.com/alangajardo)