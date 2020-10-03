/*
Implement class inheritance using functions.

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, klass) {
    super(name);
    this.klass = klass;
  }
  getKlass() {
    console.log(this.klass);
  }
}

const x = new Student('sks', 4);
x.getName();
x.getKlass();

*/

function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
  console.log(this.name)
}
function Student(name, klass) {
    Person.call(this, name);
    this.klass = klass;
}
// Student.prototype = new Person;
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student
Student.prototype.getKlass = function() {
  console.log(this.klass)
}

const p = new Student('sks', 4);
p.getName();
p.getKlass();