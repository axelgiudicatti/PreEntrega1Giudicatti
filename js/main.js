/* CALCULADORA LOCA*/
/*
let c = prompt(
  "ingrese el tipo de operacion +, -, / o X. Escriba esc para salir"
);
do {
  let a = parseFloat(prompt("ingrese el primer numero a operar"));
  let b = parseFloat(prompt("ingrese el segundo numero a operar"));
  switch (c) {
    case "+":
      alert("la suma da " + parseFloat(a + b));
      break;
    case "-":
      alert("la resta da " + parseFloat(a - b));
      break;
    case "/":
      alert(
        "la division da " +
          parseInt(a / b) +
          " y el resto del cociente es " +
          (a % b)
      );
      break;
    case "X":
      alert("la multiplicacion da " + parseFloat(a * b));
      break;
  }
  c = prompt(
    "ingrese el tipo de operacion +, -, / o X. Escriba esc para salir"
  );
} while (c != "esc");
*/

const precioipa = 300;
const precioirishostout = 275;
const preciogolden = 250;
var cantipa = 0;
var cantirish = 0;
var cantstout = 0;
var cantgolden = 0;
var pagar;
function cantidades(
  estilo,
  cantipa,
  cantirish,
  cantstout,
  cantgolden,
  cantidad
) {
  switch (estilo) {
    case 1:
      cantipa += cantidad;
      break;
    case 2:
      cantirish += cantidad;
      break;
    case 3:
      cantgolden += cantidad;
      break;
    case 4:
      cantstout += cantidad;
      break;
  }
  alert(
    "Tu carrito es el siguiente \n" +
      cantipa +
      " latas de IPA\n" +
      cantirish +
      " latas de Irish\n" +
      cantgolden +
      " latas de Golden\n" +
      cantstout +
      " latas de Oatmeal Stout\n"
  );
}

let user = prompt("Bienvenido a Punta y Hacha Brewing. Indicanos tu nombre");
do {
  let estilo = parseInt(
    prompt(
      "Hola " +
        user +
        ". Indicanos que lataestilo buscas. \n 1-IPA ($300) 2-Irish Red ($275) Ale 3-Golden Ale ($250) 4-Oatmeal Stout ($275)"
    )
  );

  let cantidad = parseInt(
    prompt(user + ", indicanos ahora la cantidad de latas que queres")
  );
  cantidades(estilo, cantipa, cantirish, cantstout, cantgolden, cantidad);
  pagar = parseInt(
    prompt(
      user +
        ", deseas agregar algo más latas a tu carrito o continuar al pago ? \n 1-Agregar más latas 2-Pagar"
    )
  );
} while (pagar == 1);
