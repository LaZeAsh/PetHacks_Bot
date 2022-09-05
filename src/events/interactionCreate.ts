import Discord from 'discord.js';
import { createUnverifiedRole, createVerifyRole, readUserModel, findVerifyRole, findunVerifiedRole } from '../database'
export async function INTERACTION_EVENT(interaction: Discord.Interaction<Discord.CacheType>) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }

    if(interaction.commandName === "unverifiedrole") {
        let roleID = interaction.options.getString('roleid');
        await createUnverifiedRole(interaction.guildId as string, roleID as string);
        interaction.reply(`Set the unverified role id to ${roleID}`);
    }

    if(interaction.commandName === "verifiedrole") {
        let roleID = interaction.options.getString('roleid');
        await createVerifyRole(interaction.guildId as string, roleID as string);
        interaction.reply(`Set the verified role id to ${roleID}`);
    }

    if(interaction.commandName === "verify") {
        let EMAIL = interaction.options.getString('email');
        let FIRST_NAME = interaction.options.getString('firstname');
        let LAST_NAME = interaction.options.getString('lastname');

        if(await readUserModel(FIRST_NAME as string, LAST_NAME as string, EMAIL as string)) {
            // give role and stuff
            let verifiedRole:  Promise<Discord.Role>  = interaction.guild?.roles.fetch(await findVerifyRole(interaction.guildId as string)) as  Promise<Discord.Role>
            if(!verifiedRole) interaction.reply("Please set up a role to give when verified");
            let unverifiedRole:  Promise<Discord.Role> = interaction.guild?.roles.fetch(await findunVerifiedRole(interaction.guildId as string)) as  Promise<Discord.Role>
            if(!unverifiedRole) interaction.reply("Please set up a role to remove when verified");

            let user = interaction.guild?.members.cache.get(interaction.user.id);
            if(!user) return console.log("No user");
            interaction.reply("Working on it!");
            user.roles.add((await verifiedRole).id);
            user.roles.remove((await unverifiedRole).id);

        } else {
            interaction.reply(`Sorry! The credentials don't match up please try again!`);
        }
    }
}