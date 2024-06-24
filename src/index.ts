import { Client } from "discord.js";
import { deployCommands } from "./deploy";
import { commands } from "./commands";
import { config } from "./config";


const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log("Discord bot is ready!");
});

client.on("guildCreate", async (guild) => {
  console.log(`Deploying to ${guild.id}`);
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  console.log(`Creating interaction ${interaction.commandName}`);

  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(config.DISCORD_TOKEN);
