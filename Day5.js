// Department
let Department =[
    {
        id:1,
        name: "HR",
        employees: [
            {name: "John", age: 30},
            {name: "Jane", age: 25},
        ]
    }
]

// {
//     name: "IT",
//     employees: [
//         {name: "Alice", age: 28},
//         {name: "Bob", age: 35},
//     ]
// },
// {
//     name: "Finance",
//     employees: [
//         {name: "Charlie", age: 40},
//         {name: "David", age: 32},
//     ]
// },

//write a function to add a new department to the array.


function addDepartment(name, employees) {
    Department = [...Department, {id: Department.length + 1, name: name, employees: employees}]
    return Department;
}

console.log(addDepartment("IT", [{name: "Alice", age: 28}, {name: "Bob", age: 35}]));
console.log(addDepartment("Finance", [{name: "Charlie", age: 40}, {name: "David", age: 32}]));

function searchDepartment(name) {
 let departmentResult =
 Department.find((department)=> department.name.toLowerCase() === name.toLowerCase());
 let hasDepartment = 
 (departmentResult) ? departmentResult : "Department not Found!"
 return hasDepartment, dep;

}

console.log(searchDepartment("it"));

function addEmployee(departmentName, name, age ){
  let foundDepartment =  searchDepartment(departmentName);
  foundDepartment = {...foundDepartment, employees:[...foundDepartment.employees,
     {name: name, age:age}]} 
return foundDepartment;
}

console.log(addEmployee("it", "Sophie", 35));
console.log(addEmployee("Faculty", "Soph", 35));


function removeDepartment(name) {
    let foundDepartment = searchDepartment(name);
    if (foundDepartment) {
        Department = Department.filter(department => department.name.toLowerCase() !== name.toLowerCase());
        return `Department ${name} removed successfully!`;
    } else {
        return `Department ${name} not found!`;
    }
}



