export function insertResume(datos) {
  let resumeTemplate = ([
    nombre,
    lastname,
    correo,
    quantity,
    category,
    finalPrice,
  ]) => `
  <div class="d-flex justify-content-between"><div class="d-flex align-items-center flex-column "><h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Solo falta que pagues tu compra:</p>
                    <p class="card-text">x${quantity} tickets</p>

                    <p class="card-text">EL TOTAL A PAGAR ES: $ ${finalPrice} </p>
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

  return resumeTemplate(datos);
}
