//class
// let anu = {
//     firstname: 'anuja',
//     age: 25
// }

// let anju = {
//     firstname: 'anjali',
//     age: 27
// }

// let ashu = {
//     firstname: 'ashlesha',
//     age: 30
// }

//Es6 - class ==>
//without constructor
//with constructor
//by using function/method
//set and key keyword

//1. without constructor

// class Person {
//     firstName = "anuja"
//     lastName = "saha"
//     age = 25
//     display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let anuja = new Person()
// console.log(anuja)

// let vaibhav=new Person()
// console.log(vaibhav)

//Setting object property outside of class
// class Person {
//     firstname = undefined
//     lastname = undefined
//     age = undefined
//     display = function (){
//         console.log(this.firstname + this.lastname)
//     }
// }

// let Anjali = new Person()
// console.log(Anjali)
// Anjali.firstname = 'anju'
// Anjali.lastname = 'shah'
// Anjali.age = 20
// console.log(Anjali)
// Anjali.display()

// let ram=new Person()
// console.log(ram)
// ram.firstName="Ram"
// ram.lastName="kumar"
// ram.age=36
// ram.display()
// console.log(ram)


//with constructor

// class Person {
//     constructor(fn, ln, ag) {
//         this.firstname = fn
//         this.lastname = ln
//         this.age = ag
//     }
//     display() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let manali = new Person('manali', 'saha', 20)
// console.log(manali)
// manali.display()

// let ash = new Person('ash', 'saha', 25)
// console.log(ash)
// manali.display()


//by using function
class Person {
    setfirstname(fn) {
        this.firstname = fn
    }
    setlastname(ln) {
        this.lastname = ln
    }
    setage(ag) {
        this.age = ag
    }
    getfirstname(){
        return this.firstname
    }
    getlastname(){
        return this.lastname
    }
    getage(){
        return this.age
    } 
}

let anuja = new Person()
console.log(anuja)
anuja.setfirstname('anuja')
anuja.setlastname('saha')
anuja.setage(25)
console.log(anuja)

console.log(anuja.getfirstname())
console.log(anuja.getage())