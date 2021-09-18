const Discord = require("discord.js");

module.exports = {
    name: "warn",
    execute(message, args, bot) {
        
        

            var utente = message.mentions.members.first()
            if (!utente) {
                var utente = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.user.tag.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.nickname && user.nickname.toLowerCase() == args[0])
            }

            if (!utente) {
                error(message, "User not found", "`!warn [user] (reason)`")
                return
            }

            if (!message.member.hasPermission("MANAGE_SERVER")) {
                var embed = new Discord.MessageEmbed()
                    .setTitle("Permission required")
                    .setThumbnail("https://i.postimg.cc/D0scZ1XW/No-permesso.png")
                    .setColor("#9E005D")
                    .setDescription("You can't warn this user")

                message.channel.send(embed).then(msg => {
                    message.delete({ timeout: 7000 })
                    msg.delete({ timeout: 7000 })
                })
                return
            }

           

            var reason = args.slice(1).join(" ");

            if (!reason) {
                reason = "Nessun motivo";
            }

            
            

            var embed = new Discord.MessageEmbed()
                .setAuthor("[WARN] " + utente.user.tag, utente.user.avatarURL({ dynamic: true }))
                .setThumbnail("https://i.postimg.cc/j2dnGK97/Giulio-Ban-copia-4.png")
                .setColor("#6143CB")
                .addField("Reason", reason)
                .addField("Moderator", message.author.toString())
                .setFooter("User ID: " + utente.user.id)
                .setTimestamp()

            message.channel.send(embed)

            

            var canale = bot.channels.cache.get("876552116364275772");
            canale.send(embed)

            
        
    },
  
}
