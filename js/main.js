/*                                          VARIABLES Y FUNCIONES NECESARIAS. OBJETOS, CONSTRUCTORES, CLASES, METODOS. ARRAYS DE OBJETOS */
const precioipa = 300;
const precioirishostout = 275;
const preciogolden = 250;
let stockipa = 100;
let stockirish = 100;
let stockstout = 100;
let stockgolden = 100;
let total = 0;
let pagar = 1;
let user;
let cantidad;
let estilo;
let formadepago;
let age
let direccion
let postal
let ciudad
let provincia
let envio =[]
let entrega
let sucursal

class Cerveza {
  constructor (estilo, precio, cantidad, stock) {
    this.estilo = estilo; 
    this.precio = parseFloat (precio);
    this.cantidad = parseFloat(cantidad);
    this.subtotal = this.precio * this.cantidad;
    this.stock = stock;
  }
  agregaritem (cantidadaagregar) {
    this.cantidad = this.cantidad + cantidadaagregar;
    this.subtotal = this.precio * this.cantidad;
    this.stock = this.stock - cantidadaagregar;
  }
  eliminaritem (cantidadaeliminar) {
    this.cantidad = this.cantidad - cantidadaeliminar;
    this.subtotal = this.precio * this.cantidad;
    this.stock = this.stock + cantidadaeliminar
  }
}
const IPACART = new Cerveza ("IPA", precioipa, 0, stockipa);
const IRISHCART = new Cerveza ("IRISH", precioirishostout, 0, stockirish);
const STOUTCART = new Cerveza ("STOUT", precioirishostout, 0, stockstout);
const GOLDENCART = new Cerveza ("GOLDEN", preciogolden, 0, stockgolden);

carrito = [IPACART, IRISHCART, GOLDENCART, STOUTCART];

beerdiaco = [ {Signo: "ARIES", Cerveza : "IPA"},
{Signo: "TAURO", Cerveza : "IRISH"},
{Signo: "GEMINIS", Cerveza : "IRISH"},
{Signo: "CANCER", Cerveza : "STOUT"},
{Signo: "LEO", Cerveza : "IPA"},
{Signo: "VIRGO", Cerveza : "GOLDEN"},
{Signo: "LIBRA", Cerveza : "GOLDEN"},
{Signo: "ESCORPIO", Cerveza : "IRISH"},
{Signo: "SAGITARIO", Cerveza : "GOLDEN"},
{Signo: "CAPRICORNIO", Cerveza : "STOUT"},
{Signo: "ACUARIO", Cerveza : "IPA"},
{Signo: "PISCIS", Cerveza : "STOUT"},
]

sucursales = [ {Localidad: "ESPERANZA", Direccion: "Aufranc 2043", Horario: "9 a 19"},
{Localidad: "SANTA FE", Direccion: "Bv. Pellegrini 2495", Horario: "10 a 21"},
{Localidad: "CABA", Direccion: "Viamonte 2358", Horario: "9 a 21"},
{Localidad: "MENDOZA", Direccion: "25 de Mayo 3561", Horario: "10 a 18"},
{Localidad: "EL CHALTEN", Direccion: "Monte Fitz Roy", Horario: "8 a 20"},
{Localidad: "USHUAIA", Direccion: "San martin 2165", Horario: "9 a 17"},
{Localidad: "ROSARIO", Direccion: "Bv orono 1354", Horario: "9 a 19"},
{Localidad: "VILLA GENERAL BELGRANO", Direccion: "San Martin 458", Horario: "9 a 19"},
{Localidad: "BARILOCHE", Direccion: "1 de mayo 257", Horario: "9 a 17"}
]


