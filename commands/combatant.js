const data = require('../data.json')

module.exports = {
	name: 'combatant',
	description: 'Create a combatant character',
	execute(message, args) {
		var gender = randomGender();
		if (gender == "Male"){pronoun = "he"} else {pronoun = "she"}

		for (let i = 0; i < args; i++) {
		message.channel.send(
			`
------------
**${randomName()}**
*${gender} Combatant (20 coins a day)*
HP: ${roll()}
Carries a ${randomWeapon()} and a ${randomArmour()}
${randomFlair()}
`
			);
		}
	


	
	},
};

function roll (){
	return (Math.floor(Math.random() * 6) + 1)
}

function randomName(){
	return data.maleNames[(Math.floor(Math.random() * data.maleNames.length))]
}

function randomWeapon(){
	return data.weapons[(Math.floor(Math.random() * data.weapons.length))]
}

function randomArmour(){
	return data.armour[(Math.floor(Math.random() * data.armour.length))]
}

function randomBackground(){
	return data.background[(Math.floor(Math.random() * data.background.length))]
}

function randomFlair(){
	return data.flair[(Math.floor(Math.random() * data.flair.length))]
}

function randomGender() {
	if (Math.random()<0.5){
		return "Male"
	} else {
		return "Female"
	}
}