Pasos para crear modelos de tablas y para cargar datos a ellas:
Paso 1: Crear el esquema en MySql bajo el nombre “project_academy”
Paso 2: Abrir la terminal sobre la carpeta “back” y ejecutar “npm install”
Paso 3: Abrir el archivo “app.js” y buscar ”sequelize.sync({force: true});” (linea 46 aprox. Debe ser true. 
Paso 4: Esperar a que se ejecuten los cambios y cambiar TRUE por FALSE. O comentar
Paso 5: En la terminal ejecutar “node seed”

En caso de querer borrar las tablas y cargar los datos nuevamente arrancar del “Paso 3”

Archivo env:
Paso 1: Dentro de la carpeta back(Al mismo nivel de app.js) crear una carpeta llamada “env”
Paso 2: dentro de la carpeta crear un archivo llamada “.env”. La ruta sería: back/env/.env
Paso 3: Añadir los siguientes datos al archivo: 
PORT = 8000
JWT_SECRETO = secreto
JWT_TIEMPO_EXPIRA = 9999999999999999
JWT_COOKIE_EXPIRES = 9999999

Cuentas admin:
Usuario: admin1  		 Password: admin1
Usuario: admin2 		 Password: admin2
Usuario: admin3  		 Password: admin3

Nombre de los inputs(Orientados):
name
lastname
email
program
photoProfile
phone
age
school
address
why
dni
password

Campos Orientados:
1.	name            nombre
2.	lastname    	apellido
3.	email			correo electrónico
4.	phone			teléfono
5.	program		    Programa (Orientación vocacional, Reorientación,vocacional, Taller de matemáticas, Métodos de estudio)
6.	photoProfile	Foto de perfil
7.	dni			    Documento nacional identidad
8.	age			    Edad
9.	school			Escuela
10.	address		    Dirección
11.	why             (Porque se acerca a la institución?)
12.	OrientadoreId	(Referencia al profesor que oriente, ATENCIÓN es sin 'S')

Campos orientadores:
1.	name
2.	lastname
3.	email
4.	age
5.  avatar

Campos Admins:
1. 	user
2. 	password
3.	name
4.	lastname
5.	email
6.	phone
7. 	linkedin
8.  avatar

Campos Eventos:
name                STRING
date                ONLYDATE
time                TIME
duration            TIME
description         STRING
OrientadoreId       INT

Evento{
    Dato1evento: '',
    dato2: '',
    'Orientadore': {
        Datos de orientador
    },
    'Orientados': [
        {
            DatosPrimerOrientado
        },
        {
            DatosSegundoOrientado
        },{
            etc
        }
    ]
}