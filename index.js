var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Bun');
var cat = new Cat('Tom');
var mouse = new Mouse('mickey');
try {
	cat.eat(dog);
} catch(e) {
	console.log('error while cat eat dog!');
}
console.log(cat);