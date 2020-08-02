const data = require('./data.json')

function Character(type, name) {
    this.type = type;
    this.gender = getGender();
    this.name = name || getName(this.gender);
    this.hp = rollD6();
    this.stats = {
        might: { modifier: 0, rolls: [] },
        nimb: { modifier: 0, rolls: [] },
        discipline: { modifier: 0, rolls: [] },
        wits: { modifier: 0, rolls: [] }
    };
    rollStats.apply(this);
    this.weapon = getWeapon();
    this.armour = getArmour();
    this.background = getBackground();
    this.flair = getFlair();
    this.price = getPrice(this.type.toLowerCase());
    this.animal = getAnimal();
}

function rollStats(){
    var stats = this.stats;
    ['might','wits','discipline','nimb'].forEach(current => {
        stats[current].rolls = [rollD6(), rollD6(),rollD6()];
        var [ rollA, rollB, rollC ] = stats[current].rolls;
    	if(rollA == rollB && rollB == rollC ) {
            stats[current].modifier = rollA%2 ? -2 : +2;
        } else if(rollA == rollB || rollB == rollC || rollA == rollC) {
		    let toConsider = rollA == rollB ? rollA : rollC;
            stats[current].modifier = toConsider%2 ? -1 : +1;
        }
    });
}

function rollD6() { return Math.ceil(Math.random() * 6); }

function getGender() { return Math.random() < 0.5 ? "Male" : "Female"; }
function getName(gender) {
    return data[gender.toLowerCase() + "Names"][(Math.floor(Math.random() * data[gender.toLowerCase() + "Names"].length))];
}

function getWeapon(){
	return data.weapons[(Math.floor(Math.random() * data.weapons.length))]
}

function getArmour(){
	return data.armour[(Math.floor(Math.random() * data.armour.length))]
}

function getBackground(){
	return data.background[(Math.floor(Math.random() * data.background.length))]
}

function getFlair(){
    if (Math.random() < 0.5){
        return data.flair[(Math.floor(Math.random() * data.flair.length))]
    } else {
        return "Reminds you of a " + data.animal[(Math.floor(Math.random() * data.animal.length))]
    }
}

function getAnimal(){
	return data.animal[(Math.floor(Math.random() * data.animal.length))]
}

function getPrice(type){
	return data.price[type]
}

module.exports = Character;