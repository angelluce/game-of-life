# El Juego de la Vida


## Introducción

El Juego de la Vida, es un popular reto de programación y una simulación matemática creada por el matemático británico John Conway en 1970. Aunque se llama "juego", no tiene jugadores ni se basa en reglas competitivas.

Se juega en una cuadrícula bidimensional infinita de células, donde cada celda puede estar viva o muerta. Las células interactúan según un conjunto de reglas simples:

- Si una célula viva tiene menos de dos células vecinas vivas, muere por soledad.
- Si una célula viva tiene más de tres células vecinas vivas, muere de sobrepoblación.
- Si una célula viva tiene dos o tres células vecinas vivas, sobrevive para la siguiente generación.
- Si una célula muerta tiene exactamente tres células vecinas vivas, nace una nueva célula en esa posición.

Estas reglas se aplican en iteraciones para cada celda en la cuadrícula, y con el tiempo, diferentes patrones de células pueden emerger, como planeadores, estables, osciladores y caóticos.


## Justificación

Elejí el JavaScript para este ejercicio debido a que es un lenguaje que me permite una interacción desde la web con facilidad y es lo que pretendía hacer; además de implementarlo dentro de la nube.


## Estructura

El proyecto tiene un arquitectura muy simple, consta de dos archivos:
- **index.js**: parte lógica del ejercicio
- **index.html**: interfaz gráfica


## Ejecución

Abrir el archivo **index.html**, o puede revisarlo desde el siguiente enlace: **https://juego-vida.web.app/**
