import Discord from 'discord.js';

export function INTERACTION_EVENT(interaction: Discord.Interaction<Discord.CacheType>) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }
}