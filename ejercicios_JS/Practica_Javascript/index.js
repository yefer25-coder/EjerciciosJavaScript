/* 1.Declarar variables que representen tu nombre, edad, estatura en metros, ciudad y
si tienes mascota(si/no).*/

let nombre = "yeferson";
let edad = 23;
let estatura = "1.72 cm";
let ciudad = "medellin";
let mascota = false

/* 2.Cambia los valores y explica qué tipo de dato representa cada uno (Muestra en
consola el tipo de dato).*/

console.log(typeof nombre); // Tipo de dato `string`
console.log(typeof edad); // Tipo de dato `number`
console.log(typeof estatura); // Tipo de dato `string`
console.log(typeof ciudad); // Tipo de dato `string`
console.log(typeof mascota); // Tipo de dato `boolean`


/* 3. Declara dos variables que se sumen (por ejemplo, cantidad de amigos en dos
redes sociales) y una que contenga el resultado de una concatenación.*/

let numero1 = 50;
let numero2 = 20;

let resultado = numero1 + numero2
console.log(resultado)

let nombre1 = "juan"
let apellido = "garcia"

let concatenacion = nombre1 + " " + apellido




/* 4. Una persona quiere entrar a una discoteca. Solo puede si tiene más de 18 años.
Muestra un mensaje dependiendo si entra o no.*/

let edadMinima = 18;

if (edadMinima >= 18) {
    console.log("Puedes pasar a la discoteca.")
} else {
    console.log("Lo siento, no puedes pasar a la discoteca.")
}


/* 5. Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa
si aplica descuento.*/

let cantidadProductos = 2;

if (cantidadProductos >= 3) {
    console.log("¡Aplicas para un descuento!")
} else {
    console.log("!Si compras mas de 3 productos obtienes un descuento¡")
}


/* 6. Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba,
aprueba o tiene excelente desempeño.*/

let notaEstudiante = 5;

if (notaEstudiante <= 2) {
    console.log("Reprobaste")
}else if (notaEstudiante == 3) {
    console.log("Aprobaste")
} else if (notaEstudiante == 4 || notaEstudiante == 5) {
    console.log("Exelente desempeño")
}



/* 7. Un semáforo tiene tres colores. Dependiendo del color, se debe mostrar una
acción: avanzar, detenerse o esperar.*/

let colorSemaforo = "rojo";

if (colorSemaforo === "verde") {
    console.log("Avanzar")
}else if (colorSemaforo === "amarillo") {
    console.log("Esperar")
}else if (colorSemaforo === "rojo") {
    console.log("Detenerse")
}


/* 8. Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de
Colombia. Evalúa si una persona puede participar.*/

let edadParticipar = 20;
let esResidenteColombia = true;

if (edadParticipar >= 15 && edadParticipar <=35 && esResidenteColombia) {
    console.log("¡Puedes participar en el torneo!")
} else {
    console.log("No puedes participar en el torneo.")
}


/* 9. En una aplicación bancaria:

- Si la cuenta tiene menos de $10.000, muestra “Saldo insuficiente”.
- Si tiene entre $10.000 y $1.000.000, muestra “Saldo moderado”.
- Si tiene más de $1.000.000 o tiene tarjeta premium, muestra “Cliente preferencial”.*/


let cuentaBancaria = 10000;
let tarjetaPremium = true;

if (cuentaBancaria < 10000) {
    console.log("Saldo insuficiente")
} else if (cuentaBancaria >= 10000 || cuentaBancaria <= 1000000) {
    console.log("Saldo moderado")
}else if (cuentaBancaria > 1000000 || tarjetaPremium) {
    console.log("Cliente preferencial")
}


/* 10. Un restaurante ofrece menús dependiendo del día de la semana. Escribe una
lógica que, según el día, muestre qué menú hay disponible.*/

let diaSemana = "lunes";

switch (diaSemana) {
    case "lunes":
        console.log("Lunes de pasta");
        break
    case "martes":
        console.log("Martes de tacos");
        break
    case "miercoles":
        console.log("Miercoles de asado");
        break
    case "jueves":
        console.log("Jueves de hamburguesa");
        break
    case "viernes":
        console.log("Viernes de mariscos");
        break
    case "sabado":
        console.log("Sabado de bandeja paisa");
        break
    case "domingo":
        console.log("Domingo de mariscos");
        break
}


