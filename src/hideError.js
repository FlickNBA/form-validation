export const hideError = (element) => {
  element.classList.remove("bbr-0");
  let error = element.parentNode.parentNode.querySelector("span");
  error.textContent = "";
  error.className = "error";
  let goodDiv = element.parentNode.querySelector(".good");
  goodDiv.classList.add("active");
};
