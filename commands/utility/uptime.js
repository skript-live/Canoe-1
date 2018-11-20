const ms = require('ms');

module.exports.run = (client, message, args) => {
	message.channel.send(`I have been up for \`${ms(client.uptime)}\`.`)
};
