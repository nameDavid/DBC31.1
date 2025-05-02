let scores = [85, 92, 78, 95, 88];
let newScores = []

scores.map((eachScore)=> {
    newScores.push(eachScore + 5)
});

console.log(newScores)

let passed = newScores.filter(score =>  (
  score >= 90
));
console.log(passed)


//for
// for (let i = 0; i < scores.length; i++){
//     console.log(scores[i] + 5)
// }

//lab 2
let student = {name:"Emma",
               age: 20,
               grade: "A",
               subjects:["Math", "Science"] 
}


const {name, grade} = student;

console.log(name, grade);

let profile = {...student, school:"Tech High"}

console.log(profile);