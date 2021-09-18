const Discord = require('discord.js');

module.exports = {
    name: "server",
    aliases: ["serverstats", "server-info", "server-stats", "serverinfo"],
    execute(message) {
        var server = message.member.guild;

        var botCount = server.members.cache.filter(member => member.user.bot).size;
        var utentiCount = server.memberCount - botCount;

        var categoryCount = server.channels.cache.filter(c => c.type == "category").size
        var textCount = server.channels.cache.filter(c => c.type == "text").size
        var voiceCount = server.channels.cache.filter(c => c.type == "voice").size                     
        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("All info on this server")                                        
            .setThumbnail(server.iconURL())                                                          
            .setColor("#0d74f1")                                                                     
            
            .addField("👑 Founder", "```" + server.owner.user.username + "```", true)
            .addField("🪧 Server ID", "```" + server.id + "```", false)
            .addField("🗺️ Server region", "```" + server.region + "```", false)
            .addField("🟢 Online users", "```" + server.members.cache.filter(user => user.presence.status != "offline").size + "```", true)
            .addField("👥 Members", "```Total: " + server.memberCount + " - Users: " + utentiCount + " - Bots: " + botCount + "```", false)
            .addField("🔊 Channels", "```Category: " + categoryCount + " - Text: " + textCount + " - Voice: " + voiceCount + "```", false)
            .addField("🗓️ Server created", "```" + server.createdAt.toDateString() + "```", true)
            .addField("💎 Boost level", "```Level " + server.premiumTier + " (Boost: " + server.premiumSubscriptionCount + ")```", true)
            .addField("🔞 NSFW", server.nsfw ? "```This server is NSFW```" : "```This server isn't NSFW```", false)
            .addField("💜 SFW", server.sfw ? "```This server is SFW```" : "```This server is SFW```", false)
        
        message.channel.send(embed)

    }
};
    



