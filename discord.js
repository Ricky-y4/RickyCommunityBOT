const ytch = require('yt-channel-info');

const Discord = require('discord.js');
global.bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});


bot.login("your token");

const ms = require('ms')
const moment = require("moment")

const disbut = require("discord-buttons");
disbut(bot);

const { MessageMenuOption, MessageMenu } = require("discord-buttons")

const { MessageButton, MessageActionRow } = require("discord-buttons");

const MongoClient = require("mongodb").MongoClient;












bot.on("ready", () => {
    console.log("-- RickyCommunity BOT is ONLINE --")
})

const fs = require("fs");

bot.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles){
    var command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);

}

const commandsFolder = fs.readdirSync("./commands");
for(const folder of commandsFolder){
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for(const file of commandsFiles){
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}

bot.on("message", (message) => {
    const prefix = "!r";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    
    var comando = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (!bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))){
        let embed = new Discord.MessageEmbed()
            .setTitle("Command not found")
            .setThumbnail("https://i.postimg.cc/02SYb7Lt/browser-1.png")
            .setColor("#FF931E")
            .setDescription(`The command \`${prefix}${command}\` does not exist `)
        message.channel.send(embed)
        return;
    }

    
    comando.execute(message, args, bot);
})


const eventsFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventsFiles) {
    const event = require(`./events/${file}`);
    bot.on(event.name, (...args) => event.execute(...args))
}





    
   







bot.on('ready', () => {
    
    bot.user.setActivity('!rhelp', { type: 'PLAYING' }); 
    
    bot.user.setActivity("!rhelp", {
        type: "PLAYING",
        
    });
})

bot.on('ready', () => {
    var canale = bot.channels.cache.get("888008872051241000")
        var data = new Date();
         var ora = data.getHours();
          var minuto = data.getMinutes();
    var embed = new Discord.MessageEmbed()
      .setTitle("🟢 | BOT ON")
      .setDescription("Bot andato online! 🟢")
      .addField("**⏰ Time:** ", "```" + ora + ":" + minuto + "```", true)
      .setFooter("Powered by R1icky ~ #0191")
      .setColor("#18f23a")
    canale.send(embed)
})





    






//TICKET MESSAGE
bot.on("message", message => {
    if (message.content == "msg-button"){
     if (!message.member.hasPermission("ADMINISTRATOR")) {
            return
        }
        var embed = new Discord.MessageEmbed()
           .setTitle("Need help?")
           .setDescription("If you need **help** from the staff or you want to **report** a user just click on the **button** and open a ticket where you can request **support**")
        let button = new disbut.MessageButton()
           .setLabel("Open a ticket")
           .setStyle("blurple")
           .setID("apriTicket")
        message.channel.send(embed, button)
       
    }
})


