//with constructor

class Person {
    constructor(fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
    }
}
// let ana = new Person('anu','saha', 24)
// console.log(ana)
// let mona = new Person('mona','shah',20)
// console.log(mona)

// let student = [
//     new Person('anu','shah',25),
//     new Person('mona','shah',20),
//     new Person('ash','shah',30)
// ]
// console.log(student)

let studentss = {
    studentone: new Person('ana1', 'a11', 12, 20),
    studenttwo: new Person('ana11', 'a12', 15, 30),
    studentthree: new Person('ana112', 'a13', 17, 25)
}

for (let [k, v] of Object.entries(studentss.studentthree)) {
    console.log(k, v)
}

for (let [k, v] of Object.entries(studentss.studenttwo)) {
    console.log(k, v)
}

//======================================================================
//set and get method

class PersonB {
    setfirstname(fn) {
        this.firstname = fn
    }
    setlastname(ln) {
        this.lastname = ln
    }
    setage(ag) {
        this.age = ag
    }
}

let sam = new PersonB()
sam.setfirstname('sam')
sam.setlastname('roy')
sam.setage(30)
console.log(sam)


//set and get keyword
class PersonC {
    set firstNa(fn) {
        this.firstna = fn
    }
    set lastNa(ln) {
        this.lastna = ln
    }
    set Age(ag) {
        this.age = ag
    }
    set RollN(rn) {
        this.rolln = rn
    }
}

let joy = new PersonC()
joy.firstNa = 'joy'
joy.lastNa = 'roy'
joy.age = 30
joy.RollN = 45
console.log(joy)