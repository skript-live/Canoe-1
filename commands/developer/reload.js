const fs = require('fs')

module.exports.run = (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const prefix = conf.prefix;
	if(!args[0] || args[0].size < 1) return message.channel.send(`**USAGE:** \`${prefix}reload [<filename>]\``)
	const commandName = args[0];
	if(!client.commands.has(commandName)) {
		return message.channel.send(`It seems \`${args[0]}.js\` does not exist.`);
	}
	if (fs.existsSync(`../admin/${commandName}.js`)) {
		delete require.cache[require.resolve(`../admin/${commandName}.js`)];
		client.commands.delete(commandName);
		const props = require(`../admin/${commandName}.js`);
		client.commands.set(commandName, props);
		return message.channel.send(`Successfully reloaded \`${commandName}.js\`.`);
	}
	if (fs.existsSync(`../developer/${commandName}.js`)) {
		delete require.cache[require.resolve(`../developer/${commandName}.js`)];
		client.commands.delete(commandName);
		const props = require(`../developer/${commandName}.js`);
		client.commands.set(commandName, props);
		return message.channel.send(`Successfully reloaded \`${commandName}.js\`.`);
	}
	if (fs.existsSync(`../moderation/${commandName}.js`)) {
		delete require.cache[require.resolve(`../moderation/${commandName}.js`)];
		client.commands.delete(commandName);
		const props = require(`../moderation/${commandName}.js`);
		client.commands.set(commandName, props);
		return message.channel.send(`Successfully reloaded \`${commandName}.js\`.`);
	}
	delete require.cache[require.resolve(`../${commandName}.js`)];
	client.commands.delete(commandName);
	const props = require(`../${commandName}.js`);

	client.commands.set(commandName, props);
	message.channel.send(`Successfully reloaded \`${commandName}.js\`.`);
};
