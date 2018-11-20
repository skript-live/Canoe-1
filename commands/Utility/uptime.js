const ms = require('ms');

module.exports.run = (client, message, args) => {
	message.channel.send(`My current uptime is \`${ms(client.uptime)}\`.`)
};
