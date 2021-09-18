const Discord = require("discord.js");
const moment = require("moment")

module.exports = {
    name: "infractions",
    aliases: ["infraction", "infrazioni"],
    execute(message, args, bot) {
        

            if (!args[0]) {
                var utente = message.member;
            }
            else {
                var utente = message.mentions.members.first()
                if (!utente) {
                    var utente = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() == args.join(" ")) || message.guild.members.cache.find(user => user.user.tag.toLowerCase() == args.join(" ")) || message.guild.members.cache.find(user => user.nickname && user.nickname.toLowerCase() == args.join(" "))
                }
            }

            if (!utente) {
                error(message, "User not found", "`!warn [user] (reason)`")
                return
            }

            

           

            
            var warn = args.join(" ")     

            if (warn.length == 0) {
                embed
                    .addField(":interrobang: Total", "```Nessuna infrazione```", false)
                message.channel.send(embed)
            }
            else {
                var ultimi7d = 0
                var ultime24h = 0
                var elencoInfrazioni = ""

                for (var index in warn) {
                    var time = warn[index].time;
                    var timeOra = new Date().getTime();
                    var diff = timeOra - time;

                    if (diff <= 86400000) {
                        ultime24h++;
                    }
                    if (diff <= 604800000) {
                        ultimi7d++;
                    }
                }

                var totalPage = Math.ceil(warn.length / 10);
                let page = 0;

                for (var i = page * 10; i < (page * 10 + ((page * 10 + 10) > warn.length ? warn.length % 10 : 10)); i++) {
                    elencoInfrazioni += `#${i + 1} - ${warn[i].reason} (${moment(warn[i].time).fromNow()})\r`
                }

                var embed = new Discord.MessageEmbed()
                    .addField(":interrobang: Total", "```" + warn.length + "```", false)
                    .addField(":exclamation: Last 24 hours", "```" + ultime24h + "```", true)
                    .addField(":question: Last 7 days", "```" + ultimi7d + "```", true)

                if (totalPage != 1) {
                    var embed = new Discord.MessageEmbed()
                        .addField(`:no_entry_sign: All infractions ${page + 1}/${totalPage}`, "```" + elencoInfrazioni + "```", false)
                        .setFooter("Scorri tra le infrazioni con le reazioni qua sotto")
                }
                else {
                    var embed = new Discord.MessageEmbed()
                        .addField(":no_entry_sign: All infractions", "```" + elencoInfrazioni + "```", false)
                }

                message.channel.send(embed)
                    .then(msg => {
                        if (totalPage != 1) {

                            msg.react("◀️")
                            msg.react("▶️")

                            // Filters
                            const reactIndietro = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id
                            const reactAvanti = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id

                            const paginaIndietro = msg.createReactionCollector(reactIndietro)
                            const paginaAvanti = msg.createReactionCollector(reactAvanti)

                            paginaIndietro.on('collect', (r, u) => {
                                page--
                                page < 0 ? page = (totalPage - 1) : ""

                                var elencoInfrazioni = ""
                                for (var i = page * 10; i < (page * 10 + ((page * 10 + 10) > warn.length ? warn.length % 10 : 10)); i++) {
                                    elencoInfrazioni += `#${i + 1} - ${warn[i].reason} (${moment(warn[i].time).fromNow()})\r`
                                }

                                embed.fields[3].name = `:no_entry_sign: All infractions ${page + 1}/${totalPage}`
                                embed.fields[3].value = "```" + elencoInfrazioni + "```"

                                msg.edit(embed)

                                r.users.remove(r.users.cache.filter(u => u === message.author).first())
                            })
                            paginaAvanti.on('collect', (r, u) => {
                                page++
                                page > totalPage - 1 ? page = 0 : ""

                                var elencoInfrazioni = ""
                                for (var i = page * 10; i < (page * 10 + ((page * 10 + 10) > warn.length ? warn.length % 10 : 10)); i++) {
                                    elencoInfrazioni += `#${i + 1} - ${warn[i].reason} (${moment(warn[i].time).fromNow()})\r`
                                }

                                embed.fields[3] = `:no_entry_sign: All infractions ${page + 1}/${totalPage}`
                                embed.fields[3] = "```" + elencoInfrazioni + "```"

                                msg.edit(embed)

                                r.users.remove(r.users.cache.filter(u => u === message.author).first())
                            })
                        }
                    })
            }

        
    },
};
