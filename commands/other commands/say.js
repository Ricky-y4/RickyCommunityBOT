module.exports = {
    name: "say",
    execute(message){
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");

        if (!testo) {
            message.channel.send("Inserire un messaggio");
            return
        }

        message.delete()
        message.channel.send(testo)
    }
}