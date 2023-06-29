export const passwordsGood = (inputs) => {
  let passwordInputs = Array.from(inputs).filter((x) => x.name.includes("pass"));
  let requirements = [false, false, false, false];
  requirements[0] = passwordInputs[0].value.length >= 8 ? true : false;
  requirements[1] = passwordInputs[0].value.toLowerCase() != passwordInputs[0].value ? true : false;
  requirements[2] = passwordInputs[0].value.match(/\d+/g) ? true : false;
  requirements[3] = passwordInputs[0].value == passwordInputs[1].value ? true : false;
  return [requirements.every((i) => i == true), requirements.filter((i) => i == true).length, passwordInputs];
};
