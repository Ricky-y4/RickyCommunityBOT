const Discord = require("discord.js");
module.exports = {
    name: "suggest",
    aliases: ["suggerisci", "suggerimento"],
    channelsGranted: ["874254689733066792"],
    execute(message, args, bot) {
        
            
        let contenuto = args.join(" ")
            if (!contenuto) {
                error(message, "Invalid suggestion", "`!suggest [suggest]`")
                return
            }
            if (contenuto.length > 500) {
                error(message, "Troppo lungo", "Inserire un suggerimento piΓΉ corto di 500 caratteri")
                return
            }
            let embed = new Discord.MessageEmbed()
                .setTitle("π‘ Suggestions by " + message.member.user.username)
                .setDescription(contenuto)
                .addField("π", "User ID: " + message.member.user.id, true)
                .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
            let canale = bot.channels.cache.find(channel => channel.id == "874254689733066792");
            canale.send(embed)
                .then(msg => {
                    msg.react("π")
                    msg.react("π")
                    embed
                        .setFooter("Suggestion ID: " + msg.id)
                    msg.edit(embed)
                    message.delete();
                })
        
    },
};