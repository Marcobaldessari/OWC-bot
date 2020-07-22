const data = require('../data.json')

module.exports = {
	name: 'retainer',
	description: 'Create a retainer character',
	execute(message, args) {
		
		
		if(!args[0]){args[0] = 1};
		for (let i = 0; i < args[0]; i++) {
			var gender = randomGender();
			if (gender == "Male"){pronoun = "he"} else {pronoun = "she"}
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
A former ${randomBackground()}, ${pronoun} reminds you of a ${randomAnimal()}
`
			);
		}
	
	},
};

function roll (){
	return (Math.floor(Math.random() * 6) + 1)
}

function randomName(){
	if (gender == "Male"){
		return data.maleNames[(Math.floor(Math.random() * data.maleNames.length))]
	} else {
		return data.femaleNames[(Math.floor(Math.random() * data.femaleNames.length))]
	}
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

function randomAnimal(){
	return data.animal[(Math.floor(Math.random() * data.animal.length))]
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
			return "+2"
		} else {
			return "-2"
		}
	} else if(rolls[0] == rolls[1]) {
		if ( rolls[0] % 2 == 0) {
			return "+1"
		} else {
			return "-1"
		}
	} else if(rolls[1] == rolls[2]) {
		if ( rolls[1] % 2 == 0) {
			return "+1"
		} else {
			return "-1"
		}
	} else if(rolls[0] == rolls[2]) {
		if ( rolls[0] % 2 == 0) {
			return "+1"
		} else {
			return "-1"
		}
	} else {
			return "0"		
	}
}