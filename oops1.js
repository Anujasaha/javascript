//object literal

let anuja = {
    firstName:"anuja",
    lastName:"saha",
    age:30,
    rollNo:33
}

console.log(anuja)

// CRUD
// retrive  (dot notation and bracket notation)
console.log(anuja.firstName)
console.log(anuja['firstName'])
// update (dot notation and bracket notation)
anuja.firstName = "ram"
anuja['firstName'] = "ramesh"
console.log(anuja)
// add (dot notation and bracket notation)
anuja.city = "pune"
anuja['language'] = "hindi"
console.log(anuja)
// delete (dot notation and bracket notation)
delete anuja.firstName
delete anuja['lastName']
console.log(anuja)


// let vaibhav = {
//     firstName: "Vaibhav",
//     lastName: "saha",
//     age: 20,
//     rollNumber: 34,
//     skills: "guitarist"
// }

//========================================================================

//for 10 object ==> 100 lines code --> to overcome this 

//function constructor 
//Es6 class ====> moden js=> Es6 2015
//object.create()

//=========================================================================

// //1. function constructor 
// function Person(fn, ln, ag, rn){
//     this.firstname = fn,
//     this.lastname = ln,
//     this.age = ag,
//     this.rollnumber = rn
// }

// let Anuja = new Person('anuja', 'saha', 25, 30)
// console.log(Anuja)
// let manali = new Person('manali', 'sahastra', 20, 35)
// console.log(manali)

//===========================================================================

// //2. Es6 class 
// with constructor //without constructor

// without constructor
// class Person {
//     firstName = "ana"
//     lastName = "sah"
//     age = 25
//     rollNo = 35
//     skill = "SQL"
// }
// let Sham = new Person()
// console.log(Sham)

// let sita=new Person()
// console.log(sita)

// with constructor
// class PersonB {
//     constructor(fn,ln,ag,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.age  = ag
//         this.rollNo = rollNo
//     }
// }

// let AnujaB = new PersonB("anuja","saha",34,12)
// let ManaliB = new PersonB("manali","vyas",34,42)
// console.log(AnujaB)
// console.log(ManaliB)

//==========================================================================

// //3. Object.create() 

// let ashlesha = Object.create({})
// console.log(ashlesha)

// ashlesha.firstname = 'ashlesha'
// ashlesha.lastname = 'raut'
// ashlesha.age = 30
// ashlesha.rollno = 40
// console.log(ashlesha)

//===============================================

// 4 ways to create object 
// 1. object literal
// 2. function constructor -----> mostly used
// 3. es6 class
// 4. object.create()


//parent.prototype==object._proto_


function Person(fn, ln, ag, rn, sk) {
    this.firstName = fn
    this.lastName = ln
    this.ag = ag
    this.skill = sk
    this.rollNo = rn
}

Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}

let Sayali = new Person("Sayali", "Rao", 12, 24, "Math")
console.log(Sayali)

let Priya = new Person("Priya", "Raut", 34, 56, "Java")
console.log(Priya)

console.log(Person.prototype == Sayali._proto_)

Sayali.display()