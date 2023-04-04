# ChatGPT Clone Javascript

Proyecto basado en el tutorial de Ania Kubów.

**Referencia:** [Build ChatGPT in JavaScript (Super simple!!) | JavaScript, HTML, CSS](https://www.youtube.com/watch?v=05ssqx-SZT0&t=1513s)


---

# Precisiones

Mi **API_KEY** de ChatGPT expiró, por lo que no se puede ejecutar este proyecto con esa API_KEY a menos que pague un plan.

En su lugar, creé un **dataFake.json** que emula la respuesta de ChatGPT cuando se le hace una petición. Esto funciona muy bien como un demo.

En caso de querer usar este proyecto conectado a la API de ChatGPT, solo es necesario reemplazar la línea 1 con el API_KEY correcto y reemplazar las líneas 34 y 35 por las líneas 31 y 32 del archivo **app.js**.

Es importante saber, que este proyecto debe ser ejecutado con un servidor. El **LiveServer** plugin de Visual Studio Code funciona correctamente. Esta anotación es para tener en cuenta que el **fetch** devuelve un error si se visualiza el proyecto directamente como archivo **html**.