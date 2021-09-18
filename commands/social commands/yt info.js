const ytch = require('yt-channel-info');
const Discord = require('discord.js');

module.exports = {
    name: "yt-video",
    execute(message, args, bot){
        var canale = bot.channels.cache.get("869160700038242304")
        canale.send(`
-------------:red_circle: 𝐍𝐄𝐖 𝐕𝐈𝐃𝐄𝐎 :red_circle:-------------

> <:YouTubeEmoji:871823865020579911> Hey guys, a new video is out!
>  Go and watch it now!
        
> **LINK:link::** https://www.youtube.com/watch?v=d3Wdq0kaGis
        
<@&868937300942401636>`)
    }
}