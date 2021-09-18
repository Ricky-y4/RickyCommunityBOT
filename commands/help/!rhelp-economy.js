const Discord = require('discord.js')

module.exports = {
    name: "help-economy",
    onlyStaff: true,
    execute(message, args, bot){
        var embed = new Discord.MessageEmbed()
        .setColor("#ed2bea")
        .addField("💸——ECONOMY——💸", "__All economy commands__", false)
        .addField("r!give [n. money]", "Give money to a user from your balance", false)
        .addField("r!daily", "Claims your daily bonus", false)
        .addField("r!check-balance", "Displays the current balance of a user", false)
        .addField("r!leaderboard", "Displays the server leader board", false)
        .addField("r!slotmachine", "Test your luck against slot machine", false)
    message.channel.send(embed)
    }
}