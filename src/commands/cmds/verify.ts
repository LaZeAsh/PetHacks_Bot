import { SlashCommandBuilder } from "discord.js";


export const data = new SlashCommandBuilder()
	.setName('verify')
    .setDescription('Verify to gain access to the server')
    .addStringOption((option) => {
        option.setName('email')
        option.setRequired(true)
        option.setDescription("Email you signed up with")
        return option
    })
    .addStringOption((option) => {
        option.setName('firstname')
        option.setDescription("First name you signed up with")
        option.setRequired(true)
        return option
    })
    .addStringOption((option) => {
        option.setName('lastname')
        option.setDescription("Last name you signed up with")
        option.setRequired(true)
        return option
    })
    
	