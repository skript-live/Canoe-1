exports.run = async (client, message, args) => {
	const conf = client.settings.ensure(message.guild.id, defaultS);
	const modRole = message.guild.roles.find(r => r.name === conf.modRole);
	if(!modRole) return message.channel.send('This guild has yet to set the moderator role.')
	if(!message.member.roles.has(modRole.id)) {
		return message.channel.send('You are missing the moderator role.')
	}
	let reason = args.slice(1).join(' ');
	client.unbanReason = reason;
	client.unbanAuth = message.author;
	if (!args[0]) return message.channel.send(`Missing Arguments. \`${conf.prefix}unban [user resolvable]\``)
	let user = args[0];
	if (!user) return message.channel.send(`Couldn't convert '\`${args[0]}\`' to type \`UserResolvable\`.`);
	message.channel.send(`:ok_hand: Successfully unbanned ${args[0]}.`)
	await message.guild.unban(user);
  };