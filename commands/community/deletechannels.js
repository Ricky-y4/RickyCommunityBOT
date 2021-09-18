const Discord = require('discord.js');

module.exports = {
    name: "delete",
   async execute(message, args, bot){
      await message.channel.send(`
      Canale valido: ✅`)

      await message.channel.send(`
      **CANALE TROVATO** ✅`)

      await message.channel.send(`
      Canale in **eliminazione** ✅`)

      await message.channel.send(`
      Aspettare **10 secondi**    
      `)

      setTimeout(function () {
        message.channel.delete()
     }, 10000)
   }
}