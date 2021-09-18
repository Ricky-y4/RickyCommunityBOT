const Discord = require('discord.js')

module.exports = {
    name: "help-other",
    execute(message, args, bot){
        var embed = new Discord.MessageEmbed()
        .setColor("#ed2bea")
        .addField("🚨——INFO——🚨", "__All info commands__", true)
        .addField("!ruser-info [@user]", "Get the user information", false)           
        .addField("!rserver", "Get the server information", false)
        .addField("!rconfig", "Configure all notifications", false)
        .addField("❓——HELP——❓", "__If you need help__", true)
        .addField("!rbug-report", "Report a bug", false)
        .addField("!rhelp", "List of all commands", false)
        .addField("🏓——OTHER COMMANDS——🏓", "__Other commands__", true)
        .addField("!rserver-link", "Get the server invite link", false)
        .addField("!rtime", "Get the current time", false)
        .addField("!rsay [text]", "Repeats the written message", false)
        .addField("r!translate [language] [phrase]", "Translate a text from detected language", false)
        .addField("r!fortnite [username] [platform]", "Receives fortnite stats for a specify user", false)
    message.channel.send(embed)
    }
}