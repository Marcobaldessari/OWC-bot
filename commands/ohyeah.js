module.exports = {
	name: 'share',
	description: 'Install the bot on other servers',
	execute(message, args) {
        message.channel.send(`Maybe I can help you with that! 
        If you head to #barrowmaze-dice-rolling and type /character I can roll attributes for you 🎲`)
	},
};