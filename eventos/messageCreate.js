const config = require('../config.json')

module.exports = {
	name: 'messageCreate',
	run(client, message){

  const prefix = config.prefix

  if(message.author.bot) return;
			if(message.content.startsWith(prefix)) {
		let args = message.content.slice(prefix.length).split(' ')
	let comando = args.shift().toLowerCase();
  		
	let cmd = client.commands.find((c) => c.name === comando || c.aliases && c.aliases.includes(comando))

	if(cmd) {
		try{
		cmd.run(client, message, args)
		} catch (e) {
			console.log(e)
      		}
	}
		
	  }
	}
} 
