const Discord = require('discord.js');

module.exports = {
    name: "youtube",
    aliases: ["yt"],
    execute(message){
       let embed = new Discord.MessageEmbed()
       .setTitle("Rixcky")
       .setDescription("👆 This is the youtube channel **Rixcky** Subscribe and leave like ")
       .setThumbnail("https://i.postimg.cc/8zZhkqNS/backgrounder-2.jpg")
       .setURL("https://www.youtube.com/channel/UClYtI5Jkx2z5tpYeY_oJYSg")
       message.channel.send(embed)
    }

}