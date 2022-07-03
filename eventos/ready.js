const Discord = require('discord.js')

module.exports = async (client) => {

const estados = ["MODERANDO", "PROGRAMANDO"]

setInterval(() => {
	function presence() {
client.user.setPresence({ 
 activities: [{
 name: estados[Math.floor(Math.random() * estados.length)], 
 type: 'PLAYING' }], 
 status: 'idle' });
}
	presence();
}, 10000)

}  