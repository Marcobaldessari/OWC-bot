const data = require('../data.json')

module.exports = {
	name: 'character',
	description: 'Character generation helper',
	execute(message, args) {
		var mig = rollStats();
		var nim = rollStats();
		var dis = rollStats();
		var wit = rollStats();
		var hp = roll();

		message.channel.send("Alright then, we're going to start by rolling some attributes for your new character, shall we?\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\n");
		// message.channel.send("Alright then, we're going to start by rolling some attributes for your new character, shall we?\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nWhy don't we continue the process in private? I wrote you a direct message, check the top left corner of your screen");
		// message.author.send("Hey " + message.author.username +", here are the stats we rolled a second ago\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nNow, why don't you head to http://barrowmaze.wikidot.com/wiki:0-14-classes and pick a class?");
	},
};

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