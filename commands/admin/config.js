const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const sliced = args.slice(1);
	if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(`You don't have access to that.`);
	if (!args[0] && !args[1]) {
		const configuration = new Discord.RichEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setThumbnail(message.guild.iconURL)
			.setColor('#FF5533')
			.setDescription([
				`\n`,
				`\`Prefix\`: ${conf.prefix}`,
				`\`ModRole\`: ${conf.modRole}`,
				`\`MutedRole\`: ${conf.muteRole}`,
				`\`Logs\`: ${conf.logs}`,
				`\`Greeting\`: \n${conf.greeting}`,
				`\`Farewell\`: \n${conf.farewell}`,
				``
			])
		return message.channel.send(configuration).catch();
	}
	if (args[0] === 'reset' || args[0] === 'Reset') {
		client.settings.delete(message.guild.id);
		return message.channel.send(`Successfully reset all configuration for \`${message.guild.name}\`.`)
	}
	if (args[0] === 'prefix' || args[0] === 'Prefix') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `prefix`);
			return message.channel.send(`Successfully reset the prefix.`)
		}
		client.settings.set(message.guild.id, sliced, `prefix`);
		return message.channel.send(`Successfully updated the prefix to \`${sliced}\`.`);
	}
	if (args[0] === 'modrole' || args[0] === 'ModRole') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `modRole`);
			return message.channel.send ('Successfully reset the ModRole.')
		}
		return;  
	}
	if (args[0] === 'mutedrole' || args[0] === 'MutedRole') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `mutedRole`);
			return message.channel.send ('Successfully reset the MutedRole.')
		}
		return;  
	}
	if (args[0] === 'logs' || args[0] === 'Logs') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `logs`);
			return message.channel.send ('Successfully disabled all logging.')
		}
		return;  
	}
	if (args[0] === 'greeting' || args[0] === 'Greeting') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `greeting`);
			return message.channel.send ('Successfully disabled member greeting.')
		}
		return;  
	}
	if (args[0] === 'farewell' || args[0] === 'Farewell') {
		if (args[1] === 'reset' || args[1] === 'Reset') {
			client.settings.deleteProp(message.guild.id, `farewell`);
			return message.channel.send ('Successfully disabling member farewells.')
		}
		return;  
	}
	else {
		return;
	}
};
