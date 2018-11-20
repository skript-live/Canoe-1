module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const modRole = message.guild.roles.find(r => r.name === conf.modRole);
	if(!modRole) return message.channel.send('This guild has yet to set the moderator role.')
	if(!message.member.roles.has(modRole.id)) {
		return message.channel.send('You are missing the moderator role.')
	}
	if (!args[0] || args[0] > 100 || args[0] < 1) { 
		message.channel.send('You may only purge 1-100 messages.')
		return;
	}
	message.delete();
	const messages = await message.channel.fetchMessages({limit: parseInt(args[0], 10)})
	await message.channel.bulkDelete(messages).catch;
	const msg = await message.channel.send(`:ok_hand: Cleared **${messages.array().length}** messages.`)
	msg.delete(10000);
};