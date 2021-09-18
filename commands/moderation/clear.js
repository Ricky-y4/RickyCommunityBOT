const Discord = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "clear",
    async execute(message, args, bot) {
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")){
            var embed1 = new Discord.MessageEmbed()
               .setTitle("Permission required")
               .setDescription("You don't have permission to execute this command")
               .setThumbnail       
        }            
        try {
            count = parseInt(message.content.split(/\s+/)[1]) + 1;
        } catch {
            error(message, "Invalid Number", "`!clear [count]`")
            return
        }

        if (!count || count < 1) {
            error(message, "Invalid Number", "`!clear [count]`")
            return
        }

        if (count < 100) {
            await message.channel.bulkDelete(count, true)
        }
        else {
            await message.channel.bulkDelete(100, true)
            count = 100
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("Messaggi eliminati")
            .setThumbnail("https://i.postimg.cc/SRpBjMg8/Giulio.png")
            .setColor("#16A0F4")
            .setDescription("Sono stati eliminati " + (count - 1) + " messaggi")

        message.channel.send(embed)
            .then(msg => {
                msg.delete({ timeout: 15000 })
            })
    },
};