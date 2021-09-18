const Discord = require("discord.js");

module.exports = {
    name: "lockdown",
    execute(message, args, bot) {
        
        var lockdown = args.slice(2).join(" ");
        
        let ruolo = message.guild.roles.cache.find(r => r.name === "@everyone");
        if (!lockdown) {
            let embed = new Discord.MessageEmbed()
                .setTitle("LOCKDOWN ACTIVED")
                .setColor("#ED1C24")
                .setDescription("The **lockdown system** has been activated")
            message.channel.send(embed)
            lockdown = true;
            ruolo.setPermissions(["SEND_MESSAGES", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "CONNECT", "USE_VAD"])

            var canale = bot.channels.cache.get("876078709793226773");
            canale.updateOverwrite(ruolo, {
                VIEW_CHANNEL: true,
            })

            if (message.channel.id == "860203446011166760") return
            var canale = bot.channels.cache.get("860203446011166760");
            canale.send(embed);
        }
        else {
            let embed = new Discord.MessageEmbed()
                .setTitle("LOCKDOWN DISABLED")
                .setColor("#77B155")
                .setDescription("The **lockdown system** has been disabled")
            message.channel.send(embed)
            ruolo.setPermissions(["SEND_MESSAGES", "VIEW_CHANNEL", "CREATE_INSTANT_INVITE", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "CONNECT", "SPEAK", "USE_VAD"])
            lockdown = false;

            var canale = bot.channels.cache.get("876078709793226773");
            canale.updateOverwrite(ruolo, {
                VIEW_CHANNEL: false,
            })

            if (message.channel.id == "860203446011166760") return
            var canale = bot.channels.cache.get("860203446011166760");
            canale.send(embed);
        }
    
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            var embed500 = new Discord.MessageEmbed()
               .setTitle("Permission required")
               .setDescription("You don't have permission to execute this command!")
            message.channel.send(embed500)
            return
        }
    },
};