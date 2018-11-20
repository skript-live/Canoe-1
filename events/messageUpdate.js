module.exports = (client, oldMessage, newMessage) => {
	if (oldMessage.author === client.user || !oldMessage.guild) return;
	if (oldMessage.content === newMessage.content) return;
	const log = oldMessage.guild.channels.find(c => c.name === client.settings.get(oldMessage.guild.id, 'logs'))
	if (log) {
		log.send([
			`:pencil: ${oldMessage.author.tag} \`(${oldMessage.author.id})\` message edited in **#${oldMessage.channel.name}**:`,
            `**B:** ${oldMessage.cleanContent}`,
            `**A:** ${newMessage.cleanContent}`,
		])
		.catch();
	}
};