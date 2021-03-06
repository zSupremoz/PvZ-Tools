const Discord = require('discord.js');
const { version } = require('../config.json');

const CalcHelpEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('Calculator Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('pvz.tobulb [xp] - Takes the amount of specified XP and converts them to Prize Bubls.\npvz.toxp [bulbs] - Takes the amount of specified Prize Bulbs and converts them to XP.')
    .addFields(
        { name: 'Note', value: 'Do not include the brackets/[] when giving the bot input.'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools#calculator-commands' }
    )
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726893941974368356/prizebulb.png')
    .setTimestamp();

module.exports = {
    name: 'calchelp',
    description: 'Shows calculator commands',
    execute(message, args){
        message.channel.send(CalcHelpEmbed);
    }
}