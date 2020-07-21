const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const data = require('./data.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

	if (message.content == "/character") {
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
// client.login("NzM0MzMyNjAwODAxNTU4NTQ4.XxXfcA.dOhqEO8jiIie_rLLCrwlCbv594o");
client.login(process.env.BOT_TOKEN);
