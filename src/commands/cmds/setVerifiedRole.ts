import { SlashCommandBuilder } from "discord.js";


export const data = new SlashCommandBuilder()
	.setName('verifiedrole')
    .setDescription('Set the role that verified people will receive upon joining the server')
    .addStringOption((option) => {
        option.setName('roleid')
        option.setDescription("Role ID for the verified role!")
        option.setRequired(true)
        return option
    })
    
	