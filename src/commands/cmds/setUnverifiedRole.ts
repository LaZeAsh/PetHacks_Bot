import { SlashCommandBuilder } from "discord.js";


export const data = new SlashCommandBuilder()
	.setName('unverifiedrole')
    .setDescription('Set the role that unverified people will receive upon joining the server')
    .addStringOption((option) => {
        option.setName('roleid')
        option.setDescription("Role ID for the unverified role!")
        option.setRequired(true)
        return option
    })
    
	