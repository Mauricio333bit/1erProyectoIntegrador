import { valida } from "./validaciones.js";
import { insertResume } from "./resumen.js";
const precioTicket = 200;
let finalPrice = null;
let priceDiscount = null;
let quantityTickets = null;
const categories = {
  a: { percent: 80 },
  b: { percent: 50 },
  c: { percent: 15 },
};

const form = document.getElementById("ticketsForm");
const inputsElement = form.querySelectorAll(".input__form");
inputsElement.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
const btn_resumen = document.getElementById("btn_resumen");

const btn_borrar = document.getElementById("btn_borrar");
const totalAPagar = document.getElementById("output__totalAPagar");
const textoTotalApagar = "el total a pagar es: $";
totalAPagar.innerText = textoTotalApagar;

//

const setTickets = () => {
  if (form.quantity.value < 0 || isNaN(form.quantity.value)) {
    quantityTickets = 0;
    return;
  }
  quantityTickets = form.quantity.value;
  calcularPrecioFinal();
};
const setCategory = () => {
  let option = form.category.value;

  priceDiscount = categories[option].percent;

  calcularPrecioFinal();
};

const calcularPrecioFinal = () => {
  let montoNeto = precioTicket * quantityTickets;
  let montoDescuento = montoNeto * (priceDiscount / 100);
  finalPrice = precioTicket * quantityTickets - montoDescuento;
  if (!priceDiscount || !quantityTickets) {
    finalPrice = 0;
  }

  totalAPagar.innerText = textoTotalApagar + finalPrice;
};

const tomarDatosForm = (e) => {
  e.preventDefault();
  let datos = [];

  inputsElement.forEach((input) => datos.push(input.value));
  datos.push(finalPrice);
  console.log(datos);
  const values = Object.values(datos);
  const submitAccepted = values.every((value) => value);

  submitAccepted
    ? (totalAPagar.innerHTML = insertResume(datos))
    : alert("Debes completar todos los campos correctamente");
};

const borrarDatosForm = (e) => {
  e.preventDefault();

  for (let input of inputsElement) input.value = "";
  totalAPagar.innerText = textoTotalApagar;
};

form.category.addEventListener("change", setCategory);
form.quantity.addEventListener("blur", setTickets);
btn_resumen.addEventListener("click", tomarDatosForm);
btn_borrar.addEventListener("click", borrarDatosForm);
