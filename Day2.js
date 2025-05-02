//control Flow
// 1. if else statement
let age = 18;   
if (age >= 18) {    
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}  


// ternary operator
let T_age = age = 18;   
let result = (T_age >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);


// if else if statement
let score = 85; 
if (score >= 90) {
    console.log("Grade: A");
}
 else if (score >= 80) {
    console.log("Grade: B");
}  
else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// Ternary
let T_Score = 85;
let T_result = (T_Score >= 90) ? "Grade: A" : (T_Score >= 80) ? "Grade: B" 
                                 : (T_Score >= 70) ? "Grade: C" : "Grade: D";


console.log(T_result); 

// For Loops
for (let i = 0; i < 11; i++) {
    console.log(i);
}

let mixed = [1,3,5,"hello", true, 2.5];

for (let i = 0; i < mixed.length; i++) { 
    console.log(mixed[i]);       
}

// While loop
let i = 0;  
while (i < mixed.length) {
    console.log(mixed[i]);
    i++;
}

// Do while loop
let j = 0;
do {
    console.log("j is: " + j);
 console.log(mixed[j]);
j++;

} 
while(j < mixed.length)
    console.log("j is completed: " + j);


