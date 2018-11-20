module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const modRole = message.guild.roles.find(r => r.name === conf.modRole);
	if(!modRole) return message.channel.send('This guild has yet to set the moderator role.')
	if(!message.member.roles.has(modRole.id)) {
		return message.channel.send('You are missing the moderator role.')
	}