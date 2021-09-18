const Discord = require('discord.js')

module.exports = {
    name: "help-music",
    onlyStaff: true,
    execute(message, args, bot){
        var embed = new Discord.MessageEmbed()
        .setColor("#ed2bea")
        .addField("🎶——MUSIC——🎶", "__All fun commands__", false)
        .addField("r!play [yt url] or [song]", "Play a song to YouTube", false)
        .addField("r!pause", "Pause a song are playing", false)
        .addField("r!skip", "Skip the current song", false)
        .addField("r!stop", "Stop the current song", false)
        .addField("r!resume", "Resume a pauses song", false)
        .addField("r!currently-song", "Display the current song are playing", false)
        .addField("r!queue", "Displays the current queue song to the channel", false)
    message.channel.send(embed)
    }
}