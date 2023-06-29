import "./reset.css";
import "./index.css";
import { getInputs } from "./getInputs";
import { errorSizing } from "./errorSizing";
import { showError } from "./showError";
import { hideError } from "./hideError";
import { isCountry } from "./countriesInput";
import { passwordsGood } from "./passwordsGood";
import { isZIP } from "./isZIP";

let form = document.querySelector("form");

let inputs = getInputs();

errorSizing(inputs);

setTimeout(() => {
  errorSizing(inputs);
  form.style["transition-duration"] = "1000ms";
  form.style.opacity = 1;
}, 500);

inputs.forEach((input) => {
  ///
  if (input.name.includes("mail")) {
    input.addEventListener("input", () => {
      if (input.validity.valid) {
        hideError(input);
      } else {
        showError(input, "FFS! Just give me", "dude.");
      }
    });
    ///
  } else if (input.name.includes("country")) {
    input.addEventListener("input", () => {
      if (isCountry(input.value)) {
        hideError(input);
      } else {
        showError(input, "WOW. Give me", "pretty please... Can't let you in otherwise.");
      }
    });
    ///
  } else if (input.name.includes("zip")) {
    input.addEventListener("input", () => {
      if (isZIP(input.value)) {
        hideError(input);
      } else {
        showError(input, "FFS! Just give me", " (5 or more digits) dude.");
      }
    });
    //
  } else if (input.name.includes("pass")) {
    input.addEventListener("input", () => {
      let PG = passwordsGood(inputs);
      if (PG[0]) {
        PG[2].forEach((inp) => {
          hideError(inp);
        });
      } else {
        PG[2].forEach((inp) => {
          showError(inp, "FFS! Fix", `bro. 8+ characters, 1+ uppercase, 1+ number and both must be the same. You got ${PG[1]}/4.`);
        });
      }
    });
    //
  }
});

form.addEventListener("submit", (e) => {
  let HM = inputs.length - document.querySelectorAll(".good.active").length;
  e.preventDefault();
  if (HM == 0) {
    alert(":)");
  } else {
    alert(`You need to fill ${HM} more ${HM > 1 ? "inputs" : "input"} with a solid info!`);
  }
});
