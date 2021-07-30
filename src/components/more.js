class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayName() {
		console.log(`${this.name} have ${this.age}`);
	}
}
export default Person;
