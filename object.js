// object 

//1. add

//let names = ['ashlesha', 'anuja', 'manali', 'nilima', 'anagha']

// add => 'anagha'
// names.push('antara')
// console.log(names)

// names.unshift('ana')
// console.log(names)

//2. retrive

// console.log(names[1]) //ashlesha

// console.log(names.length) //5

// console.log(names.length-1) //4

//3. update

// names[1] = "bhargavi"
// names[5] = "shreenil"
// console.log(names)

//4. delete 

// names.pop()
// names.shift()
// console.log(names)

//add/create, retrive, update, delete

//1. retrive (dot notation and bracket notation)

//object :
//key : value => property

let studentOne = {
    firstname : "Anuja",
    lastname : "sahastrabuddhe",
    rollnumber : 03,
    age : 27
}

//1. retrive (dot notation and bracket notation)
//retrive syntax => object.keyname

//dot notation
console.log(studentOne.firstname)
console.log(studentOne.age)
console.log(studentOne.lastname)
console.log(studentOne.rollnumber)

//bracket notation
console.log(studentOne['firstname'])
console.log(studentOne['lastname'])
console.log(studentOne['age'])
console.log(studentOne["rollnumber"])


//2. add (dot notation, bracket notation)

// dot notation 
studentOne.skill = 'javascript'
console.log(studentOne)

//bracket notation
studentOne['language'] = "marathi"
console.log(studentOne)


//3. update (dot notation, bracket notation)

// dot notation 
studentOne.lastname = "saha"
console.log(studentOne)

//bracket Notation
studentOne['rollnumber'] = 7
console.log(studentOne)


//4. delete (dot notation, bracket notation)

// dot notation 
delete studentOne.age
console.log(studentOne)

//bracket notation
delete studentOne['rollnumber']
console.log(studentOne)


//CRUD =>
//C - CREATE
//R - RETRIVE
//U -  UPDATE
//D - DELETE