/* 11. Evalúa si un usuario puede acceder a una oferta: 
• Tiene que haber iniciado sesión. 
• No debe tener reportes activos. 
• Su edad debe ser mayor a 21 años o tener membresía premium. */

let inicioSesion = true;
let tieneReportes = false;
let edadUsuario = 21;
let tieneMembresiaPremium = true;


if (inicioSesion && !tieneReportes && (edadUsuario > 21 || tieneMembresiaPremium)) {
    console.log("¡Felicidades! Puedes acceder a una oferta." )
} else {
    console.log("No puedes acceder a una oferta.")
}




/* 12. Una app de transporte da recomendaciones dependiendo de: 
• La hora del día (mañana, tarde, noche) 
• El clima (soleado, lluvioso, nublado) 
• Si el usuario tiene paraguas o no 
Dependiendo de esas variables, sugiere si caminar, tomar bus, o esperar.*/

let horaDelDia = "noche";
let clima = "lluvioso";
let tieneParaguas = true;

switch (horaDelDia) {
    case "mañana":
    case "tarde":
        switch (clima) {
            case "soleado":
            case "nublado":
                recomendacion = "Es un buen momento para caminar.";
                break;
            case "lluvioso":
                if (tieneParaguas) {
                    recomendacion = "Está lloviendo, pero tienes paraguas. Si la distancia es corta, puedes caminar. Si es larga, ¡mejor sube a un bus!";
                } else {
                    recomendacion = "¡Está lloviendo! Es mejor tomar un bus o un taxi para no mojarte.";
                }
                break;
            default:
                break;
        }
        break;

    case "noche":
        switch (clima) {
            case "soleado":
            case "nublado":
                recomendacion = "Es de noche. Por seguridad y comodidad, se recomienda ir en bus o taxi.";
                break;
            case "lluvioso":
                if (tieneParaguas) {
                    recomendacion = "Está lloviendo y es de noche, aunque tienes paraguas. Toma un bus o taxi.";
                } else {
                    recomendacion = "El clima está lluvioso y es de noche sin paraguas. Lo mejor es esperar un taxi o pedir un servicio de transporte.";
                }
                break;
            default:
                break;
        }
        break;

    default:
        break;
}

console.log("Recomendación de transporte:");
console.log(recomendacion);




/* 13. Crea un sistema de acceso a una plataforma que: 
• Verifique si el usuario ingresó usuario y contraseña válidos. 
• Bloquee el acceso si hay más de 3 intentos fallidos. 
• Permita el acceso si es administrador, aunque falle una vez.*/

const contraseñaUsuario = "password123";
const usuario = "yefer123";
const usuarioAdmin = "admin123"

let intentos = 0;

while (intentos < 4) {

    let user = prompt("Ingresa tu usuario")
    let contraseña = prompt("Ingrese su contraseña")

    if (user === usuario && contraseña === contraseñaUsuario) {
        alert("Usuario y contraseña correcto, puede ingresar.")
        intentos = 4;
    } else if(user !== usuario && contraseña !== contraseñaUsuario) {
        ++intentos;
        alert("Usuario o contraseña incorrecto por favor verifique") 
    }

    if (intentos >= 3) {
        alert("Has superado el numero de intentos.")
        break
    }

    if (user === usuarioAdmin && contraseña === contraseñaUsuario) {
        alert("Acceso concedido para administrador")
        intentos = 4;
    }else {
        ++intentos
    }
}




/* 14. Simula el ingreso de 5 nombres de usuarios. Por cada usuario ingresado:
• Verifica si el nombre tiene más de 3 caracteres.
• Si no cumple, muestra un mensaje de error.
• Al final, muestra cuántos usuarios válidos se registraron.*/


let usuariosValidos = 0;
let numeroDeUsuarios = 5;

for (let i = 0; i < numeroDeUsuarios; i++) {
    let nombreUsuario = prompt("Ingresa el nombre del usuario " + (i + 1) + " de " + numeroDeUsuarios + ":");

    if (nombreUsuario !== null && nombreUsuario.length > 3) {
        console.log("El nombre '" + nombreUsuario + "' es válido.");
        usuariosValidos++;
    } else {
        console.log("El nombre '" + nombreUsuario + "' NO es válido o fue cancelado el registro.");
    }
}

console.log("--- Resumen del registro ---");
console.log("Total de usuarios válidos registrados: " + usuariosValidos);





