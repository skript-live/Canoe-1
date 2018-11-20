module.exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const modRole = message.guild.roles.find(r => r.name === conf.modRole);
	if(!modRole) return message.channel.send('This guild has yet to set the moderator role.')
	if(!message.member.roles.has(modRole.id)) {
		return message.channel.send('You are missing the moderator role.')
	}
	if (!args[0] || !args[1]) return message.channel.send(`Missing Arguments. \`${conf.prefix}ban [@user|user id] [reason]\``)
	let user = message.mentions.members.first();
	if (!user) user = message.guild.members.get(args[0]);
	if (!user) return message.channel.send(`Couldn't convert '\`${args[0]}\`' to type \`guildMember\`.`);
	if (!user.managable) return message.channel.send(`:no_entry_sign: Insufficient Permissions`);
	const reason = args.slice(1).join(' ');
	await user.ban(reason);
	message.channel.send(`:ok_hand: Successfully banned ${user.user.tag}.`)
};