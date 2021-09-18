module.exports = {
    name: "time",
    execute(message){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();
        

        message.channel.send("**Ora attuale⏰:**" + ora + ":" + minuto)
    }
        
}