//TICKET SYSTEM
bot.on("clickButton", (button) => {
    button.reply.defer()
    if (button.id == "apriTicket") {
        button.message.guild.channels.create(`ticket-${button.clicker.user.username}`, {
            type: "text",
        }).then((canale) => {
            //SETTAGGI OPZIONALI
            canale.setTopic(button.clicker.id);  
            canale.overwritePermissions([
                /*
                    id = id dell'utente/ruolo
                    allow = permessi che vengono concesse in quel canale
                    deny = permessi che vengono tolte in quel canale
                */
                {
                    id: "846827140192403496", //everyone
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: button.clicker.id, //membro che ha aperto il ticket
                    allow: ['VIEW_CHANNEL', 'ATTACH_FILES', 'SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
                },
                {
                    id: "853578005430665266", //helpers
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
                },
                {
                    id: "853580440254545950", //moderatori
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
                },
                {
                    id: "846827140192403497", //ruolo membro
                    deny: ['VIEW_CHANNEL']
                },
                 
               
            ])
             
              canale.send(`<@&878301412612796507>
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤
Heyy ${button.clicker.user.toString()}! Welcome to your ticket. Reminder abuse of tickets will result in a **warning** or **softban**!
⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤`)
                let button1 = new disbut.MessageButton()
                  .setLabel("Close ticket")
                  .setStyle("red")
                  .setID("chiudiTicket")
                let button2 = new disbut.MessageButton()
                  .setLabel("Report a user")
                  .setStyle("green")
                  .setID("reportaUser")
                var row = new MessageActionRow()
                 .addComponent(button1)
                 .addComponent(button2)
                canale.send(`Hey ${button.clicker.user.username}, My name is <@!810183899903688736> What's wrong?`, row)
               
               
        })
    }
})




//REPORTA USER
bot.on("clickButton", (button) => {
    if (button.id == "reportaUser"){
        let button3 = new disbut.MessageButton()
          .setLabel("Reported")
          .setStyle("blurple")
          .setID("userReportato")
        button.message.channel.send("Which user would you like to **report**? When you have **mentioned** the user, click on the button **below**", button3)
    }

        
    

})


//USER REPORTATO
bot.on("clickButton", (button) => {
    if (button.id == "userReportato"){
        button.message.channel.send("Thank you, <@&878301412612796507> will be with you shortly!")
    }
})


//CHIUDI TICKET
bot.on("clickButton", (button) => {
    if (button.id == "chiudiTicket") {
        button.message.channel.send("This ticket will be deleted in **10 seconds** <a:yes:882326605358305330>")
        setTimeout(function () {
            button.message.channel.delete()
        }, 10000)
    }
}) 

//BANNED SYSTEM
bot.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return
    if (messageReaction.message.partial) await messageReaction.message.fetch();
    if (messageReaction._emoji.name == "🥊") { //Personalizzare l'emoji della reaction
        if (messageReaction.message.channel.id == "876357311575257108") { //Settare canale
            messageReaction.users.remove(user);
            var server = messageReaction.message.channel.guild;
            if (server.channels.cache.find(canale => canale.topic == `User ID: ${user.id}`)) {
                user.send("Hai gia un ticket aperto").catch(() => { })
                return
            }
            server.channels.create(`ban-${user.username}`, {
                type: "text"
            }).then(canale => {
                canale.setTopic(`User ID: ${user.id}`);
                canale.setParent("846827140376428632") //Settare la categoria
                canale.overwritePermissions([
                    {
                        id: server.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: user.id,
                        allow: ["VIEW_CHANNEL", "ATTACH_FILES", "ADD_REACTIONS"]
                    }
                ])
                var embed = new Discord.MessageEmbed()
                  .setTitle("Just wait")
                  .setDescription("Our moderation team will be with you soon")
                canale.send(embed)
            })
        }
    }
})

//ISCRITTI COUNTER
setInterval(function () {
    var canale = bot.channels.cache.get("886954287308107776")
    ytch.getChannelInfo("UClYtI5Jkx2z5tpYeY_oJYSg")
        .then(response => {
            canale.setName(`👥┛Subscribers: ${response.subscriberCount}`)
        })
}, 1000 * 20)

//MEMBER COUNTER
setInterval(function () {
    var server = bot.guilds.cache.get("846827140192403496");
    var botCount = server.members.cache.filter(member => member.user.bot).size;
    var utentiCount = server.memberCount - botCount;

    var canale = bot.channels.cache.get("888139122450006047")
    canale.setName("👥┛Members: " + utentiCount)
}, 1000 * 20)


//LAST VIDEO
bot.on("messageCreate", message => {
    if (message.content == "!rlastvideo") {
        ytch.getChannelVideos("UClYtI5Jkx2z5tpYeY_oJYSg")
            .then(response => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("Last Youtube video")
                    .setDescription("Last YouTube video on my channel")
                    .addField("**Title:**", response.items[0].title)
                    .addField("**Link:**", "https://www.youtube.com/watch?v=" + response.items[0].videoId)
                    .addField("**Views:** ", response.items[0].viewCount.toString())
                    .addField("**Duration:**", response.items[0].durationText)
                    .addField("**Published:**", response.items[0].publishedText)
                    .setImage(response.items[0].videoThumbnails[3].url)

                message.channel.send(embed)
            })
    }
})




