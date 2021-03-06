const Discord = require('discord.js')

module.exports = {
	name : "pause",
	description: "pause current Audio!",
	aliases : ["ps"],
	ussage : null,
	hidden : false,
	canDisabled : true,
	admin : false,
	owner : false,
	nsfw : false,
	async execute(bot, message){
		var msg = message;
		var serverQueue = bot.queue.get(msg.guild.id);

		var guildvoice = bot.voice.connections.get(message.guild.id);
		if(!guildvoice) return message.reply("please letme join to room!")
		if(guildvoice.channel.id !== msg.member.voice.channel.id) return message.reply("dont disturb me!")

		if (serverQueue && serverQueue.playing) {
				serverQueue.playing = false;
				serverQueue.connection.dispatcher.pause();
				return msg.channel.send("⏸  **|**  Paused the music for you!");
		}
		return msg.channel.send("❌  **|**  There is nothing playing.");
	}
} 