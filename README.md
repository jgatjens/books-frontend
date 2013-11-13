Book's App 
=========

Book es una aplicación HTML5 que nos permetiria:

  - obtener bases solidas de Javascript
  - pasar psds a html y css
  - trabajar con flujos reales
  - usar la metodologia agile para el proceso de desarrollo
  - optimización del proceso de desarrollo, calidad y producion (gruntjs)

Book va hacer una pequeña aplicacion que listara todos los libros de tecnologia que esten en papel. Una vez un usuario este logeado podra saber quien esta leyendo algun libro de interes o podra reservar un libro para leerlo.  

Version
----

1.0

Tech
-----------

Estas son las tecnologias que usaremos:

* [Gruntjs] - organizador de tareas 
* [Bower]   - manejador de dependencias frontend 
* [Sass]    - pre compilador de css
* [jQuery]  - duh 

[Tech doc link](https://drive.google.com/file/d/0B08r1h3RbqoEUjhZUzk5QWVscW8/edit?usp=sharing) 

Instalación del frontend
--------------


Necesitas tener instalado grunt-cli -g 
```sh
npm install -g grunt-cli 
```
si te da un error intenta con super usuario

```sh
sudo npm install -g grunt-cli 
```
haber o tener instalado compass 
```sh
gem install compass
```
clonar el repo 
```sh
git clone [git-repo-url] 
```
(si no tenemos instalado bower) lo instalamos global para futuros proyectos
```sh
npm install -g bower 
```
instalar dependencias del frontend
```sh
bower install  
```
instalar dependencias de nodejs
```sh
npm install
```
Correr app
```sh
grunt server
```

## Frontend - Sprint 1 ( viernes 01 de octubre ) 
- crear repositorio para el frontend en su cuenta de github
- instalar nodejs
- usar estructura de archivos igual a la de boilerplate
- crear archivo de configuracion de gruntjs que permita:
 - correr sass
 - livereload
 - preview server
- *instalar bower (si van a utilizar jquery)
 - incluir la ultima version de jquery
 - cambiar el nombre del directorio donde bower baja las depencias por "vendor"
- Instalar mongodb

## Frontend - Sprint 2 ( viernes 08 de Noviembre ) 
Antes de empezar con los demas objetivos deberan crear un tag en el repositorio llamado "sprint-1" ej:
```sh
git tag sprint-1 -m 'comment'
git push --tags #sube los cambios al branch remoto (github)    
```
Esto con el fin de poder devolverse al codigo con facilidad para hacer code reviews

En este segundo sprint vamos a investigar como crear browser tests contra el backend (restful). El framework a usar es libre. EJ: mocha, jasmine, qunit, etc.

Lo que se espera para este sprint es que investiguen acerca de los frameworks para testear javascript y una vez hayan elegido uno hagan un minimo de 5 ejemplos. Estos pueden ser contra el backend o cualquier codigo que ustedes quieran testear. Si el framework que escogen esta como componente de bower, deberan incluirlo como parte de las dependencias de desarrollo del projecto.

#### Tareas 
- crear git tag.
- crear una tarea de grunt para correr los test.
- crear minimo 5 ejemplos con el framework escogido.


## Frontend - Sprint 3 ( viernes 22 de Noviembre ) 

Suponiendo que hayan jugado con algun framework de testing antes de empezar con este sprint deberan crear un tag en el repositorio llamado "sprint-2" ej:
```sh
git tag sprint-2 -m 'ej: Chito pit comment: play with any testing framework (1) qunit'
git push --tags #sube los cambios al branch remoto (github)    
```

En este tercer sprint vamos a jugar con el backend. Para hacer el setup del proyecto de **backend** pueden serguir el siguiente link [jgatjens/book-backend](https://github.com/jgatjens/books-backend) . Vamos a crear los tests para probar las llamadas a los servicios del restful (routes).

#### Por ejemplo:
Para testear el GET /api/books 

vamos hacer un request a **http://localhost:port/api/books** y chequear que la respuesta 
sea un **JSON**, un status **200** y ademas contenga mas de un resultado.


### Routes

GET /api/books

GET '/api/books/:id'

POST '/api/books'

PUT '/api/books/:id'

PUT  '/api/books/:book/:user'

DELETE '/api/books/:book/:user'

DELETE '/api/books/:id'

Si tienen alguna pregunta de cualquier indole por favor hacerla.. nos ayuda a todos que tengan dudas y consultas que hacer. La idea de estos sprint es evacuar todas las dudas posibles y asi en un futuro tener soluciones rapidas asi que no se guarden ninguna preguntada o comentario valido. 


