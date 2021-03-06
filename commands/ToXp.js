const Discord = require('discord.js');
const { version } = require('../config.json');
const Calc = require('../functions/conversions.js');

const ToXpEmbed = new Discord.MessageEmbed()
    .setColor('#08272f')
    .setTitle('Prize Bulb to XP Conversion | <:prizebulb:721918291400196126><:arrow:722971202544730113><:xp:722080853869592648>')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/726902500401217556/xp.png')
    .setTimestamp();

module.exports = {
    name: 'toxp',
    description: 'Converts Prize Bulbs to XP',
    execute(message, args) {
        let bulbs = args[0];
        let result = Calc.ConvertToXp(bulbs);
        ToXpEmbed.setDescription(`XP - ${result} <:xp:722080853869592648>`);
        message.channel.send(ToXpEmbed);
    }
}