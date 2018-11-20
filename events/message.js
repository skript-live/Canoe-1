module.exports = async (client, message) => {
	if (message.author.bot) return;
	const conf = client.settings.ensure(message.guild.id, defaultS);
	if (message.content.indexOf(conf.prefix) !== 0) return;
	const args = message.content.slice(conf.prefix.length).trim().split(/ +/g);
 	const command = args.shift().toLowerCase();
	const cmd = client.commands.get(command);
	if (!cmd) return;
	cmd.run(client, message, args);
};