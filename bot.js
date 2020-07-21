
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	const messageWords = message.content.split('*');
	const arg = messageWords[1];
	

	if (message.content == "!embed") {
		message.channel.send({embed: {
			color: 3447003,
			title: "Test:",
			fields: [
			  { name: "Colonna 1", value: "Lorem\nIpsum\nDolor", inline: true},
			  { name: "Colonna 2", value: "sit\namet\nconsectetur", inline: true}
			]
		  }
		});
	};

	if (message.content == "you're cool bot") {
		message.channel.send("you're cool too human 👊")
	}

	
	if (message.content == "/porter"){
		randomPorter(message);
	}

	if (message.content == "/combatant"){
		randomCombatant(message);
	}

	if (message.content == "/retainer"){
		randomRetainer(message);
	}

	if (messageWords[0] == "a" || message.content == "/character") {
		newCharacter(message);
	}
  });

function roll (){
	return (Math.floor(Math.random() * 6) + 1)
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

function randomGender() {
	if (Math.random()<0.5){
		return "Male"
	} else {
		return "Female"
	}
}

function randomName(){
	return "Alex"
}

function randomPrice(){
	return "(20 coins a day)"
}

function randomWeapon(){
	return "Javelins(one-handed ranged)"
}

function randomArmour(){
	return "shield"
}

function randomBackground(){
	return "a former forester"
}

function randomFlavour(){
	return "reminds you of a crab"
}

function randomPorter(message){
	var gender = randomGender();
	
	message.channel.send(
		"------------\n" + 
		"**" + randomName() + "**\n" + 
		"*" + gender + " Porter " + "(10 coins a day)" + "*\n" +
		"HP: " + roll() + "\n" +
		randomFlavour() + "\n" +
		"------------"
	);
}

function randomCombatant(message){
	var pronoun;
	var gender = randomGender();
	if (gender == "Male"){pronoun = "he"} else {pronoun = "she"}

	message.channel.send(
		"------------\n" + 
		"**" + randomName() + "**\n" + 
		"*" + gender + " Combatant " + "(20 coins a day)" + "*\n" +
		"HP: " + roll() + "\n" +
		pronoun + " carries a " + randomWeapon() + " and " + randomArmour() + "\n" +
		randomFlavour() + "\n" +
		"------------"
	);
}

function randomRetainer(message){
	var pronoun;
	var gender = randomGender();
	if (gender == "Male"){pronoun = "he"} else {pronoun = "she"}
	
	message.channel.send(
		"------------\n" + 
		"**" + randomName() + "**\n" + 
		"*" + gender + " Combatant " + "(25% share)" + "*\n" +
		"**MIG: " + rollStats() + "\n" +
		"**NIM: " + rollStats() + "\n" +
		"**DIS: " + rollStats() + "\n" +
		"**WIT: " + rollStats() + "\n" +
		"**HP: " + roll() + "**\n" +
		pronoun + " carries a " + randomWeapon() + " and " + randomArmour() + "\n" +
		randomBackground() + ", " + pronoun + randomFlavour() + "\n" +
		"------------"
	);
}

function newCharacter(message){
	var mig = rollStats();
	var nim = rollStats();
	var dis = rollStats();
	var wit = rollStats();
	var hp = roll();

	message.channel.send("Alright then, we're going to start by rolling some attributes for your new character, shall we?\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nWhy don't we continue the process in private? I wrote you a direct message, check the top left corner of your screen");
	message.author.send("Hey " + message.author.username +", here are the stats we rolled a second ago\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nNow, why don't you head to http://barrowmaze.wikidot.com/wiki:0-14-classes and pick a class?");
}

// client.login(auth.token);
client.login("NzM0MzMyNjAwODAxNTU4NTQ4.XxXfcA.dOhqEO8jiIie_rLLCrwlCbv594o");
// client.login(process.env.BOT_TOKEN);




function firstLetterUpper(theString) {
	var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}

