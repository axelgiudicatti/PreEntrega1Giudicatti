/*                                            VARIABLES Y FUNCIONES NECESARIAS */
const precioipa = 300;
const precioirishostout = 275;
const preciogolden = 250;
let cantipa = 0;
let cantirish = 0;
let cantstout = 0;
let cantgolden = 0;
let subtotgolden = 0;
let subtotipa = 0;
let subtotirish = 0;
let subtotstout = 0;
let total = 0;
let pagar;
let user;
let cantidad;
let estilo;
let formadepago;
let age

function cantidades(estilo, cantidad) {
  switch (estilo) {
    case 1:
      cantipa += cantidad;
      subtotipa = cantipa * precioipa;
      break;
    case 2:
      cantirish += cantidad;
      subtotirish = cantirish * precioirishostout;
      break;
    case 3:
      cantgolden += cantidad;
      subtotgolden = cantgolden * preciogolden;
      break;
    case 4:
      cantstout += cantidad;
      subtotstout = cantstout * precioirishostout;
      break;
  }
  total = subtotgolden + subtotipa + subtotirish + subtotstout;
  alert(
    "Tu carrito es el siguiente \n" +
      cantipa +
      " latas de IPA.       Subt. $ " +
      subtotipa +
      "\n" +
      cantirish +
      " latas de Irish.       Subt. $ " +
      subtotirish +
      "\n" +
      cantgolden +
      " latas de Golden.       Subt. $ " +
      subtotgolden +
      "\n" +
      cantstout +
      " latas de Oatmeal Stout.       Subt. $ " +
      subtotstout +
      "\n" +
      "El numero total de latas es de " +
      (cantgolden + cantipa + cantirish + cantstout) +
      " por un total de $ " +
      total
  );
}

function pago(formadepago) {
  switch (formadepago) {
    case 1:
      alert(
        "Transferir $" +
          total * 0.85 +
          " y enviar comprobante a axel.giudicatti@gmail.com\nalias:axelgiudicatti"
      );
      break;
    case 2:
      alert(
        "Podes abonar en un pago o en 6 cuotas sin interes de $ " +
          total / 6 +
          ".\nLink a plataforma de pago."
      );
      break;
    case 3:
      alert("link de pago a mercadopago");
      break;
  }
}

/*                                                 ALGORITMO INTERACTIVO-SHOP VIRTUAL DE LATAS DE CERVEZA ARTESANAL. */
function compra() {
  user = prompt("Bienvenido a Punta y Hacha Brewing. Indicanos tu nombre");
  do {
    do {
      estilo = parseInt(
        prompt(
          "Hola " +
            user +
            ". Indicanos que lataestilo buscas. \n 1-IPA ($300) 2-Irish Red ($275) Ale 3-Golden Ale ($250) 4-Oatmeal Stout ($275)"
        )
      );
    } while (isNaN(estilo) || estilo > 4 || estilo < 1);

    do {
      cantidad = parseInt(
        prompt(user + ", indicanos ahora la cantidad de latas que queres")
      );
    } while (isNaN(cantidad));
    cantidades(estilo, cantidad);
    do {
      pagar = parseInt(
        prompt(
          user +
            ", deseas agregar algo más latas a tu carrito o continuar al pago ? \n 1-Agregar más latas\n 2-Pagar"
        )
      );
    } while (isNaN(pagar) || pagar > 2 || pagar < 1);
  } while (pagar == 1);
  do {
    formadepago = parseInt(
      prompt(
        user +
          ", el total de tu compra es $ " +
          total +
          ". Indicanos tu forma de pago:\n 1-Transferencia Bancaria (15% off) \n 2-Tarjeta de credito (6 cuotas sin interes)\n 3-MercadoPago"
      )
    );
  } while (isNaN(formadepago) || formadepago > 3 || formadepago < 1);
  pago(formadepago);
}

/*                                                  +18CHECK AND       FUNCTION RUNNER */
do {
age = parseInt (prompt ("Ingrese su edad"));} while (isNaN(age));
if (age>=18) {
  compra ();
}
else alert ("Prohibida la venta de bebidas alcoholicas a menores de 18 años")
