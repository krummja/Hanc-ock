import { CommandInteraction, SlashCommandBuilder } from "discord.js";

import {
  convertCelciusToFahrenheit,
  convertFahrenheitToCelcius,
} from "../lib/unit";


const temperatureUnits = [
  { name: "Celcius", value: "C" },
  { name: "Fahrenheit", value: "F" },
];

export const data = new SlashCommandBuilder()
  .setName("convert")
  .setDescription("Convert temperatures (F -> C or C -> F)")
  .addStringOption((option) => {
    return option.setName("value")
      .setDescription("The target temperature value")
      .setRequired(true);
  })
  .addStringOption((option) => {
    return option.setName("from")
      .setDescription("The from unit (F or C)")
      .setRequired(true)
      .addChoices(temperatureUnits);
  });

export async function execute(interaction: CommandInteraction) {
  const value = interaction.options.get("value")?.value as number;
  const unit = interaction.options.get("from")?.value;

  switch (unit) {
    case "F": {
      const converted = await convertFahrenheitToCelcius(value);
      return interaction.reply(`${value} F is ${converted.toPrecision(4)} C`);
    }
    case "C": {
      const converted = await convertCelciusToFahrenheit(value);
      return interaction.reply(`${value} C is ${converted.toPrecision(4)} F`);
    }
  }
}
