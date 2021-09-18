const Discord = require('discord.js');

module.exports = {
    name: "unmute",
    execute(message, args, bot){
        var utente = message.mentions.members.first()
        if (!utente) {
            var utente = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.user.tag.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.nickname && user.nickname.toLowerCase() == args[0])
        }

        if (!utente) {
            error(message, "User not found", "`!unmute [user] (reason)`")
            return
        }

        if (!message.member.hasPermission("MUTE_MEMBERS")) {
            var embed = new Discord.MessageEmbed()
               .setTitle("Permission required")
               .setDescription("You don't have permission to execute this commad")
               .setThumbnail("https://i.postimg.cc/D0scZ1XW/No-permesso.png")
               .setColor("#9E005D")
            message.channel.send(embed)
            return
        }


            utente.roles.remove("864911437633552384")

        var embed = new Discord.MessageEmbed()
           .setAuthor("[UNMUTE] " + utente.user.tag, utente.user.avatarURL({ dynamic: true }))
           .setThumbnail("https://i.postimg.cc/bJPt919L/Giulio-Ban-copia-2.png")
           .setColor("#6143CB")
           .addField("Moderator", message.author.toString())
           .setFooter("User ID: " + utente.user.id)
           .setTimestamp()
        message.channel.send(embed)
    
        var canale = bot.channels.cache.get("874975418925592627");
        canale.send(embed);
    }
}