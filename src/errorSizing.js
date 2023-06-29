export const errorSizing = (inputs) => {
  inputs.forEach((input) => {
    input.parentNode.parentNode.querySelector("span").style.width = `${input.clientWidth + 2}px`;
  });
};
