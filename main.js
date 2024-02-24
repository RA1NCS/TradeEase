//Author: Kush Gupta
//Date: 30 May 2023
//Purpose: Basic TradingView Connect Code


const Discord = require(discord.js)
const client = new Discord.Client({ partial : ["MESSAGE", 'CHANNEL', 'REACTION']});
const prefix = 'Trade';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(.js));

for(const file of commandFiles) {

    const command = require('./commands/'${file})
    client.commands.set(command.name, command);

}

client.once('ready', () => {
    console.log('TradeEase is Live! Connected to TradingView');
    client.user.setStatus('idle');
    client.user.setActivity('Suggesting Trades');

});

client.on('message',message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const mentions = message.mentions.members;

    if(command == 'LiveConnect') {
        client.commands.get('LiveConnect').execute(message, args, Discord);
    }
})