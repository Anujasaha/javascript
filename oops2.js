//object literal

let student1 = {
    firstname : 'anuja',
    lastname : 'saha',
    rollno : 03,   
    skill : 'java',
    display : function(){
        console.log(this.firstname+this.lastname)
    }
}


let student2 = {
    firstname : 'manali',
    lastname : 'saha',
    rollno : 41,   
    skill : 'c++',
    display : function(){
        console.log(this.firstname+this.lastname)
    }
}

//==================================================================

//function constructor

function student3(fn, ln, ag, sk){
    this.firstname = fn,  //here this represents the object
    this.lastname = ln,
    this.age = ag,
    this.skills = sk
    this.display = function(){
        console.log(this.firstname + this.lastname)
    }
}

let anuja = new student3('anujaa','sahaa',27, 'javaa')
console.log(anuja)

let manali = new student3('manalii','saha',20,'php')
console.log(manali)

anuja.display()
manali.display()


//every object has one __proto__ ---> which is equivallent to parent prototype
// object.__proto__ === parent.prototype

console.log(anuja.__proto__ === student3.prototype)
console.log(manali.__proto__ === student3.prototype)

student3.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}


student3.prototype.country = "india" 
anuja.display()
manali.display()

console.log(anuja.country)
console.log(manali.country)
console.log(anuja.hasOwnProperty('country'))


let names = ["chinmay","ram","sham"] //Array
// Array
console.log(names.__proto__ === Array.prototype)
names.push("hindi")
console.log(names)

Array.prototype.greet = function(){
    console.log("hello")
}
names.greet()