//THINGS TO DO
bot.on("message", message => {
    if (message.content.startsWith("!rttd")){
        
        var ttd = message.content.slice(5).trim()
        
        if (!ttd) {
            error(message, "Inserire una cosa da fare", "`!ttd [text]`")
            return
        }

        if (!message.member.hasPermission("ADMINISTRATOR")){
            return;
        }

        var embed = new Discord.MessageEmbed()
            .addField("Status", "```⚪Uncompleted```")
            .addField("Thing to do...", "```" + ttd + "```", true)
            .addField(":alarm_clock: Time", "```" + moment(new Date().getTime()).format("ddd DD MMM, HH:mm") + "```", false)
            .setColor("#E6E7E8")

        let option1 = new MessageMenuOption()
            .setLabel('Uncompleted')
            .setEmoji('⚪')
            .setValue('ttdWhite')
            .setDescription('Thing to do non ancora completata')
        let option2 = new MessageMenuOption()
            .setLabel('In progress')
            .setEmoji('🟠')
            .setValue('ttdOrange')
            .setDescription('Thing to do in progresso')
        let option3 = new MessageMenuOption()
            .setLabel('Urgent')
            .setEmoji('🔴')
            .setValue('ttdRed')
            .setDescription('Thing to do urgente da realizzare')
        let option4 = new MessageMenuOption()
            .setLabel('Completed')
            .setEmoji('🟢')
            .setValue('ttdGreen')
            .setDescription('Thing to do completata')
        let option5 = new MessageMenuOption()
            .setLabel('Tested')
            .setEmoji('🔵')
            .setValue('ttdBlue')
            .setDescription('Thing to do testata e funzionante')
        let option6 = new MessageMenuOption()
            .setLabel('Finished')
            .setEmoji('⚫')
            .setValue('ttdBlack')
            .setDescription('Thing to do terminata')
        let option7 = new MessageMenuOption()
            .setLabel('Delete')
            .setEmoji('❌')
            .setValue('ttdDelete')
            .setDescription('Elimina Thing to do')

        let select = new MessageMenu()
            .setID('ttdMenu')
            .setPlaceholder('Select status...')
            .setMaxValues(1)
            .setMinValues(1)
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
            .addOption(option5)
            .addOption(option6)
            .addOption(option7)

        message.channel.send(embed, select)
    }
})

