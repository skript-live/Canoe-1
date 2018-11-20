module.exports = (client, message) => {
	if (message.author.bot || !message.guild) return;
	log = message.guild.channels.find(c => c.name === client.settings.get(message.guild.id, 'logs'))
	if (log) {
		log.send([
			`:wastebasket: ${message.author.tag} \`(${message.author.id})\` message deleted in **#${message.channel.name}**:`,
			`${message.cleanContent}`
		])
		.catch();
	}
};