/*import { valida } from "./validaciones.js";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
*/

const textoTotalApagar = "el total a pagar es: ${}";
const precioTicket = 200;
const form = document.getElementById("ticketsForm");
const inputsElement = form.getElementsByClassName("input__form");

const btn_resumen = document.getElementById("btn_resumen");
const btn_borrar = document.getElementById("btn_borrar");
const totalAPagar = document.getElementById("output__totalAPagar");

let priceDiscount = null;
let cantidadDeTickets = null;
let datos = [];

totalAPagar.innerText = textoTotalApagar;

const setCategoty = () => {
  let option = form.category.value;
  console.log(option);
  console.log(form.quantityTickets.value);
};

const calcularPrecioFinal = () => {
  let priceValueNet = 200 * priceDiscount;
  let totalPrice = priceValueNet * cantidadDeTickets;
};

const tomarDatosForm = (e) => {
  e.preventDefault();

  for (let input of inputsElement) input.value = "";
};

const borrarDatosForm = (e) => {
  e.preventDefault();

  for (let input of inputsElement) input.value = "";
};

form.category.addEventListener("change", setCategoty);

btn_resumen.addEventListener("click", tomarDatosForm);
