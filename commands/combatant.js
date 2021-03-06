const data = require('../data.json')
const Character = require('../characterBuilder.js')

module.exports = {
	name: 'combatant',
	description: 'Create a combatant character',
	execute(message, args) {
		if(!args[0]){args[0] = 1};
		for (let i = 0; i < args[0]; i++) {
			var char = new Character('combatant');
			message.channel.send(`
			⠀
------------
**${char.name}**
------------
*${char.gender} ${char.type} (${char.price})*
HP: ${char.hp}
Carries a ${char.weapon} and a ${char.armour}
${char.flair}
			`);
		}
	},
};