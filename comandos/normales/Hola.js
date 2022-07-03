const Discord = require('discord.js');

module.exports = {
    name: "hola",
    aliases: ["h"],
    run: async (client, message, args) => {

        message.reply({ content: 'hola' })

 }
 
};  