function modificarcarrito(estilo, cantidad) {
  if (pagar == 1) {
    carrito[estilo-1].agregaritem(cantidad);}
  else {
    carrito[estilo-1].eliminaritem(cantidad)}
  total = IPACART.subtotal + IRISHCART.subtotal + GOLDENCART.subtotal + STOUTCART.subtotal;
  cantidadtotal = IPACART.cantidad + IRISHCART.cantidad + STOUTCART.cantidad + GOLDENCART.cantidad;
  
  alert(
    "Tu carrito es el siguiente \n" +
    IPACART.cantidad +
      " latas de IPA.       Subt. $ " +
      IPACART.subtotal +
      "\n" +
      IRISHCART.cantidad +
      " latas de Irish.       Subt. $ " +
      IRISHCART.subtotal +
      "\n" +
      GOLDENCART.cantidad +
      " latas de Golden.       Subt. $ " +
      GOLDENCART.subtotal +
      "\n" +
      STOUTCART.cantidad +
      " latas de Oatmeal Stout.       Subt. $ " +
      STOUTCART.subtotal +
      "\n" +
      "El numero total de latas es de " +
      (cantidadtotal) +
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
      )
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
function enviar () {
  direccion = prompt (user + ", indicanos la direccion donde queres recibir tu pedido.");
  ciudad = prompt (user+ ", indicanos la ciudad");
  provincia = prompt (user + ", indicanos la provincia");
  postal = prompt (user + ", indicanos el codigo postal")
  envio.push(direccion, ciudad, provincia, postal);
  alert (user + ", enviaremos tu pedido a " + envio.join(", "))
}

function entregar () {
  do {
  entrega = parseInt(prompt (user + ", Como queres recibir tu producto? \n1-Retiro en sucursal. \n2-Envio a domicilio"))
  } while (isNaN(entrega) || entrega < 1 || entrega > 2)
  if (entrega == 1) {
    sucursal = (prompt (user + ", indicanos la ciudad donde queres retirar tus latas")).toUpperCase();
    if ((sucursales.some ((unasuc) => unasuc.Localidad == sucursal))==true) {
      alert ("Podes retirar tus latas en la sucursal " + sucursal + ". Ubicada en " + (sucursales.find (unasuc => unasuc.Localidad == sucursal)).Direccion + " en el horario de " + (sucursales.find (unasuc => unasuc.Localidad == sucursal)).Horario + " hs." )
    }
    else {
      alert ("No tenemos sucursales en esa localidad. Pero tranqui, te la mandamos a domicilio ;).\nIndicanos tu domicilio");
      enviar ()
    }
  }
  else {
    enviar ()
  }
}

/*                              ALGORITMO INTERACTIVO-SHOP VIRTUAL DE LATAS DE CERVEZA ARTESANAL CON SELECTOR DE ENVIO A DOMICILIO/RETIRO EN SUCURSAL. */
/*                                         TAMBIEN TIENE UN PREDICTOR DE CERVEZA SEGUN TU HOROSCOPO, JA ! NO TE LA ESPERABAS, EH !                      */



function compra() {
  user = prompt("Bienvenido a Punta y Hacha Brewing. Indicanos tu nombre");
  do {
  signo = prompt("Tu estilo de birra segun tu signo. " + user +" Indicanos tu signo zodiacal").toUpperCase();
} while ((beerdiaco.some ((el) => el.Signo == signo)) == false )
  alert ("Tu cerveza es " + (beerdiaco.find (element => element.Signo === signo)).Cerveza);
  do {
    do {
      estilo = parseInt(
        prompt(
          "Hola " +
            user +
            ". Indicanos que lataestilo buscas modificar. \n 1-IPA ($300) 2-Irish Red ($275) Ale 3-Golden Ale ($250) 4-Oatmeal Stout ($275)"
        )
      );
    } while (isNaN(estilo) || estilo > 4 || estilo < 1);

    do {
      cantidad = parseInt(
        prompt(user + ", indicanos ahora la cantidad de latas que queres agregar o eliminar.\nStock disponible " + carrito[estilo-1].stock +".\nEn tu carrito " + carrito[estilo-1].cantidad +".")
      );
    } while (isNaN(cantidad) || pagar == 1 && cantidad > carrito[estilo-1].stock || pagar==2 && carrito[estilo-1].cantidad<cantidad);
    modificarcarrito(estilo, cantidad);
    do {
      pagar = parseInt(
        prompt(
          user +
            ", deseas modificar tu carrito o continuar al pago ? \n 1-Agregar más latas\n 2-Eliminar\n 3-Pagar"
        )
      );
    } while (isNaN(pagar) || pagar > 3 || pagar < 1);
  } while (pagar == 1 || pagar == 2);
  

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
  entregar()
}



/*                                                  +18CHECK AND       FUNCTION RUNNER */
do {
age = parseInt (prompt ("Ingrese su edad"));} while (isNaN(age));
if (age>=18) {
  compra ();
}
else alert ("Prohibida la venta de bebidas alcoholicas a menores de 18 años")
