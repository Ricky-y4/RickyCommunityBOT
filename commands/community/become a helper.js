const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment")

module.exports = {
        name: "ciao",
        aliases: ["prova"],
        async execute(message, args, bot) {
                const { MessageButton } = require('discord-buttons');
                const { MessageActionRow } = require('discord-buttons')


                var button = new MessageButton()
                        .setLabel("Apply")
                        .setStyle("url")
                        .setURL("https://docs.google.com/forms/d/e/1FAIpQLSdCyiu_rJbUiahl2oTxHrbjYFDSbtXpcQtIiVHCUn9DxvcZCA/viewform")
                        

                await message.channel.send(`
:man_raising_hand: **Become A HELPER**:woman_raising_hand:
Are you a person who is eager and able to help others? Do you have a good knowledge in the field of programming?
Apply now to become an in-server helper
`, { files: ["https://i.postimg.cc/4ycdfBbW/Banner.jpg"] })



                await message.channel.send(`
:question: **What does it mean to be HELPERS?**
Your assignment will that of help and explain, trying to solve, small problems of users in the server, mainly in the context of Javascript and Discord.js
ᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳ`)
                await message.channel.send(`
:man_shrugging: **What do I GET?**
All helpers will get:
- A role that distinguishes them among the members
- See all support tickets
- A private chat to talk to the staff
ᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳ
`)
                await message.channel.send(`
:envelope_with_arrow: **How to APPLY**
To apply, simply click on the button below "CANDIDATES" to start filling out a form.
You will have to answer and fill out several questions, both PERSONAL and THEORETICAL, so that the staff can find the right people for this role

After you have applied, the staff will read your proposal as soon as possible, and if you are chosen, you will start the "trial period".
For at least a week you will receive the ":fire:Helper on trial" role that will have the same privileges as the original role.
At the end of this period, it will be decided whether you are the right person, receiving the helper role, or if you do not do for us
`)
                await message.channel.send(`
:point_down: Click below to apply
`, button)
        },
};
