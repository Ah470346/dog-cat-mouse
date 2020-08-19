var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Bun');
var cat = new Cat('Tom');
dog.sayHi();
dog.eat(cat);
console.log(dog);