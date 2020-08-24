module.exports = {
	name: 'share',
	description: 'Install the bot on other servers',
	execute(message, args) {
		message.channel.send(`You can install me on other servers by following this link:
https://discord.com/api/oauth2/authorize?client_id=734332600801558548&permissions=0&scope=bot`)
	},
};