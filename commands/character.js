const data = require('../data.json')
const Character = require('../characterBuilder.js')

module.exports = {
	name: 'character',
	description: 'Character generation helper',
	execute(message, args) {
		var char = new Character('player');
		message.channel.send(`
Rolling stats for a new character, may luck be on your side!
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