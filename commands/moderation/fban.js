const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "fban",
    aliases: ["forceban"],
    onlyStaff: true,
    channelsGranted: [],
    execute(message, args, bot) {
        

            var utente = message.mentions.members.first()
            if (!utente) {
                var utente = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.user.tag.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.nickname && user.nickname.toLowerCase() == args[0])
            }

            if (!utente) {
                error(message, "User not found", "`!fban [user] (reason)`")
                return
            }

            if (!message.members.hasPermission("BAN_MEMBERS")) {
                var embed = new Discord.MessageEmbed()
                    .setTitle("No permission")
                    .setThumbnail("https://i.postimg.cc/D0scZ1XW/No-permesso.png")
                    .setColor("#9E005D")
                    .setDescription("You can't ban this user")

                message.channel.send(embed)
                return
            }

            
            
            var reason = args.slice(1).join(" ");
            if (!reason) {
                reason = "Nessun motivo";
            }

            

        

            var embed = new Discord.MessageEmbed()
                .setAuthor("[FORCE BAN] " + utente.user.tag, utente.user.avatarURL({ dynamic: true }))
                .setThumbnail("https://i.postimg.cc/TwcW7hkx/Giulio-Ban-copia.png")
                .setColor("#6143CB")
                .addField("Reason", reason)
                .addField("Moderator", message.author.toString())
                .setFooter("User ID: " + utente.user.id)

            message.channel.send(embed)

            

            utente.ban({reason: reason})
   
            var canale = bot.channels.cache.get("874975418925592627");
            canale.send(embed)
        
    },
};
