//Inheritance

//program 1 - without construcctor
// class Student {
//     firstname = "anuja"
//     lastname = "saha"
//     age = 25
// }
// class Teacher extends Student {
//     salary = 10000
// }

// let anuja = new Teacher()
// console.log(anuja.firstname)
// console.log(anuja.lastname)
// console.log(anuja.age)
// console.log(anuja.salary)

// let anujaa = new Student()
// console.log(anujaa)


//program 2 - with constructor in parent class
// class StudentA {
//     constructor (fn, ln, ag, an){
//         this.firstName = fn
//         this.lastName = ln
//         this.Age = ag
//         this.adharno = an
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class TeacherA extends StudentA {
//     salary = 20000
//     displaysalary() {
//         console.log(this.salary)
//     }
// }

// let anu = new TeacherA('anu','saha',27,2510)
// console.log(anu)

// //if we make object with child class then all parent class properties can be accessible to child 
// //but if we make a class with parent class then child class class properties nd methods cant be accessible to parent
// //properties calling
// anu.firstName = 'anu'
// anu.lastName = 'saha'
// anu.Age = 27
// anu.adharno = 15247
// anu.salary = 25000
// anu.displayName()
// anu.displaysalary()

// let anuj = new StudentA()
// anuj.firstName = 'anuj'
// anuj.salary = 30000 //should not be accessible
// anuj.displayName()
// //anuj.displaysalary() //not accessible
// console.log(anuj)


//program 3
// class StudentC {
// constructor(fn, ln, age, adharNo) {
//     this.firstName = fn
//     this.lastName = ln
//     this.age = age
//     this.adharNo = adharNo
// }

// displayName() {
//     console.log(this.firstName + this.lastName)
// }
// }

// class TeacherC extends StudentC {
// constructor(fn, ln, age, adharNo, salary) {
//     super(fn, ln, age, adharNo)
//     this.salary = salary
// }
// displaySalary() {
//     console.log(this.salary)
// }
// }

// let sam = new TeacherC("sam", "roy", 29, 12463, 50000)
// console.log(sam.firstName)
// console.log(sam.lastName)
// console.log(sam.adharNo)
// console.log(sam.age)
// console.log(sam.salary)
// sam.displaySalary()
// sam.displayName()


//program 4
class Professor {
    constructor (fn, ln) {
        this.firstname = fn 
        this.lastname = ln
    }
    displayPname(){
        console.log( this.firstname + this.lastname )
    }
}

class Teacher extends Professor {
    constructor (fn, ln, ffn) {
        super(fn, ln)
        this.ffirstname = ffn 
    }
    displayTname(){
        console.log( this.ffirstname + this.lastname )
    }
}

class Student extends Teacher {
    constructor (fn, ln, ffn, fffn) {
        super(fn, ln, ffn)
        this.fffirstname = fffn 
    }
    displaySname(){
        console.log( this.fffirstname + this.lastname )
    }
}

let jay = new Student ("ram", "sharma", "karan", "harish")
console.log(jay.firstname)
console.log(jay.lastname)
console.log(jay.ffirstname)
console.log(jay.fffirstname)

jay.displayPname()
jay.displayTname()
jay.displaySname()