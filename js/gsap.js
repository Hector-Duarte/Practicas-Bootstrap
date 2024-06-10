// Obtiene el cuadrado
const cuadrado = document.getElementById("cuadrado");

// Obtiene el texto original
const textoOriginal = "ckhjbgIKQWJH BDYHI B IBU 2WIUDGQB IUHB D BI UQBD IUBQ UIB ILUAB DAIUBIA UBUI BIudgaqbIYGADFBI GYBiu y byuib iyhqgb " ;

// Divide el texto en un array de letras
const letras = textoOriginal.split("");

// Crea un intervalo para mostrar las letras una por una
let index = 0;
const intervalo = setInterval(function() {
  if (index < letras.length) {
    cuadrado.textContent += letras[index]; // Añade una letra al cuadrado
    index++;
  } else {
    clearInterval(intervalo); // Detiene el intervalo cuando se han mostrado todas las letras
  }
}, 300); // Intervalo de 100 milisegundos entre cada letra