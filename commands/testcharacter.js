const data = require('../data.json')
const Character = require('../characterBuilder.js')

module.exports = {
	name: 'testcharacter',
	description: 'Character generation test',
	execute(message, args) {
		var char = new Character('player');
		message.channel.send(`
Alright let's try rolling some stats for fun.
When you are ready, type /character and we'll roll stats for your next character.
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