const porter = require('../commands/porter.js')
const combatant = require('../commands/combatant.js')
const retainer = require('../commands/retainer.js')
var people;

module.exports = {
	name: 'hire',
	description: 'Create a bunch of hirelings',
	execute(message, args) {
		const data = [];
		
		if(args[0]){
			people = args[0]
		}  else {
			people = Math.ceil(Math.random()*6);
		}
		if (people == 1) {
			message.channel.send(`Hey ${message.author.username}, I'm sorry but I found only one person willing to assist you in your expedition.`)
		} else {
			message.channel.send(`Hey ${message.author.username}, I found ${people} people willing to assist you in your expedition.`)
		}
		for (let i = 0; i < people; i++) {
			var rolls = roll();
			if (rolls >= 1 && rolls <= 3 ){
				porter.execute(message,[1]);
			} else if  (rolls >= 4 && rolls <= 5 ){
				combatant.execute(message,[1]);
			} else if  (rolls = 6 ){
				retainer.execute(message,[1]);
			}

		}
	
	},
};

function roll(){
	return Math.ceil(Math.random() * 6) 
}
