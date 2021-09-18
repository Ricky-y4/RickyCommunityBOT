const Discord = require('discord.js');

module.exports = {
    name: "server-link",
    aliases: ["server-invite", "serverlink", "serverinvite", "Serverinvite", "Serverlink"],
    execute(message){
       let embed = new Discord.MessageEmbed()
       .setTitle("**Server Invite Link**")
       .setDescription("Here is the invitation link 👇 - https://discord.gg/efAF4XBK5a")
       .setThumbnail("https://i.postimg.cc/FFTSf3X0/telegram.png")
       message.channel.send(embed)
    }

}