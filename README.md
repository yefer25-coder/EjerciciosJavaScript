# 🧑‍💻 Interfaz Interactiva – Formulario con Almacenamiento

Este proyecto es una página web sencilla que permite al usuario registrar su nombre y edad, guardar esos datos en el navegador mediante `localStorage` y contar cuántas veces se ha interactuado con el formulario durante la sesión actual usando `sessionStorage`.

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Almacenamiento Web: `localStorage` y `sessionStorage`

## 🎯 Funcionalidades

- ✅ Captura de nombre y edad mediante formulario.
- ✅ Validación de campos (nombre no vacío, edad numérica).
- ✅ Almacenamiento de usuarios en `localStorage`.
- ✅ Visualización en pantalla de los datos almacenados.
- ✅ Botón para limpiar todos los datos guardados.
- ✅ Contador de interacciones en la sesión actual con `sessionStorage`.

## 🧠 Estructura del proyecto

📁 proyecto/
|
├── index.html
|
├── style.css
|
└── script.js



## 📦 Cómo ejecutar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Rellena el formulario y presiona "Guardar Datos".
4. Observa cómo los datos se muestran en pantalla y cómo el contador incrementa con cada acción.

## 📌 Ejemplo de uso

- Introduces tu nombre y edad.
- Presionas "Guardar Datos".
- Se guarda y muestra: `1. Hola Juan tienes 25 años.`
- El contador se incrementa: `1`
- Si recargas, los datos permanecen (gracias al `localStorage`).
- Si cierras y vuelves a abrir el navegador, el contador vuelve a 0 (`sessionStorage` se reinicia).

## 🧹 Limpieza de datos

Al hacer clic en el botón **"Limpiar Datos"**:
- Se eliminan los usuarios guardados del `localStorage`.
- Se actualiza la pantalla mostrando "No hay información almacenada."
- Si no hay informacion almacenada y das clic en `Limpiar datos` saldra una alerta con su respectivo mensaje.
- El contador **sigue aumentando** porque pertenece a la sesión.

## 📘 Lo aprendido

- Manipulación del DOM.
- Validación de formularios.
- Uso de `addEventListener`.
- Uso de estructuras de datos simples (`array` de objetos).
- Persistencia de datos en navegador.
- Diferencias entre `localStorage` y `sessionStorage`.
