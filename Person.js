
class Person {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }

    
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Address: ${this.address}`;
    }
}

export default Person;
