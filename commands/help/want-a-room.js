const disbut = require('discord-buttons');
const Discord = require('discord.js');

module.exports = {
    name: "room",
    execute(message, args, bot){
        let embed = new Discord.MessageEmbed()
          .setTitle("Want a Room?")
          .setDescription("If you **want** a room just click on the **button** below and follow the **steps!**")
        let button = new disbut.MessageButton()
           .setLabel("I want a room!")
           .setStyle("blurple")
           .setID("room-steps")
        message.channel.send(embed, button) 
    }
}