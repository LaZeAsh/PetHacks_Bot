import Discord from 'discord.js';
import { COMMAND_REGISTERING } from '../commands';

export async function READY_EVENT(client: Discord.Client<true>) {
    await COMMAND_REGISTERING(client);
    console.log(`${client.user.username} is online!`);
}