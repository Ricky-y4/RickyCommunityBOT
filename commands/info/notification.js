const Discord = require('discord.js');

module.exports = {
    name: "config",
    alises: ["notification"],
    execute(message) {
        var embed = new Discord.MessageEmbed()
            .setTitle("Notification - " + message.member.user.tag)
            .setDescription("Impostare le notifiche da ricevere all'interno del server")
            .setThumbnail("https://i.postimg.cc/cLQ8kP4d/bell.png")
            .addField(message.member.roles.cache.has("856525034230120459") ? "📋 Announcements - :green_circle: ON" : "📋 Announcements - :red_circle: OFF", "Notifiche sugli annunci o notizie importanti sul canale/server")
            .addField(message.member.roles.cache.has("860165857803501611") ? "📰 News - :green_circle: ON" : "📰 News - :red_circle: OFF", "Notifiche su annunci un po' meno importanti")
            .addField(message.member.roles.cache.has("871795140568682566") ? "📝 Changelog - :green_circle: ON" : "📝 Changelog - :red_circle: OFF", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
            .addField(message.member.roles.cache.has("868937300942401636") ? "🔴 YouTube - :green_circle: ON" : "🔴 YouTube - :red_circle: OFF", "Notifiche sui video, Annunci su video e uscite")
        message.channel.send(embed)
            .then((msg) => {
                msg.delete({ timeout: 120000 })
                msg.react("📋")
                msg.react("📰")
                msg.react("📝")
                msg.react("🔴")
                message.delete({ timeout: 120000 })
                
                const reactAnnouncements = (reaction, user) => reaction.emoji.name === '📋'
                const reactNews = (reaction, user) => reaction.emoji.name === '📰'
                const reactChangelog = (reaction, user) => reaction.emoji.name === '📝'
                const reactYouTube = (reaction, user) => reaction.emoji.name === '🔴'
                const paginaAnnouncements = msg.createReactionCollector(reactAnnouncements)
                const paginaNews = msg.createReactionCollector(reactNews)
                const paginaChangelog = msg.createReactionCollector(reactChangelog)
                const paginaYouTube = msg.createReactionCollector(reactYouTube)
                paginaAnnouncements.on('collect', (r, u) => {
                    if (u.bot)
                        return
                    r.users.remove(r.users.cache.filter(u => u.bot == false).first())
                    if (u.id == message.author.id) {
                        var embed = new Discord.MessageEmbed()
                            .setTitle("Notification - " + message.member.user.tag)
                            .setDescription("Impostare le notifiche da ricevere all'interno del server")
                            .setThumbnail("https://i.postimg.cc/cLQ8kP4d/bell.png")
                        if (!message.member.roles.cache.has("856525034230120459")) {
                            message.member.roles.add("856525034230120459")
                            embed
                                .addField("📋 Announcements - :green_circle: ON", "Notifiche sugli annuncio o notizie importanti sul canale/server")
                        }
                        else {
                            message.member.roles.remove("856525034230120459")
                            embed
                                .addField("📋 Announcements - :red_circle: OFF", "Notifiche sugli annuncio o notizie importanti sul canale/server")
                        }
                        embed
                            .addField(message.member.roles.cache.has("860165857803501611") ? "📰 News - :green_circle: ON" : "📰 News - :red_circle: OFF", "Notifiche su annunci un po' meno importanti")
                            .addField(message.member.roles.cache.has("871795140568682566") ? "📝 Changelog - :green_circle: ON" : "📝 Changelog - :red_circle: OFF", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
                            .addField(message.member.roles.cache.has("868937300942401636") ? "🔴 YouTube - :green_circle: ON" : "🔴 YouTube - :red_circle: OFF", "Notifiche sui video, Annunci su video e uscite")
                        msg.edit(embed)
                    }
                })
                paginaNews.on('collect', (r, u) => {
                    if (u.bot)
                        return
                    r.users.remove(r.users.cache.filter(u => u.bot == false).first())
                    if (u.id == message.author.id) {
                        var embed = new Discord.MessageEmbed()
                            .setTitle("Notification - " + message.member.user.tag)
                            .setDescription("Impostare le notifiche da ricevere all'interno del server")
                            .setThumbnail("https://i.postimg.cc/cLQ8kP4d/bell.png")
                            .addField(message.member.roles.cache.has("815649916574629941") ? "📋 Announcements - :green_circle: ON" : "📋 Announcements - :red_circle: OFF", "Notifiche sugli annuncio o notizie importanti sul canale/server")
                        if (!message.member.roles.cache.has("860165857803501611")) {
                            message.member.roles.add("860165857803501611")
                            embed
                                .addField("📰 News - :green_circle: ON", "Notifiche su annunci un po' meno importanti")
                        }
                        else {
                            message.member.roles.remove("860165857803501611")
                            embed
                                .addField("📰 News - :red_circle: OFF", "Notifiche su annunci un po' meno importanti")
                        }
                        embed
                            .addField(message.member.roles.cache.has("871795140568682566") ? "📝 Changelog  - :green_circle: ON" : "📝 Changelog  - :red_circle: OFF", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
                            .addField(message.member.roles.cache.has("868937300942401636") ? "🔴 YouTube - :green_circle: ON" : "🔴 YouTube - :red_circle: OFF", "Notifiche sui video, Annunci su video e uscite")
                        msg.edit(embed)
                    }
                })
                paginaYouTube.on('collect', (r, u) => {
                    if (u.bot)
                        return
                    r.users.remove(r.users.cache.filter(u => u.bot == false).first())
                    if (u.id == message.author.id) {
                        var embed = new Discord.MessageEmbed()
                            .setTitle("Notification - " + message.member.user.tag)
                            .setDescription("Impostare le notifiche da ricevere all'interno del server")
                            .setThumbnail("https://i.postimg.cc/cLQ8kP4d/bell.png")
                            .addField(message.member.roles.cache.has("856525034230120459") ? "📋 Announcements - :green_circle: ON" : "📋 Announcements - :red_circle: OFF", "Notifiche sugli annuncio o notizie importanti sul canale/server")
                            .addField(message.member.roles.cache.has("860165857803501611") ? "📰 News - :green_circle: ON" : "📰 News - :red_circle: OFF", "Notifiche su annunci un po' meno importanti")
                            .addField(message.member.roles.cache.has("826784690487951370") ? "📝 Changelog  - :green_circle: ON" : "📝 Changelog  - :red_circle: OFF", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
                        if (!message.member.roles.cache.has("868937300942401636")) {
                            message.member.roles.add("868937300942401636")
                            embed
                                .addField("🔴 YouTube - :green_circle: ON", "Notifiche sui video, Annunci su video e uscite")
                        }
                        else {
                            message.member.roles.remove("868937300942401636")
                            embed
                                .addField("🔴 YouTube - :red_circle: OFF", "Notifiche sui video, Annunci su video e uscite")
                        }
                        msg.edit(embed)
                    }
                })
                paginaChangelog.on('collect', (r, u) => {
                    if (u.bot)
                        return
                    r.users.remove(r.users.cache.filter(u => u.bot == false).first())
                    if (u.id == message.author.id) {
                        var embed = new Discord.MessageEmbed()
                            .setTitle("Notification - " + message.member.user.tag)
                            .setDescription("Impostare le notifiche da ricevere all'interno del server")
                            .setThumbnail("https://i.postimg.cc/cLQ8kP4d/bell.png")
                            .addField(message.member.roles.cache.has("856525034230120459") ? "📋 Announcements - :green_circle: ON" : "📋 Announcements - :red_circle: OFF", "Notifiche sugli annuncio o notizie importanti sul canale/server")
                            .addField(message.member.roles.cache.has("860165857803501611") ? "📰 News - :green_circle: ON" : "📰 News - :red_circle: OFF", "Notifiche su annunci un po' meno importanti")
                        if (!message.member.roles.cache.has("871795140568682566")) {
                            message.member.roles.add("871795140568682566")
                            embed
                                .addField("📝 Changelog - :green_circle: ON", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
                        }
                        else {
                            message.member.roles.remove("871795140568682566")
                            embed
                                .addField("📝 Changelog - :red_circle: OFF", "Notifiche sulle nuove aggiunte e bug risolti dei bot ufficiali")
                        }
                        embed
                            .addField(message.member.roles.cache.has("868937300942401636") ? "🔴 YouTube - :green_circle: ON" : "🔴 YouTube - :red_circle: OFF", "Notifiche sui video, Annunci su video e uscite")
                        msg.edit(embed)
                    }
                })
            })
    }
}
    
   
