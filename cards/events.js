//EVENTS

const cardClick = (e) => {
  selected = e.currentTarget.dataset.index;
  form.category.value = selected;
  setCategory();
  eventAssignmentAll();
};

const cardEnter = (e) => {
  const { index } = e.target.dataset;
  changeColor(e.target, index);
};

const cardLeave = (e) => {
  const { index } = e.target.dataset;

  changeColor(e.target, index, true);
};
const eventCleaner = (cardContainer) => {
  cardContainer.removeEventListener("mouseenter", cardEnter);
  cardContainer.removeEventListener("mouseleave", cardLeave);
  cardContainer.removeEventListener("click", cardClick);
};

const eventAssignment = (cardCont) => {
  cardCont.addEventListener("mouseenter", cardEnter);
  cardCont.addEventListener("mouseleave", cardLeave);
  cardCont.addEventListener("click", cardClick);
};
function eventAssignmentAll() {
  cardContainer.forEach((cardCont) => {
    eventCleaner(cardCont);
    if (cardCont.dataset.index !== selected) {
      eventAssignment(cardCont);
      changeColor(cardCont, cardCont.dataset.index, true);
    }
  });
}

eventAssignmentAll();
