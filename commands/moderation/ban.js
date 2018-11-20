const Discord = require('discord.js');

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
	if (!user.kickable) return message.channel.send(`:no_entry_sign: Insufficient Permissions`);
	const reason = args.slice(1).join(' ');
	user.send([
		`Hi`,
		``,
		`You've received a **__Ban__** on **${message.guild.name}**`,
	])
	const banned = new Discord.RichEmbed()
		.setTitle(`Moderation action on ${message.guild.name}`)
		.setDescription('A moderation action has been taken against you')
		.setFooter('This is an automated message. Contact the moderators for more information')
		.setColor('#7F0E01')
		.addField('Action', 'Banned', true)
		.addField('Moderator', message.member.name, true)
		.addField('Reason', reason, true)
		.addField('Expires', 'Never')
	await user.ban(reason).catch(() => 'e');
	message.channel.send(`:ok_hand: Successfully banned ${user.user.tag}.`)
	await user.send(banned).catch(() => 'e');
};