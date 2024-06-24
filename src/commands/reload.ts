import { CommandInteraction, SlashCommandBuilder } from "discord.js";


export const data = new SlashCommandBuilder()
  .setName("reload")
  .setDescription("Reload a command")
  .addStringOption((option) => {
    return option.setName("command")
      .setDescription("The command to reload")
      .setRequired(true);
  });

export async function execute(interaction: CommandInteraction) {
  const commandName = (interaction.options.get("command")?.value as string).toLowerCase();
}
