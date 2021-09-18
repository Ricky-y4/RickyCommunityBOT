const Discord = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "slowmode",
    execute(message, args, bot) {
        var time = message.content.split(/\s+/)[1];
        if (!time) {
            error(message, "Invalid time", "`!slowmode [time]/off`")
            return
        }

        if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            var embed = new Discord.MessageEmbed()
              .setTitle("No permission")
              .setDescription("You don't have permission to execute this command")
            message.channel.send(embed)
            return
        }
        
        if (time != "off" && time != "no") {
            time = ms(time)

            if (!time) {
                error(message, "Invalid time", "`!slowmode [time]/off`")
                return
            }

            if (time > 21600000) {
                warming(message, "Troppa slowmode", "Non puoi impostare una slowmode superiore a 6 ore")
                return
            }

            var tempo = ms(time, { long: true });
            tempo = tempo + " "
            tempo = tempo.replace("second ", "secondo")
            tempo = tempo.replace("seconds", "secondi")
            tempo = tempo.replace("minute ", "minuto ")
            tempo = tempo.replace("minutes", "minuti")
            tempo = tempo.replace("hour ", "ora ")
            tempo = tempo.replace("hours", "ore")
        }

        if (time == "off" || time == "no")
            time = 0

        message.channel.setRateLimitPerUser(parseInt(time) / 1000)

        var embed = new Discord.MessageEmbed()
            .setTitle("Slowmode impostata")
            .setThumbnail("https://i.postimg.cc/3xV5BpHm/speedometer.png")
            .setColor("#16A0F4")

        if (time == 0) {
            embed.setDescription("Slowmode disattivata")
        }
        else {
            embed.setDescription("Slowmode impostata a " + tempo)
        }
        message.channel.send(embed).then(msg => {
            message.delete({ timeout: 10000 })
            msg.delete({ timeout: 10000 })
        })
    },
};