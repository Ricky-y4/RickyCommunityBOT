const Discord = require("discord.js");

module.exports = {
    name: "challenge",
    aliases: ["sfida"],
    channelsGranted: ["874324043250167858"],
    execute(message, args, bot) {
        
            
        let contenuto = args.join(" ");
            
            if (!contenuto) {
                error(message, "Invalid challenge", "`!challenge [challenge]`")
                return
            }

            if (contenuto.length > 500) {
                error(message, "Troppo lungo", "Inserire una sfida piΓΉ corta di 500 caratteri")
                return
            }

            let embed = new Discord.MessageEmbed()
                .setTitle("π― Challenge by " + message.member.user.username)
                .setDescription(contenuto)
                .addField("π", "User ID: " + message.member.user.id, true)
                .setThumbnail(message.member.user.avatarURL({ dynamic: true }))

            var canale = bot.channels.cache.find(channel => channel.id == "874324043250167858");

            canale.send(embed)
                .then(msg => {
                    msg.react("π")
                    msg.react("π")

                    embed
                    
                    .setFooter("Challenge ID: " + msg.id)

                    msg.edit(embed)
                    message.delete();
                })
        
    },
};