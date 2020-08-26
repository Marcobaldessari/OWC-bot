const data = require('../data.json')
const Character = require('../characterBuilder.js')

module.exports = {
	name: 'example',
	description: 'Example of a generated character',
	execute(message, args) {
		var char = new Character('player');
		message.channel.send(`
Here is a fresh example of a randomly generated character
------------
MIG: ${char.stats.might.modifier}   *(${char.stats.might.rolls})*
NIM: ${char.stats.nimb.modifier}   *(${char.stats.nimb.rolls})*
DIS: ${char.stats.discipline.modifier}   *(${char.stats.discipline.rolls})*
WIT: ${char.stats.wits.modifier}   *(${char.stats.wits.rolls})*
HP: ${char.hp}
------------
		`);
	},
};