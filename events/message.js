module.exports = async (client, message) => {
	if (message.author.bot) return;
	if (message.author.tag === 'MrScopes#5546') if (message.content === '(fix config for guild)') return client.settings.delete(message.guild.id);
	const conf = client.settings.ensure(message.guild.id, defaultS);
	if (message.content.indexOf(conf.prefix) !== 0) return;
	const args = message.content.slice(conf.prefix).trim().split(/ +/g);
	console.log(args)
	const command = args.shift().toLowerCase();
	console.log(command)
	const cmd = client.commands.get(command);
	if (!cmd) return;
	cmd.run(client, message, args);
};