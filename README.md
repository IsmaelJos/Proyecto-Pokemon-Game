# Iniciando Proyecto Pokemon Game

## 1. Crea y configura tu repositorio de Github para la aplicación.

<img src=./images/1.png width="500">

## 2. Crea un proyecto en VueJS.

<img src=./images/2.png width="500">

### ¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?

_Vue Router:_ manejo de rutas

_Pinia:_ facilita acceso al el estado

_Vitest:_ herramienta para crear y hacer test

_ESLint:_ arreglar problemas en codigo javascript y jsx

_Prettier:_ formateador de codigo

### Ejecutamos los comandos y comprobamos funciona correctamente. 

<img src=./images/3.png width="500">

### ¿Qué es Composition API y en qué se diferencia de Option API en VueJS?

__Composition API__ te permite importar funciones en vez de declarar opciones (como hace __Option API__) y es una caracteristica de VUE desde la version 2.7, antes se solia usar __Option API__

### ¿Qué es screaming architecture y qué ventajas tiene?

__screaming architecture__ es una exprecion para referirse a como deverias de saber cual es el proposito y la funcionalidad de la arquitectura del proyecto con solo verlo, esto hace que se tenga una idea clara de lo que se quiere conseguir con este

## Vamos a modificar y borrar todo lo que no necesitamos que nos ha creado de forma automática VueJS

### Recuerda que vamos a utilizar TS en lugar de JS,  ¿cómo se lo indicamos a Vue?

Añadiendo setup lang="ts"

## Para realizar nuestra aplicación en lugar del framework de CSS Bootstrap, vamos a usar Tailwind CSS

### Configura el proyecto para hacer uso de Tailwind CSS.

<img src=./images/5.png width="500">

### Ejecuta el comando npm run dev y muestra el resultado.

<img src=./images/4.png width="200">


# Estructura de la aplicación

## borramos la carpeta de components, dentro de src crea una carpeta modules y dentro de esta una llamada pokemon

<img src=./images/6.png width="200">

### ¿qué es un composable en VueJS y cual es la nomenclatura común que se utiliza en los ficheros que contiene?

una nueva característica de Vue 3 que permiten a los desarrolladores escribir código de manera más clara y concisa

### Creamos una nueva carpeta llamada composables, components y views.

<img src=./images/7.png width="200">

## Dentro de la carpeta de views, vamos a crear el archivo PokemonGame.vue, ¿cuál crees que será la lógica que irá dentro de este archivo?



### ¿Conoces algún atajo para generar archivo con estructura Typescript y Composition API de forma automática?

Vue-Snipets

<img src=./images/8.png width="700">

## Usando la etiqueta "section" de HTML, vamos a dividir nuestro template. 

### Añadimos Una sección que tenga un mensaje que indique al usuario que: Espere por favor y Cargando Pokémons.

<img src=./images/9.png width="700">

### ¿Para qué sirven las clases que hemos añadido?

Son estilos definidos de tailwind para cambiar la apariencia del elemento

### Algo se te olvida... ¿qué es? Indica los archivos que has tenido que modificar.

Se ha tenido que añadir un import al App.vue para que PokemonGame se muestre

<img src=./images/10.png width="400">

### Si todo ha ido bien, tu aplicación tendría que verse tal que así: 

<img src=./images/11.png width="500">

### Utilizando una directiva de VueJS, ¿cómo ocultaríamos esta sección por completo?

v-show="false"

## Ahora, vamos a crear otra nueva sección igual a la anterior pero que muestre al usuario el mensaje: ¿Cuál es este Pokémon?

<img src=./images/12.png width="600">


# Creando el esqueleto

## PokemonPicture.vue

### La misma forma que en PokemonGame.vue que contendrá una imagen del pokemon Ditto (copia y pega la url de la imagen y muéstrala)

<img src=./images/14.png width="400">

### Queremos que esté completamente oculta utilizando una clase de "brightness-0" y un tamaño concreto con h-[200px]

<img src=./images/13.png width="400">

### vamos a "simular" lo que serían las opciones de los Pokémon mediante una lista HTML

<img src=./images/16.png width="400">

### El color de fondo de nuestra aplicación es: #f1f1f1, para aplicarlo, ¿dónde debes colocar el código css correspondiente?

<img src=./images/15.png width="400">





