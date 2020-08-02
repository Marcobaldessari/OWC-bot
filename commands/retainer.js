const data = require('../data.json')
const Character = require('../person.js')

module.exports = {
	name: 'retainer',
	description: 'Create a retainer character',
	execute(message, args) {
		if(!args[0]){args[0] = 1};
		for (let i = 0; i < args[0]; i++) {
			var char = new Character('retainer');
			message.channel.send(`
			⠀
------------
**${char.name}**
------------
*${char.gender} ${char.type} (${char.price})*
MIG: ${char.stats.might.modifier}   (${char.stats.might.rolls})
NIM: ${char.stats.nimb.modifier}   (${char.stats.nimb.rolls})
DIS: ${char.stats.discipline.modifier}   (${char.stats.discipline.rolls})
WIT: ${char.stats.wits.modifier}   (${char.stats.wits.rolls})
HP: ${char.hp}
Carries a ${char.weapon} and a ${char.armour}
A former ${char.background}, ${char.animal}
			`);
		}
	},
};
