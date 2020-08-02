const data = require('../data.json')

module.exports = {
	name: 'character',
	description: 'Character generation helper',
	execute(message, args) {
		var { mig, nim, dis, wit } = Array.from( [1, 2, 3, 4], x => rollStats())
		var hp = roll();
		
		message.channel.send(`
			Alright then, we're going to start by rolling some attributes for your new character, shall we?
			------------
			**MIGht: ${mig} 
			**NIMbleness: ${nim}
			**DIScipline: ${dis}
			**WITs: ${wit} 
			**HP: ${hp}
			------------
		`);
	},
};

function roll (){
	return (Math.floor(Math.random() * 6) + 1)
}

function rollStats(){
	var rolls = [roll(), roll(),roll()];
	var { rollA, rollB, rollC } = rolls;
	//se 3 dadi uguali
	if(rollA == rollB && rollB == rollC ) {
		return `${ rollA%2 ? '-' : '+'}2**    *(${rollA}, ${rollB}, ${rollC}, ${ rollA%2 ? 'odd' : 'even'}  trebles!)*`
	} 
	//se 2 dadi uguali
	if(rollA == rollB || rollB == rollC) {
		//considera A se A e B sono uguali, altrimenti considera C
		let toConsider = rollA == rollB ? rollA : rollC;
		return `${ toConsider%2 ? '-' : '+'}1**    *(${rollA}, ${rollB}, ${rollC}, ${ toConsider%2 ? 'odd' : 'even'}  trebles!)*`
	}
	//non ci sono dadi uguali
	return `0**    *(${rollA}, ${rollB}, ${rollC})*`
}