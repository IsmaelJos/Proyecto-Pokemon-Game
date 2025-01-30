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

<img src=./images/16.png width="300">

### El color de fondo de nuestra aplicación es: #f1f1f1, para aplicarlo, ¿dónde debes colocar el código css correspondiente?

<img src=./images/15.png width="400">


# Conectando la API usando Axios

### Dentro de la carpeta de assets, copia y pega el código de animations.css

<img src=./images/17.png width="200">

#### Nuestro juego va a tener 3 estados: gana, pierde y jugando. Estos estados los vamos a almacenar en una propiedad reactiva. Para ello, dentro de la carpeta pokemon vamos a crear una nueva llamada interfaces, y en él crearemos un archivo llamado game-status.enum.ts.

<img src=./images/18.png width="200">

#### Crearemos un nuevo archivo llamado index.ts que será nuestro archivo de barril. ¿A qué nos referimos con este término en programación y cuáles son sus ventajas? 

Un archivo de barril es donde se exportan varios modulos para asi solo tener que hacer un export si quieres usarlos

## Ahora, vamos a conectarnos con nuestra PokeApi mediante Axios

#### ¿Qué es Axios? ¿Lo has usado antes?

Es una libreria para hacer llamadas HTTP que puedes usar facilmente con node, lo hemos usado ya con anterioridad

#### Dentro de la carpeta de pokemon crea una nueva llamada api y crea un archivo pokemonApi.ts, dentro del archivo que acabamos de crear, usa axios para realizar la conexión con PokeApi

<img src=./images/19.png width="700">

<img src=./images/20.png width="700">

### Los datos que hemos obtenido no son técnicamente los que nos interesan, ya que solo necesitamos el id y el nombre de los Pokemon. Por tanto, lo que vamos a hacer es crear un tipado estricto

#### Abre Postman, Realiza una petición a PokeApi 

<img src=./images/21.png width="600">

#### Vuelve a Visual Studio y dentro de la carpeta de interfaces crea un archivo llamado pokemon-list.response.ts, usa la extensión de Paste JSON as Code y ponle a nivel superior: PokemonListResponse  y dale a enter.

<img src=./images/22.png width="600">

#### Ahora en response.data vamos a tener toda la información de la petición

<img src=./images/24.png width="500">

<img src=./images/23.png width="800">

# Modificando método getPokemons()

## Vamos a modificar el método getPokemons que hemos creado en el archivo usePokemonGame.ts para quedarnos solo con el nombre y el id 

#### Para ello vamos a crear un nuevo archivo dentro de la carpeta interfaces que se va a llamar pokemon.interface.ts

<img src=./images/25.png width="300">

### Modificamos el método getPokemons

<img src=./images/26.png width="600">

#### ¿Qué es lo que estamos haciendo?

Devolviendo el nombre y la id de los pokemon hasta el limite elegido

#### ¿Para qué sirve la línea de código: const id = urlParts[urlParts.length - 2] ?? 0;?

Hace que ID sea igual a la antepenultima parte de la URL (dividida por cada / ) la cual hace referencia a la id del pokemon, el ?? hace que si es null le aplica un 0

### Ahora vamos a llamar a nuestro método modificando el onMounted()

<img src=./images/27.png width="400">

<img src=./images/30.png width="600">


### El resultado ahora nos muestra una lista de los 151 pokemons ordenados según su id. Nosotros NO queremos que estén ordenados ¿se te ocurre cómo hacerlo?

<img src=./images/28.png width="600">

<img src=./images/29.png width="600">

# Final

### Para continuar, lo que debemos hacer es poder determinar varias propiedades computadas que vamos a necesitas

#### ¿Qué es una propiedad computada?

Una propiedad que antes de devolverse se ejecuta algun tipo de transformacion o hacen algun calculo asi que pueden ser diferentes en distintos momentos

#### En usePokemonGame.ts crea una nueva propiedad computada llamada isLoading

<img src=./images/31.png width="600">

### Lo que estamos haciendo aquí es determinar si el array de Pokemon está o no vacío, de tal forma que podamos mostrar o no cierta información en base a ello

#### Mostrar en PokemonGame.vue el mensaje de "Espere por favor" y "Cargando Pokemons"

<img src=./images/32.png width="600">

#### Añade una promesa en onMounted() del archivo usePokemonGame usando la función setTimeout para que al cargar la respuesta, tarde 1000 milésimas de segundo

<img src=./images/33.png width="500">

#### Una vez compruebes que funciona correctamente, puedes borrarlo, ya que no nos va a hacer falta

### Ahora vamos a crear otra propiedad reactiva a la que vamos a llamar pokemonOptions:

<img src=./images/34.png width="400">

### Estos pokemonOption van a ser las opciones de los Pokemons que vamos a mostrar, y por tanto, tenemos que crear una nueva función para manejarlas

<img src=./images/35.png width="600">

#### ¿Cómo funciona este fragmento de código? Muestra por consola pokemonOptions.value para comprobar que efectivamente nos está devolviendo 4 pokemons como propiedades reactivas.

