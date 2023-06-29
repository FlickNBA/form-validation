import "./reset.css";
import "./index.css";
import { getInputs } from "./getInputs";
import { errorSizing } from "./errorSizing";
import { showError } from "./showError";
import { hideError } from "./hideError";
import { isCountry } from "./countriesInput";

let inputs = getInputs();

errorSizing(inputs);

setTimeout(() => {
  errorSizing(inputs);
  document.querySelector("form").style["transition-duration"] = "1000ms";
  document.querySelector("form").style.opacity = 1;
}, 500);

inputs.forEach((input) => {
  if (input.name.includes("mail")) {
    input.addEventListener("input", () => {
      console.log("input mail");
      if (input.validity.valid) {
        hideError(input);
      } else {
        console.log(input);
        showError(input, "FFS! Just give me", "dude.");
      }
    });
  } else if (input.name.includes("country")) {
    input.addEventListener("input", () => {
      if (isCountry(input.value)) {
        hideError(input);
      } else {
        showError(input, "WOW. Give me", "pretty please... Can't let you in otherwise.");
      }
    });
  } else if (input.name.includes("pass")) {
    console.log("password");
  }
});
