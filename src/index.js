require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const filterBhaiya  = require('./helper');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    const reply = filterBhaiya(message.content);
    if (reply){
        message.reply(filterBhaiya(message.content));
    }
});

client.login(process.env.TOKEN);