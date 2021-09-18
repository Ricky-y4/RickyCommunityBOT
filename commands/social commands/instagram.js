const Discord = require('discord.js');

module.exports = {
    name: "instagram",
    aliases: ["insta, Insta, Instagram"],
    execute(message, args){
        message.channel.send(`
---🟣 𝐄𝐂𝐂𝐎 𝐈𝐋 𝐋𝐈𝐍𝐊 🟣---
Ecco il link del mio profilo Instagram!
**LINK:🔗** https://www.instagram.com/r1cky_1k/`)
    }
}