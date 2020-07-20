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

	if (message.content == "a" || message.content == "/character") {
		message.reply("alright we're going to start by rolling some attributes for your new character, shall we?\n------------\n**MIGht: " + rollStats() + "\n**NIMbleness: " + rollStats() + "\n**DISCipline: " + rollStats() + "\n**WITs: " + rollStats() + "\n**HP: " + roll() + "**\nWrite them on your character sheet before moving foward. \n------------\nNow, why don't you head to http://barrowmaze.wikidot.com/wiki:0-14-classes and pick a class?");
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
