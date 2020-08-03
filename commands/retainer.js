const data = require('../data.json')
const Character = require('../characterBuilder.js')

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
MIG: ${char.stats.might.modifier}   
NIM: ${char.stats.nimb.modifier}   
DIS: ${char.stats.discipline.modifier} 
WIT: ${char.stats.wits.modifier}   
HP: ${char.hp}
Carries a ${char.weapon} and a ${char.armour}
A former ${char.background}. ${char.flair}
			`);
		}
	},
};
