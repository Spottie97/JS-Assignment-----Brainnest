/*Diagonal Square*/
const sideLength = 9;
const diagonal = Math.sqrt(2 * Math.pow(sideLength, 2));
console.log("The diagonal of the square is: " + diagonal);

/*Area of Triangle*/
const side1 = 5;
const side2 = 6;
const side3 = 7;
const semiPerimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
console.log("The area of the triangle is: " + area);

/*Circumference and Surface Area of a Circle*/
const radius = 4;
const circumference = 2 * Math.PI * radius;
const surfaceArea = Math.PI * Math.pow(radius, 2);
console.log("The circumference of the circle is: " + circumference);
console.log("The surface area of the circle is: " + surfaceArea);

