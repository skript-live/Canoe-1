module.exports.run = async (client, message, args) => {
    msg = await message.channel.send('Fetching Ping...');
    await msg.edit([
        `**PING:** \`${MSG.createdTimestamp - message.createdTimestamp}ms\``,
        `**DiscordAPI:** \`${Math.round(client.ping)}ms\``
    ])
}
