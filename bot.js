const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	const messageWords = message.content.split(' ');

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
	}
	if (message.content == "have a good day!") {
		message.channel.send("YOU have a good day" + message.author.username +", you beautiful creature! <3")
	}

	if (message.content == "love you bot") {
		message.channel.send("love you too hun")
	}


	if (message.content == "a" || message.content == "/character") {
		var mig = rollStats();
		var nim = rollStats();
		var dis = rollStats();
		var wit = rollStats();
		var hp = roll();

		message.channel.send("Alright then, we're going to start by rolling some attributes for your new character, shall we?\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nWhy don't we continue the process in private? I wrote you a direct message, check the top left corner of your screen");
		message.author.send("Hey " + message.author.username +", here are the stats we rolled a second ago\n------------\n**MIGht: " + mig + "\n**NIMbleness: " + nim + "\n**DIScipline: " + dis + "\n**WITs: " + wit + "\n**HP: " + hp + "**\n------------\nNow, why don't you head to http://barrowmaze.wikidot.com/wiki:0-14-classes and pick a class?");
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

// client.login(auth.token);
client.login(process.env.BOT_TOKEN);
