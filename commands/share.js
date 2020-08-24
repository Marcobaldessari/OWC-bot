module.exports = {
	name: 'Share bot',
	description: 'Install the bot on other servers',
	execute(message, args) {
		message.channel.send("https://discord.com/api/oauth2/authorize?client_id=734332600801558548&permissions=0&scope=bot")
	},
};