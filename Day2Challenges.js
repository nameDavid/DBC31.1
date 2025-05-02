//Task 1
let limit = 20
let prime = [2];
for (let i = 2; i <= limit; i++) {
let isPrime = true;
for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
           break;
}
if(isPrime){
 prime.push(i);
}
}
}
console.log("Prime numbers up to " + prime);

// task two

const text = "Hello, world";
const charCount = {};

for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
}

const result = Object.keys(charCount).map(char => ({
    character: char,
    count: charCount[char]
}));

console.log(result);
