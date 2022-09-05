import Discord from 'discord.js';
import fs from 'fs';
import path from 'path'

export async function COMMAND_REGISTERING(client: Discord.Client) {
    const commands = [];
    const commandFiles = fs.readdirSync(path.resolve(__dirname, './cmds')).filter(file => file.endsWith('.ts'));
    for (const file of commandFiles) {
        const command = require(`./cmds/${file}`);
        commands.push(command?.data?.toJSON());

    }

    const rest = new Discord.REST({ version: '10' }).setToken(process.env.TOKEN as string);


    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data: any = await rest.put(
            Discord.Routes.applicationCommands(client?.user?.id as string),
            { body: commands },
        );
        
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
}