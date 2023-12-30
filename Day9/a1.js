let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

console.log(cars[0]);

cars.push("Audi");
console.log(cars);

for(let i of cars){
    console.log(i);
}

cars.unshift("Benz");
console.log(cars);

cars[2]="Duster";
console.log(cars);


//Objects

let person={name:"Vamshi",age:21,regno:21943};
console.log(person);



for(let i in person)
{
    console.log(i);
}

person.height="tall";
console.log(person);
cars=[];
console.log(cars);

//Stringmethods
//charAt
let str = "Hello";
console.log(str.charAt(0)); 
console.log(str.charCodeAt(3)); 
//touppercase
console.log(str.toUpperCase()); 
//tolowercase
console.log(str.toLowerCase());
//concat
let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); 
//indexof
let str3 = "HelloWorld";
console.log(str3.indexOf("o"));
//push
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//pop
arr.pop();
console.log(arr);
//join
let arr1 = ["Hello", "World"];
console.log(arr1.join(" "));
//indexof
let arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2.indexOf(8)); 
//keys
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); 
//values
console.log(Object.values(obj));
//entries
console.log(Object.entries(obj));  






