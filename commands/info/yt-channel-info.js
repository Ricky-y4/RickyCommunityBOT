const Discord = require('discord.js');
const ytch = require('yt-channel-info');

module.exports = {
    name: "yt-channel-info",
    aliases: ["ytinfo", "ytchannel-info", "ytchannelinfo", "yt-info", "yt-channelinfo", "youtube"],
    execute(message){
        
        
            let embed = new Discord.MessageEmbed()
                .setTitle("Rixcky")
                .setDescription("**🔗LINK:** https://www.youtube.com/channel/UClYtI5Jkx2z5tpYeY_oJYSg")
                .setThumbnail("https://i.postimg.cc/JhdjL4ND/backgrounder-2.jpg")
                .setImage("https://i.postimg.cc/g0nbJNZS/backgrounder-4.jpg")
                .addField("Views", "974", true)
                .addField("Top", "122 Subscribers", true)
                .addField("Attual Subscribers", "70", true)
                .addField("All videos", "30", true)           
                .addField("Playlist", "1 (discord.js)", true)
                .addField("All tutorials", "4", true)
                .addField("Account Created", "20/04/2019", true)
                .addField("Challenges", "Road to 1k views", true)
                message.channel.send(embed)
        
        
            
                
        
    }
}