
class Circle {
    constructor(radius) {
        this.radius = radius;
    }


    getArea() {
        return Math.PI * this.radius * this.radius;
    }


    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle(5);
console.log(`Area: ${circle1.getArea().toFixed(2)}`);
console.log(`Circumference: ${circle1.getCircumference().toFixed(2)}`);

export default Circle;
