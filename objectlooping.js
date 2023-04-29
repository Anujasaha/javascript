// //object
// let student = {
//     firstname : "anuja",
//     lastname : "saha",
//     rollnumber : 12,
//     skills : ['js', 'javascript', 'python']
// }

// //retrive
// console.log(student.firstname)
// console.log(student.rollnumber)

// //add 
// student.language = "marathi"
// console.log(student)

// //update
// student.rollnumber = 15
// console.log(student)

// //delete 
// delete student.lastname
// console.log(student)

//===================================================================================

//loop on object  

let student = {
    firstname : "anuja",
    lastname : "saha",
    rollnumber : 12,
    skills : ['js', 'javascript', 'python']
}

//1st way
//loop for keys
for(let key in student)
console.log(key) // we can keep anything as keyname, here it is key, it will represent keyname -firstname, lastname,...

//loop for values
for(let key in student)
console.log(student[key])

//loop for keys and value
for(let key in student)
console.log(key, student[key])

//============================================

//2nd way of looping
//loop for key
for(let key of Object.keys(student)){
    console.log(key)
}

//loop for value
for(let value of Object.values(student)){
    console.log(value)
}

//loop for key and value
for(let [a,b] of Object.entries(student)){
    console.log(a,b)
}

//===================================================================================

