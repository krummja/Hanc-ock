import { CommandInteraction, SlashCommandBuilder } from "discord.js";


export const data = new SlashCommandBuilder()
  .setName("test")
  .setDescription("Just a test!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Hello world!");
}
