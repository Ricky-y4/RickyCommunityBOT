const Discord = require("discord.js");
const moment = require("moment")

module.exports = {
    name: "bugreport",
    aliases: ["bug", "report"],
    channelsGranted: ["883429024733491250"],
    async execute(message, args, bot) {
        let report = args.join(" ");

        if (!report && !(message.attachments).array()[0]) {
            error(message, "Invalid report", "`!rbugreport [report]`")
            return
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle(":beetle: Bug reported :beetle:")
            .setColor("#1f1f1f")
            .setFooter("Bug reported, the staff will analyze it shortly")

        if (report)
            embed.setDescription("```" + report + "```")

        if ((message.attachments).array()[0])
            embed.setImage((message.attachments).array()[0].url)

        message.channel.send(embed)

        var embed = new Discord.MessageEmbed()
            .setTitle(":beetle: Bug report :beetle:")
            .setColor("#6DA54C")
            .addField(":bust_in_silhouette: User", "```" + `${message.author.username} (ID: ${message.author.id})` + "```", false)
            .addField(":page_facing_up: Channel", "```" + message.channel.name + "```[Message](https://discord.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id + ")", true)
            .addField(":alarm_clock: Time", "```" + moment(new Date().getTime()).format("ddd DD MMM, HH:mm") + "```", true)

        if (report)
            embed.addField(":skull_crossbones: Bug", "```" + report + "```", false)

        if ((message.attachments).array()[0])
            embed.setImage((message.attachments).array()[0].url)

        bot.channels.cache.get("888293943387783188").send(embed);
        bot.channels.cache.get("888141119316172840").send(embed);
    },
};