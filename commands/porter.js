const data = require('../data.json')

module.exports = {
	name: 'porter',
	description: 'Create a porter character',
	execute(message, args) {
		var gender = randomGender();
		for (let i = 0; i < args; i++) {
		message.channel.send(
			`
------------
**${randomName()}**
*${gender} Porter (10 coins a day)*
HP: ${roll()}
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