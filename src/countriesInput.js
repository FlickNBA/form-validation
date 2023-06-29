import countries from "./countries.json";

export const isCountry = (value) => {
  let TEST = Object.entries(countries).reduce((accumulator, value) => {
    accumulator.push(value[1].name);
    return accumulator;
  }, []);
  return TEST.includes(value);
};
