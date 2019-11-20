# Express Workshop

Este proyecto contiene la base sobre la cual se construirá la API de un blog
que veremos durante este workshop.

Para lograr la misma estructura de archivos que tenemos en este momento,
ejecutamos el siguiente comando:

```bash
$ npx express-generator --no-view express-workshop
```

Luego, ingresamos a la carpeta que se creará e instalaremos las dependencias
que vienen agregadas por defecto:

```bash
$ cd express-workshop
$ npm install # o `yarn`
```

Por último, iniciaremos el servidor ejecutando:

```bash
$ DEBUG=express-workshop:* npm start # `yarn start`
```
