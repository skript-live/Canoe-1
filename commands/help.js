module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const prefix = conf.prefix;
	message.channel.send('You can find a command reference here: ')
}
