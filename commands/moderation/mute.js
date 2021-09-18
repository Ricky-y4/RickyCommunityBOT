const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "mute",
    execute(message, args, bot) {
        
            
            

            var utente = message.mentions.members.first()
            if (!utente) {
                var utente = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.user.tag.toLowerCase() == args[0]) || message.guild.members.cache.find(user => user.nickname && user.nickname.toLowerCase() == args[0])
            }

            if (!utente) {
                error(message, "User not found", "`!mute [user] (reason)`")
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

           

           
            
            var reason = args.slice(1).join(" ");

            if (!reason) {
                reason = "Nessun motivo";
            }

            
           
            
            

            var ruoloMuted = message.guild.roles.cache.find(role => role.id == "864911437633552384");
           

            utente.roles.add(ruoloMuted)
                .then(() => {
                    if (utente.voice.channel) {
                        var canale = utente.voice.channelID
                        if (canale == "859766299442020392")
                            utente.voice.setChannel("859857012963803136")
                        else
                            utente.voice.setChannel("859766299442020392")
                        utente.voice.setChannel(canale)
                    }
                })

            

            

            var embed = new Discord.MessageEmbed()
                .setAuthor("[MUTE] " + utente.user.tag, utente.user.avatarURL({ dynamic: true }))
                .setThumbnail("https://i.postimg.cc/bJPt919L/Giulio-Ban-copia-2.png")
                .setColor("#6143CB")
                .addField("Reason", reason)
                .addField("Moderator", message.author.toString())
                .setFooter("User ID: " + utente.user.id)
                .setTimestamp()

            message.channel.send(embed)

            var canale = bot.channels.cache.get("874975418925592627");
            canale.send(embed);

            
        
    },
};
