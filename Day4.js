let array = [1, 2, 3, 4, 5];
array.push(6);
 
 console.log(array)

 let obj = {num1 : 10, num2: 20}; 
 obj.num3 = 30;
 console.log(obj); // {num1: 10, num2: 20, num3: 30}




let mixed = [1, 2, 3, "hello", true];
mixed = [...mixed, 15,20];// array
console.log(mixed);


let person = {name: "John", age: 30};
      person= {...person, isMarried: true}; // object
console.log(person); // object


//destructuring
// array destructuring
// let newNumber = mixed[0];
// let newNumber2 = mixed[1];
// let newNumber3 = mixed[2]; 
// let newString = mixed[3];

let [newNumber, newNumber2, newNumber3, newString] = mixed;
console.log(newNumber); // 1
console.log(newNumber2); // 2   
console.log(newNumber3); // 3
console.log(newString); // hello

let {name, age, isMarried} = person;
console.log(name, age); // John

