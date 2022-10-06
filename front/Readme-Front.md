# ProjectAcademy

## Proyecto Academia

Plataforma digital web que permite gestionar nuevos ingresos de orientados y eventos para los mismos.
Se desarrolló desde el front con React.js, para el diseño utilizamos css y tailwind; Nos apoyamos en herramientas de gestion como Jira, Git, Github y scrum como metodología para trabajar colaborativamente en equipo y así poder obtener el mejor resultado posible del proyecto.
A continuación enumeramos y damos una descripcion de cada vista del proyecto.

### 1. Sitio publico
- Home Page
    - Sección superior: Logo y botón ingreso al portal privado.
    - Banner rotador
    - Misión
    - ¿Cuál es nuestra propuesta?
    - Footer

### 2. Portal privado – Web
En esta vista el objetivo es que puedan ingresar solo los administradores para gestionar los orientados que se dan de alta y los eventos.Se visualiza un sidebar con tres opciones para navegar, *inicio*, *orientados* y *eventos*. Un header con imagen de perfil y acceso a los datos del mismo.
- ***Login*** solo podran ingresar al portal privado los administradores, en el se encuentran validaciones tanto del back como del front.
- ***Inicio*** con *listado de orientados* asignados a un orientador, o no, diferenciados por un icono, *boton para ingresar* orientados linkeado con react-router-dom y seccion de *novedades* obtenidas desde back.
- ***Orientados*** se visualiza el listado de orientados, primero los que no estan asignados y un *buscador* para los orientados.
- ***Ingresar orientado*** formulario que permite registrar un nuevo ingreso con sus datos, foto de perfil y generar usuario y contraseña. Todos los campos se encuentran con validaciones de back y front.
- ***Asignar orientador*** luego de ingresar un orientado nuevo, se podra visualizar la opcion de asignar un orientador a traves de un select con opciones consultando a back.
- ***Eventos*** En esta seccion se encuentra el listado de todos los eventos con paginacion y un buscador que filtra por eventos del orientado, y se puede *agendar un evento* formulario para la creacion con nombre del evento, select que trae los orientadores desde el back y otro desplegable con opciones de todos los orientados donde se puede marcar mas de uno. Utilizamos React select para los mismos. Tambien la fecha con validacion desde back y front, horario, duracion y detalle.
- ***Eliminar evento*** funcion que elimina eventos creados.
- ***Ver perfil del usuario*** Solo se permitirá ver los datos cargado del perfil.
- ***Cerrar sesión***
