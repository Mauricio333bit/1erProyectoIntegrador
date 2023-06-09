//UTILS
const changeColor = (container, index, revert = false) => {
  const i = Number(index);

  revert
    ? container.classList.replace(bgColor[i], bgTransparent)
    : container.classList.replace(bgTransparent, bgColor[i]);
};
