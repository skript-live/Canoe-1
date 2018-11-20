const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send(`You don't have access to that.`);
	if (!args[0] && !args[1]) {
		const configuration = new Discord.RichEmbed()
			.setTitle(message.guild.name + ' configuration')
			.setAuthor(message.guild.name, message.guild.icon)
			.setImage(message.guild.icon)
			.setColor('#FF5533')
			.setDescription([
				`\n`,
				`\`Prefix\`: \`${conf.prefix}\``,
				`\`ModRole\`: \`${conf.modRole}\``,
				`\`MutedRole\`: \`${conf.muteRole}\``,
				`\`Logs\`: \`${conf.logs}\``,
				`\`Greeting\`: \n${conf.greeting}`,
				`\`Farewell\`: \n${conf.farewell}`,
				``
			])
		return message.channel.send(configuration)
	}
	if (args[0] === 'reset') {
		client.settings.delete(message.guild.id);
		return message.channel.send(`Successfully reset all configuration for \`${guild.name}\`.`
	}
	if (args[0] === 'prefix') {
		if (args[1] === 'reset') {
			client.settings.delete(message.guild.id, `prefix`);
			return message.channel.send(`Successfully reset the prefix.`)
		}
		if (args.join().slice(1).length > 8) return message.channel.send(`The prefix must be below 8 characters.`)
		client.settings.set(message.guild.id, args.join().slice(1), `prefix`);
		return message.channel.send(`Successfully updated the prefix to \`${args.join().slice(1)}\`.`;
	}
	if (args[0] === 'modrole') {
		if (args[1] === 'reset') {
			client.settings.delete(message.guild.id, `modRole`);
			return message.channel.send ('Successfully reset the ModRole.')
		}
		return;  
	}
	if (args[0] === 'logs') {
		if (args[1] === 'reset') {
			client.settings.delete(message.guild.id, `logs`);
			return message.channel.send ('Successfully disabled all logging.')
		}
		return;  
	}
	if (args[0] === 'greeting') {
		if (args[1] === 'reset') {
			client.settings.delete(message.guild.id, `greeting`);
			return message.channel.send ('Successfully disabled member greeting.')
		}
		return;  
	}
	if (args[0] === 'farewell') {
		if (args[1] === 'reset') {
			client.settings.delete(message.guild.id, `farewell`);
			return message.channel.send ('Successfully disabling member farewells.')
		}
		return;  
	}
	else {
		return;
	}
};
