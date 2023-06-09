//UTILS
function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.classList.remove("border-danger");

    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.classList.add("border-danger");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
    input.parentElement
      .querySelector(".input-message-error")
      .classList.add("text-danger");
    input.value = null;
  }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch"];
  const mensajesError = {
    name: {
      valueMissing: "Este campo es obligatorio",
    },
    lastname: {
      valueMissing: "Este campo es obligatorio",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacio",
      typeMismatch: "El correo no es valido",
    },

    quantity: {
      valueMissing: "Tienes que ingresar una cantidad",
      patternMismatch: "El valor ingresado no es valido, min 1 Max 100",
    },
    category: {
      valueMissing: "Tienes que elegir una categoria",
    },
  };

  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesError[tipoDeInput][error];
    }
  });
  return mensaje;
}
let resumeTemplate = (name, quantity, category) => `
  <div class="d-flex justify-content-between"><div class="d-flex align-items-center flex-column "><h5 class="card-title">${
    name.value
  }</h5>
                    <p class="card-text">Solo falta que pagues tu compra:</p>
                    <p class="card-text">x${quantity.value} tickets</p>
                    <p class="card-text">Por un valor de $ ${totalValue}</p>
                    <p class="card-text"> ${infoDesc(category)}  </p>
  
                    <p class="card-text">EL TOTAL A PAGAR ES: $ ${finalValue} </p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center col-4  "><button
                    id="btn_pago"
                    class="btn bg-primary"
                  >
                    Pagar
                  </button>
                  </div>
                  </div>
                    `;
