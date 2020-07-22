const data = require('../data.json')
var gender;

module.exports = {
	name: 'porter',
	description: 'Create a porter character',
	execute(message, args) {
		
		
		if(!args[0]){args[0] = 1};
		for (let i = 0; i < args[0]; i++) {
			var gender = randomGender();
			message.channel.send(`
------------
**${randomName()}**
*${gender} Porter (10 coins a day)*
HP: ${roll()}
Reminds you of a ${randomAnimal()}
			`);
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