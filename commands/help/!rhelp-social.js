const Discord = require('discord.js')

module.exports = {
    name: "help-social",
    execute(message, args, bot){
        var embed = new Discord.MessageEmbed()
        .setColor("#ed2bea")
        .addField("📱——SOCIAL——📱", "__My social__", true)
        .addField("!rinstagram", "Get Ricky's Instagram profile", false)
        .addField("!rtwitter", "Get Ricky's Twitter profile", false)
    message.channel.send(embed)
    }
}