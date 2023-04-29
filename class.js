//object

// let anuja = {
//     firstname : 'anuja',
//     lastname : 'saha',
//     rollnaumber : 5,
//     skills : ['java', 'javascript']
// }

// console.log(anuja)

//==========================================================================================

//class
//class => multiple object can be define inside class => blue print ==> user define datatype

// class student {
//     firstname = "sam"
//     lastname = "roy"
//     skills = ['java','javascript']
// }

// let anuja = new student()
// console.log(anuja)

// let vaibhav = new student()
// console.log(vaibhav)

//============================================================================================

//there are 2 ways to set value in class

//1. setting object value outside the class

// class student {
//     firstname = undefined
//     lastname = undefined
//     age = undefined
//     rollnumber = undefined
// }
// let vaibhav = new student()
// console.log(vaibhav)

// vaibhav.firstname = 'vaibhav'
// vaibhav.lastname = 'sahas'
// vaibhav.age = '30'
// vaibhav.rollnaumber = 17
// console.log(vaibhav)

// let anuja = new student()
// anuja.firstname = "anuja"
// anuja.lastname = "saha"
// anuja.age = 25
// anuja.rollnumber = 10
// console.log(anuja)


//2. using constructor

class studentOne {
    constuctor(fn, ln, ag, sk) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.skills = sk
    }
}
let sam = new studentOne('sam', 'roy', 25, 'java')
console.log(sam)

//errorrrrr - {} ???????//


//3. by using method

class studenttwo {
    setFname(fn) {
    this.firstname = fn
}
setLname(ln){
    this.lastname = ln
}
setAge(ag){
    this.age = ag
}
setRnumber(rn){
this.rollnumber = rn 
}
}

let anuja = new studenttwo()
console.log(anuja) //{}
anuja.setFname("anuja")
anuja.setLname('saha')
anuja.setAge(25)
anuja.setRnumber(7)
console.log(anuja)

let manali = new studenttwo()
manali.setFname('manali')
manali.setLname('saha')
manali.setAge(22)
manali.setRnumber(12)
console.log(manali)