/* 15. Pide que se ingresen contraseñas (simuladas en una lista) y: 
• Valida que cada una tenga al menos 8 caracteres y contenga un número. 
• Si no cumple, muestra que debe cambiarla. 
• Detén el ciclo si se encuentra una contraseña válida.*/


let contraseñaValidaEncontrada = false;

while (!contraseñaValidaEncontrada) {
    let contraseña = prompt("Ingresa una contraseña:");

    let contieneNumero = false;

    if (contraseña !== null) {
        for (let i = 0; i < contraseña.length; i++) {
            let caracter = contraseña[i];
            if (!isNaN(parseInt(caracter))) {
                contieneNumero = true;
                break;
            }
        }
    }

    if (contraseña !== null && contraseña.length >= 8 && contieneNumero) {
        console.log("¡Contraseña válida! Has ingresado: " + contraseña);
        contraseñaValidaEncontrada = true;
    } else {
        console.log("La contraseña NO es válida. Debe tener al menos 8 caracteres y contener un número. Por favor, cambiarla.");
    }
}

console.log("--- Proceso terminado ---");





/* 16. Simula una encuesta donde el sistema pregunta la calificación del servicio (1 a 5). 
• Mientras la calificación no sea 5, sigue preguntando. 
• Muestra un mensaje de agradecimiento cuando por fin alguien califique con 5.*/

let calificacion = 0;

while (calificacion !== 5) {
    let entrada = prompt("Por favor, califica nuestro servicio del 1 al 5 (siendo 5 excelente):");
    calificacion = Number(entrada); 

    if (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
        console.log("Calificación inválida. Por favor, ingresa un número del 1 al 5.");
    } else if (calificacion !== 5) {
        console.log("Gracias por tu calificación de " + calificacion + ". Nos gustaría mejorar.");
    }
}





/* 17. Permite hasta 3 intentos para iniciar sesión. 
• Si el usuario ingresa mal el nombre o contraseña, se le notifica cuántos 
intentos le quedan. 
• Si acierta, muestra “Bienvenido”. 
• Si falla 3 veces, muestra “Cuenta bloqueada”.*/


const usuarioCorrecto = "admin";
const contraseñaCorrecta = "12345";
let intentosRestantes = 3;
let sesionIniciada = false;

while (intentosRestantes > 0 && !sesionIniciada) {
    let usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
    let contrasenaIngresada = prompt("Ingresa tu contraseña:");

    if (usuarioIngresado === null || contrasenaIngresada === null) {
        console.log("Inicio de sesión cancelado.");
        break;
    }

    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contraseñaCorrecta) {
        console.log("¡Bienvenido!");
        sesionIniciada = true;
    } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            console.log("Nombre de usuario o contraseña incorrectos. Te quedan " + intentosRestantes + " intento/s.");
        } else {
            console.log("Nombre de usuario o contraseña incorrectos.");
        }
    }
}

if (!sesionIniciada && intentosRestantes === 0) {
    console.log("Cuenta bloqueada. Has fallado 3 veces.");
}





/* 18. Simula un menú en consola que se repite hasta que el usuario elija "salir". 
• Opciones: Ver perfil, Editar perfil, Cerrar sesión. 
• Cada opción debe mostrar un mensaje, y repetir hasta que seleccione salir. */


let opcionMenu = '';

while (opcionMenu.toLowerCase() !== 'salir') {
    opcionMenu = prompt(
        "Menú de Opciones:\n" +
        "1. Ver perfil\n" +
        "2. Editar perfil\n" +
        "3. Cerrar sesión\n" +
        "Escribe 'salir' para terminar.\n\n" +
        "Elige una opción:"
    );

    if (opcionMenu === null) {
        opcionMenu = 'salir';
        console.log("Menú cerrado.");
        break;
    }

    opcionMenu = opcionMenu.toLowerCase();

    if (opcionMenu === '1' || opcionMenu === 'ver perfil') {
        console.log("Has seleccionado: Ver perfil. Mostrando tu información personal...");
    } else if (opcionMenu === '2' || opcionMenu === 'editar perfil') {
        console.log("Has seleccionado: Editar perfil. Accediendo a la configuración de tu cuenta...");
    } else if (opcionMenu === '3' || opcionMenu === 'cerrar sesión') {
        console.log("Has seleccionado: Cerrar sesión. Tu sesión ha sido cerrada.");
    } else if (opcionMenu === 'salir') {
        console.log("Saliendo del menú. ¡Hasta luego!");
    } else {
        console.log("Opción no válida. Por favor, elige una de las opciones del menú o escribe 'salir'.");
    }
}

