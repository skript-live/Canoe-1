module.exports = (client, oldMessage, newMessage) => {
	console.log('1')
	if (message.author === client.user || !message.guild) return;
	console.log('2')
	if (oldMessage.content === newMessage.content) return;
	console.log('3')
	log = message.guild.channels.find(c => c.name === client.settings.get(message.guild.id, 'logs'))
	console.log(log)
	if (log) {
		log.send([
			`:pencil: ${oldMessage.author.tag} \`(${oldMessage.author.id})\` message edit in **#${oldMessage.channel.name}**:`,
            `**B:** ${oldMessage.cleanContent}`,
            `**A:** ${newMessage.cleanContent}`,
		])
		.catch();
	}
};