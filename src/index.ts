// Imports
import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });


// Event Imports
import { INTERACTION_EVENT, READY_EVENT } from './events';

client.once('ready', READY_EVENT);
client.on('interactionCreate', INTERACTION_EVENT);


client.login(process.env.TOKEN as string);