console.log("---Programa terminado---");



/* 19. Simula un carrito con productos y precios. 
• El usuario puede “agregar producto” o “finalizar compra”. 
• Cada vez que agrega, suma al total. 
• Al finalizar, muestra el valor total del carrito.*/


let totalCarrito = 0;
let opcion = '';

while (opcion.toLowerCase() !== 'finalizar compra' && opcion.toLowerCase() !== 'salir') {
    opcion = prompt(
        "Carrito de Compras\n" +
        "Total actual: $" + totalCarrito.toFixed(2) + "\n\n" +
        "Opciones:\n" +
        "1. Agregar producto\n" +
        "2. Finalizar compra\n" +
        "Escribe 'salir' en cualquier momento para hacer la compra.\n\n" +
        "Elige una opción:"
    );

    if (opcion === null) {
        opcion = 'salir';
        console.log("Compra abortada. ¡Vuelve pronto!");
        break;
    }

    opcion = opcion.toLowerCase();

    if (opcion === '1' || opcion === 'agregar producto') {
        let nombreProducto = prompt("¿Qué producto quieres agregar?");
        
        if (nombreProducto === null) {
            console.log("Operación cancelada. No se añadió ningún producto.");
            continue;
        }

        let precioProducto = prompt("¿Cuál es el precio de " + nombreProducto + "?");
        let precioNumerico = Number(precioProducto);

        if (isNaN(precioNumerico) || precioNumerico <= 0) {
            console.log("Precio inválido. Por favor, ingresa un número positivo para el precio.");
        } else {
            totalCarrito += precioNumerico;
            console.log("'" + nombreProducto + "' agregado. Nuevo total: $" + totalCarrito.toFixed(2));
        }
    } else if (opcion === '2' || opcion === 'finalizar compra') {
        console.log("Has seleccionado 'Finalizar compra'.");
    } else if (opcion === 'salir') {
        console.log("Compra abortada. ¡Vuelve pronto!");
    } else {
        console.log("Opción no válida. Por favor, elige '1', '2', 'agregar producto', 'finalizar compra' o 'salir'.");
    }
}

if (opcion.toLowerCase() === 'finalizar compra') {
    console.log("--- ¡Compra Finalizada! ---");
    console.log("El valor total de tu carrito es: $" + totalCarrito.toFixed(2));
}





/* 20. Se ingresan las notas de 5 estudiantes. 
- Por cada estudiante, si la nota es menor a 3, se le muestra que está en riesgo. 
- Al final, muestra: 
- Promedio general 
- Número de estudiantes en riesgo 
- Mayor y menor nota */



let sumaNotas = 0;
let estudiantesEnRiesgo = 0;
let notaMasAlta = -1;
let notaMasBaja = 6;

const numeroEstudiantes = 5;

for (let i = 0; i < numeroEstudiantes; i++) {
    let notaValida = false;
    let notaEstudiante;

    while (!notaValida) {
        let entrada = prompt("Ingresa la nota del estudiante " + (i + 1) + " (de 0 a 5):");
        notaEstudiante = Number(entrada);

        if (entrada === null) {
            console.log("Ingreso de notas cancelado. Se considerará 0 para este estudiante.");
            notaEstudiante = 0;
            notaValida = true;
        } else if (isNaN(notaEstudiante) || notaEstudiante < 0 || notaEstudiante > 5) {
            console.log("Nota inválida. Por favor, ingresa un número entre 0 y 5.");
        } else {
            notaValida = true;
        }
    }

    sumaNotas += notaEstudiante;

    if (notaEstudiante < 3) {
        console.log("El estudiante con nota " + notaEstudiante + " está en riesgo.");
        estudiantesEnRiesgo++;
    }

    if (notaEstudiante > notaMasAlta) {
        notaMasAlta = notaEstudiante;
    }
    if (notaEstudiante < notaMasBaja) {
        notaMasBaja = notaEstudiante;
    }
}

let promedioGeneral = sumaNotas / numeroEstudiantes;

console.log("\n--- Resumen de Notas ---");
console.log("Promedio general: " + promedioGeneral.toFixed(2));
console.log("Número de estudiantes en riesgo: " + estudiantesEnRiesgo);
console.log("Mayor nota: " + notaMasAlta);
console.log("Menor nota: " + notaMasBaja);
