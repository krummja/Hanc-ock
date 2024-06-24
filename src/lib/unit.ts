
async function convertFahrenheitToCelcius(value: number): Promise<number> {
  return 5 / 9 * (value - 32);
}

async function convertCelciusToFahrenheit(value: number): Promise<number> {
  return (9 / 5 * value) + 32;
}

export {
  convertCelciusToFahrenheit,
  convertFahrenheitToCelcius,
};