//TTD MENU
bot.on("clickMenu", (menu) => {
        if (!menu.id == "ttdMenu") return;
            menu.reply.defer()
    
            var embed = menu.message.embeds[0]
    
            let option1 = new MessageMenuOption()
                .setLabel('Uncompleted')
                .setEmoji('⚪')
                .setValue('ttdWhite')
                .setDescription('Thing to do non ancora completata')
            let option2 = new MessageMenuOption()
                .setLabel('In progress')
                .setEmoji('🟠')
                .setValue('ttdOrange')
                .setDescription('Thing to do in progresso')
            let option3 = new MessageMenuOption()
                .setLabel('Urgent')
                .setEmoji('🔴')
                .setValue('ttdRed')
                .setDescription('Thing to do urgente da realizzare')
            let option4 = new MessageMenuOption()
                .setLabel('Completed')
                .setEmoji('🟢')
                .setValue('ttdGreen')
                .setDescription('Thing to do completata')
            let option5 = new MessageMenuOption()
                .setLabel('Tested')
                .setEmoji('🔵')
                .setValue('ttdBlue')
                .setDescription('Thing to do testata e funzionante')
            let option6 = new MessageMenuOption()
                .setLabel('Finished')
                .setEmoji('⚫')
                .setValue('ttdBlack')
                .setDescription('Thing to do terminata')
            let option7 = new MessageMenuOption()
                .setLabel('Delete')
                .setEmoji('❌')
                .setValue('ttdDelete')
                .setDescription('Elimina Thing to do')
    
            let select = new MessageMenu()
                .setID('ttdMenu')
                .setPlaceholder('Select status...')
                .setMaxValues(1)
                .setMinValues(1)
                .addOption(option1)
                .addOption(option2)
                .addOption(option3)
                .addOption(option4)
                .addOption(option5)
                .addOption(option6)
                .addOption(option7)
            
            switch (menu.values[0]) {
                case "ttdWhite": {
                    embed.fields[0].value = "```⚪Uncompleted```";
                    embed.color("15132648")
                } break
                case "ttdOrange": {
                    embed.fields[0].value = "```🟠In progress```";
                    embed.setColor("#ff9900")
                } break
                case "ttdRed": {
                    embed.fields[0].value = "```🔴Urgent```";
                    embed.color = "14495300"
                } break
                case "ttdGreen": {
                    embed.fields[0].value = "```🟢Completed```";
                    embed.color = "7909721"
                } break
                case "ttdBlue": {
                    embed.fields[0].value = "```🔵Tested```";
                    embed.color = "5614830"
                } break
                case "ttdBlack": {
                    embed.fields[0].value = "```⚫Finished```";
                    embed.color = "3225405"
                } break
                case "ttdDelete": {
                    menu.message.delete()
                    return
                } break
    
            }
            menu.message.edit(embed, select)
})



//TTD EDIT
bot.on("clickMenu", (menu) => {
    if (message.author.bot) return
        if (message.channel.id == "888023477465010176")
        message.delete()

        if (!message.reference) return

        bot.channels.cache.get("888023477465010176").messages.fetch("888023477465010176")
            .then(msg => {
                if (!msg.embeds[0]) return

                const args = message.content.split(/ +/);

                var ttd = message.content.slice(5).trim()
                
                let option1 = new MessageMenuOption()
                    .setLabel('Uncompleted')
                    .setEmoji('⚪')
                    .setValue('ttdWhite')
                    .setDescription('Thing to do non ancora completata')
                let option2 = new MessageMenuOption()
                    .setLabel('In progress')
                    .setEmoji('🟠')
                    .setValue('ttdOrange')
                    .setDescription('Thing to do in progresso')
                let option3 = new MessageMenuOption()
                    .setLabel('Urgent')
                    .setEmoji('🔴')
                    .setValue('ttdRed')
                    .setDescription('Thing to do urgente da realizzare')
                let option4 = new MessageMenuOption()
                    .setLabel('Completed')
                    .setEmoji('🟢')
                    .setValue('ttdGreen')
                    .setDescription('Thing to do completata')
                let option5 = new MessageMenuOption()
                    .setLabel('Tested')
                    .setEmoji('🔵')
                    .setValue('ttdBlue')
                    .setDescription('Thing to do testata e funzionante')
                let option6 = new MessageMenuOption()
                    .setLabel('Finished')
                    .setEmoji('⚫')
                    .setValue('ttdBlack')
                    .setDescription('Thing to do terminata')
                let option7 = new MessageMenuOption()
                    .setLabel('Delete')
                    .setEmoji('❌')
                    .setValue('ttdDelete')
                    .setDescription('Elimina Thing to do')

                let select = new MessageMenu()
                    .setID('ttdMenu')
                    .setPlaceholder('Select status...')
                    .setMaxValues(1)
                    .setMinValues(1)
                    .addOption(option1)
                    .addOption(option2)
                    .addOption(option3)
                    .addOption(option4)
                    .addOption(option5)
                    .addOption(option6)
                    .addOption(option7)

                msg.embeds[0].fields[1].value = "```" + ttd + "```"
                msg.edit(msg.embeds[0], select)
            
        })            
            
})