//CONFIG
cards.forEach((card) => {
  card.parentElement.classList.add(
    "btn",
    "bg-transparent",
    `border-${color[card.parentElement.dataset.index]}`,
    "border-2"
  );
  const percent = card.querySelector(".card-percent");
  const b = document.createElement("b");
  b.innerText = percent.innerText;
  percent.innerHTML = b.outerHTML;
});
