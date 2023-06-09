//DOM

const form = document.getElementById("ticketsForm");
const inputsElement = form.querySelectorAll(".input__form");
const btn_resume = document.getElementById("btn_resumen");

const btn_reset = document.getElementById("btn_borrar");
const totalAPagar = document.getElementById("output__totalAPagar");
const textoTotalApagar = "el total a pagar es: $";
totalAPagar.innerText = textoTotalApagar;
//VAR
const priceTicket = 200;
let totalValue = null;
let tickets = 0;
let category = null;
let finalValue = 0;
const categories = {
  0: { percent: 80, tipe: "Estudiante" },
  1: { percent: 50, tipe: "Traine" },
  2: { percent: 15, tipe: "Junior" },
};

//EVENTS
const assignValidation = () => {
  inputsElement.forEach((input) => {
    input.addEventListener("blur", (input) => {
      valida(input.target);
    });
  });
};

const setTickets = () => {
  if (form.quantity.value < 0 || isNaN(form.quantity.value)) {
    tickets = 0;
    return;
  }
  tickets = form.quantity.value;

  totalPrice();
};
const setCategory = () => {
  category = form.category.value;

  priceDiscount = categories[category].percent / 100;
  cardContainer.forEach((container) => {
    container.dataset.index == category
      ? changeColor(container, container.dataset.index)
      : changeColor(container, container.dataset.index, true);
  });

  totalPrice();
};
function totalPrice() {
  totalValue = priceTicket * tickets;
  if (category == null || category == "") {
    priceDiscount = 0;
  }
  finalValue = totalValue - totalValue * priceDiscount;

  totalAPagar.innerText = textoTotalApagar + finalValue;
}
const resetForm = (e) => {
  e.preventDefault();

  for (let input of inputsElement) input.value = "";
  totalAPagar.innerText = textoTotalApagar;
  setTickets();

  changeColor(cardContainer[category], category, true);
  eventAssignment(cardContainer[category]);
  category = null;
};
const infoDesc = (category) => {
  let infoText = "";
  category.value !== ""
    ? (infoText = `con un descuento de ${
        categories[category.value].percent
      } % por ser ${categories[category.value].tipe} `)
    : (infoText = "sin descuento");
  return infoText;
};
const resumen = (e) => {
  e.preventDefault();

  const { name, lastname, email, quantity, category } = form;
  const values = [name.value, lastname.value, email.value, quantity.value];
  const submitAccepted = values.every((value) => value);
  console.log(submitAccepted);
  submitAccepted
    ? (totalAPagar.innerHTML = resumeTemplate(name, quantity, category))
    : alert("Debes completar los campos necesarios");
};
assignValidation();
form.category.addEventListener("change", setCategory);
form.quantity.addEventListener("blur", setTickets);
btn_reset.addEventListener("click", resetForm);
btn_resume.addEventListener("click", resumen);
