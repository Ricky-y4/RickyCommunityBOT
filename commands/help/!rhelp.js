const Discord = require('discord.js');

module.exports = {
    name: "help",
    execute(message, args, bot){
        let embed = new Discord.MessageEmbed()
                .setTitle("👇 | All commands Here")
                .setDescription("**My prefix:** `!r`")
                .setColor("#ed2bea")
                .addField("🚨——INFO——🚨", "!rhelp-other", false)
                .addField("❓——HELP——❓", "!rhelp-other", false)
                .addField("🏓——OTHER COMMANDS——🏓", "!rhelp-other", false)
                .addField("🎶——MUSIC——🎶", "**Temporary Disable**", false)
                .addField("💸——ECONOMY——💸", "**Temporary Disable**", false)
                .addField("💡——SUGGESTION——💡", "!rhelp-suggest", false)
                .addField("📱——SOCIAL——📱", "!rhelp-social", false)
            message.channel.send(embed)
        
    }
}