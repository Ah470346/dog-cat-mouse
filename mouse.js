function Mouse(name){
	this.name = name;
	this.dead = false ;
}

Mouse.prototype.die = function(){
	this.dead = true;
}

Mouse.prototype.run = function(){
	console.log('running....');
	
Mouse.prototype.sleep = function(){
	console.log('sleeping...');
}

module.exports = Mouse ;