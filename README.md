Book's App
=========

Book es una aplicación HTML5 que nos permetiría:

  - obtener bases solidas de Javascript
  - Aprender a visualizar los proyectos de manera modular
  - aprender a convertir un psd a HMTL y CSS bajo el concepto de componentes
  - trabajar con flujos reales
  - usar la metodologia agile para el proceso de desarrollo
  - optimización del proceso de desarrollo, calidad y produción

## Características
  - Soportara todos los browser llamados [Evergreen](http://eisenbergeffect.bluespire.com/evergreen-browsers/)
  - Listará todos los libros de tecnología
  - Permitira al usuario loggearse (usuarios ya existentes)
  - Una vez un usuario haya ingresado podrá saber quién esta leyendo algún libro de interés o podrá reservar un libro para leerlo
  - No puede utilizarse JQuery
  - En el siguiente link pueden descargar los assets [download](https://drive.google.com/folderview?id=0B08r1h3RbqoEdC12NVdjYl80SHc&usp=sharing)
  - Un ejemplo basico con break points y demas esta en esta direccion [ver](http://jgatjens.github.io/books-frontend/)
  - Si tienen dudas de como empezar el proyecto se pueden a cercar para discutirlo
  
Version
----
1.0

Tech
-----------

Estas son las tecnologías a escoger:

* CSS reset (escoger)
* Grunt / Gulp / webpack / browserify - organizador de tareas
* Bower        - manejador de dependencias frontend
* SASS / LESS  - pre compilador de css
* Loadsh / underscore  
* Font Awesome / SVGs
* Grid (Susy, Bourbon Neat)
* Localstorage (session user)
* Etc..

Assets 
-----------

El diseño del app se ha echo con [Sketch](http://bohemiancoding.com/sketch/). En el siguiente [link](https://drive.google.com/open?id=0B08r1h3RbqoEdC12NVdjYl80SHc) podran encontrar un archivo de sketch y un wireframe que explica las funcionalidades basicas del app. 


## Frontend - Sprint 1

Lineamientos del primer sprint:

- Crear un repositorio en su cuenta de github llamado "books-frontend" para el frontend
- Instalar nodejs
- Definir la estructura de archivos. Por ejemplo [boilerplate](https://github.com/h5bp/html5-boilerplate).
- Configurar [editorConfig](http://editorconfig.org/)
- Usar Gitflow metodologia
- Crear una tarea (**default** | **server**) que permita:
    - Correr SASS / LESS
    - [Jslint](http://www.jslint.com/)
    - recargar el browser después de un cambio (*browser-sync)
    - Levantar servidor local
- Crear otra tarea para la optimizacion de los assets (**build**): 
    - Generar dinámicamente prefijos de selectores propietarios
    - Minificar y concatenar Javascript / CSS
- Usar Bower para manejar las dependencias

Despues de terminar con este sprint se deberá crear un tag en el repositorio llamado "sprint-1". Ej:
```sh
git tag sprint-1 -m 'ej: setup project'
git push --tags #sube los cambios al branch remoto (github)
```

**Si tienen alguna duda por favor, por favor, por favor pregunten.. -.-**

## Frontend - Sprint 2

Migrar el diseño proporcionado en el archivo PSD a HTML y CSS responsivos. No esta permitido el uso de frameworks de front-end como Bootstrap o Zurb Foundation. Complementos como [compass](http://compass-style.org/), [Bourbon](http://bourbon.io/).

Despues de terminar con este sprint se deberá crear un tag en el repositorio llamado "sprint-2". Ej:
```sh
git tag sprint-2 -m 'ej: PSD to HTML'
git push --tags #sube los cambios al branch remoto (github)
```

El código resultante debe contemplar al menos 3 breakpoints:

- desktop | tablet | mobile

## Frontend - Sprint 3

Configurar un servidor falso con [json-server](https://www.npmjs.com/package/json-server) para simular la interación (solicitud y envío de datos). Pueden bajar el ejemplo de la base de datos usada por json-server del siguiente   [Gist](https://gist.github.com/jgatjens/46137507694d99454c1b).

Las tareas a realizar para este sprint serian:
- Listar libros
- login
- Filtro de búsqueda por título y autor
- Reservar un libro
- Consultar disponibilidad de un libro

Despues de terminar con este sprint se deberá crear un tag en el repositorio llamado "sprint-3". Ej:
```sh
git tag sprint-3 -m 'ej: JS funcionality'
git push --tags #sube los cambios al branch remoto (github)
``` 
