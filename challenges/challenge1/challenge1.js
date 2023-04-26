
// Función para encriptar el mensaje y mostrar el resultado en la página
function encriptar() {
  let mensaje = document.getElementById("mensaje").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let mensajeCifrado = cifradoCesar(mensaje, desplazamiento);
  document.getElementById("resultado").textContent = mensajeCifrado;
}

// Función para encriptar un mensaje usando el cifrado de César
function cifradoCesar(mensaje, desplazamiento) {
  // Convertir el mensaje a mayúsculas para facilitar el cifrado
  mensaje = mensaje.toUpperCase();

  // Variable para almacenar el mensaje cifrado
  let mensajeCifrado = "";

  // Iterar sobre cada carácter del mensaje
  for (let i = 0; i < mensaje.length; i++) {
    // Obtener el código ASCII del carácter actual
    let codigoAscii = mensaje.charCodeAt(i);

    // Verificar si el carácter actual es una letra
    if (codigoAscii >= 65 && codigoAscii <= 90) {
      // Aplicar el desplazamiento al código ASCII de la letra actual
      codigoAscii = ((codigoAscii - 65 + desplazamiento) % 26) + 65;
    }

    // Agregar el carácter cifrado al mensaje cifrado
    mensajeCifrado += String.fromCharCode(codigoAscii);
  }

  // Devolver el mensaje cifrado
  return mensajeCifrado;
}