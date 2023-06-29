import "./reset.css";
import "./index.css";
import { getInputs } from "./getInputs";
import { errorSizing } from "./errorSizing";
import { showError } from "./showError";
import { hideError } from "./hideError";

let inputs = getInputs();

errorSizing(inputs);

setTimeout(() => {
  errorSizing(inputs);
  document.querySelector("form").style["transition-duration"] = "1000ms";
  document.querySelector("form").style.opacity = 1;
}, 500);

inputs.forEach((input) => {
  switch (input.type) {
    case "email":
      input.addEventListener("input", () => {
        console.log("input mail");
        if (input.validity.valid) {
          hideError(input);
        } else {
          console.log(input);
          showError(input, "FFS! Just give me", "dude.");
        }
      });

      break;
    default:
      console.log("cos innego lolz");
      break;
  }
});
