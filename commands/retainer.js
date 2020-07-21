const data = require('../data.json')

module.exports = {
	name: 'retainer',
	description: 'Create a retainer character',
	execute(message, args) {
		var gender = randomGender();
		if (gender == "Male"){pronoun = "he"} else {pronoun = "she"}
		
		if(!args[0]){args[0] = 1};
		for (let i = 0; i < args[0]; i++) {
		message.channel.send(
			`
------------
**${randomName()}**
*${gender} retainer (25% share)*
**MIG: ${rollStats()}
**NIM: ${rollStats()}
**DIS: ${rollStats()}
**WIT: ${rollStats()}
**HP: ${roll()}**
A former ${randomBackground()}, ${pronoun} ${randomFlair()}
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

function rollStats(){
	var rolls = [roll(), roll(),roll()];
	if(rolls[0] == rolls[1] && rolls[0] == rolls[2]){
		if ( rolls[0] % 2 == 0) {
			return "+2**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", even trebles!)*"
		} else {
			return "-2**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", odd trebles!)*"
		}
	} else if(rolls[0] == rolls[1]) {
		if ( rolls[0] % 2 == 0) {
			return "+1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", even doubles!)*"
		} else {
			return "-1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", odd doubles!)*"
		}
	} else if(rolls[1] == rolls[2]) {
		if ( rolls[1] % 2 == 0) {
			return "+1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", even doubles!)*"
		} else {
			return "-1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", odd doubles!)*"
		}
	} else if(rolls[0] == rolls[2]) {
		if ( rolls[0] % 2 == 0) {
			return "+1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", even doubles!)*"
		} else {
			return "-1**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ", odd doubles!)*"
		}
	} else {
			return "0**    *(" + rolls[0] + ", " + rolls[1] + ", " + rolls[2] + ")*"		
	}
}