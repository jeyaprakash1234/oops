
class Uber {
    constructor(distance, ratePerKm) {
        this.distance = distance; // Distance in kilometers
        this.ratePerKm = ratePerKm; // Rate per kilometer
    }

    calculateFare() {
        const baseFare = 50; // Base fare (can be adjusted)
        const fare = baseFare + this.distance * this.ratePerKm;
        return `The total fare is ₹${fare.toFixed(2)}`;
    }
}
const person1 = new Person("Jeyaprakash", 30, "9876543210", "123, Main Street, Chennai");


console.log(person1.getDetails());


const uberRide = new Uber(10, 15); 
console.log(uberRide.calculateFare());

export default Uber;
