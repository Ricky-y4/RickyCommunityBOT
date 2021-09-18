const Discord = require('discord.js')

module.exports = {
    name: "help-suggest",
    execute(message, args, bot){
        var embed = new Discord.MessageEmbed()
        .setColor("#ed2bea")
        .addField("💡——SUGGESTION——💡", "__All suggestion/challenge you can make__", false)
        .addField("!rsuggest [your suggestion]", "Make a suggestion", false)
        .addField("!rchallenge [your challenge]", "Make a challenge", false)
    message.channel.send(embed)
    }
}