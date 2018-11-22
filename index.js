const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Enmap();
client.config = require('./config.json');
client.settings = new Enmap({
	name: 'settings',
	dataDir: './guilds',
	autoFetch: true,
	fetchAll: false,
	clonelevel: 'deep'
});
defaultS = {
	prefix: 'can ',
	modRole: 'none',
	mutedRole: 'none',
	logs: 'none',
	greeting: 'none',
	farewell: 'none',
};

fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

fs.readdir('./commands/admin', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/admin/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

fs.readdir('./commands/developer', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/developer/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

fs.readdir('./commands/moderation', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/moderation/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

fs.readdir('./commands/utility', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/utility/${file}`);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

setInterval (function () {
    //ONCE PER 10 MINS
}, 600000); 

client.on('ready', () => {
	console.log(`Successfully logged in as ${client.user.tag}`);
});

client.on('error', console.error);
client.on('promiseRejection', console.error);

client.login(client.config.token);
thanks sdf
