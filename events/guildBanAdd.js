module.exports = (client, user, guild) => {
    log = guild.channels.find(c => c.name === client.settings.get(guild.id, 'logs'))
    if (log) return log.send(`:wizard: ${user.tag} \`(${user.id})\` has been **banned**. `)
};