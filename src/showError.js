export const showError = (element, messageStart, messageEnd) => {
  element.classList.add("bbr-0");
  let error = element.parentNode.parentNode.querySelector("span");
  let label = element.parentNode.querySelector("label");
  error.textContent = `${messageStart} ${label.textContent.replace("Type in ", "").replace(":", "")} ${messageEnd}`;
  error.className = "error active";
  let goodDiv = element.parentNode.querySelector(".good");
  goodDiv.classList.remove("active");
};
