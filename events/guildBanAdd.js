module.exports = (client, user, guild) => {
    log = message.guild.channels.find(c => c.name === client.settings.get(message.guild.id, 'logs'))
    if (log) return log.send(`:wizard: ${user.tag} \`(${user.id})\` has been **banned**. `)
};