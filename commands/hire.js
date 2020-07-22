const data = require('../data.json')
const porter = require('../commands/porter.js')
const combatant = require('../commands/combatant.js')
const retainer = require('../commands/retainer.js')
var gender;
var people;

module.exports = {
	name: 'hire',
	description: 'Create a bunch of hirelings',
	execute(message, args) {
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
			var gender = randomGender();
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

function randomAnimal(){
	return data.animal[(Math.floor(Math.random() * data.animal.length))]
}