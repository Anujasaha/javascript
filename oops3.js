// function constructor 
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    // this.display = function(){
    //     console.log(this.firtName + this.lastName)
    // }
}
let ana = new Person('ana', 'saha')
console.log(ana)
let manali = new Person('mana', "shas")
console.log(manali)

//Every object has one Object.__proto__  === Parent.prototype

console.log(ana instanceof Person)

console.log(ana.__proto__=== Person.prototype)
Person.prototype.display = function(){
    console.log(this.firstName+this.lastName)
}

Person.prototype.country = "india"
console.log(ana)
console.log(manali)
manali.display()
ana.display()

console.log(ana.hasOwnProperty('country'))  //false

console.log(ana.hasOwnProperty('firstName'))  //true
console.log(manali.hasOwnProperty('firstName')) //true


// Es6 class 

class PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }

}
let ana1 = new PersonB("ana","joy")
let ana2 = new PersonB("sana","jos")

console.log(ana1)
console.log(ana2)

ana1.display()
ana2.display()


// Object.create()

let ashu = Object.create({})
console.log(ashu)

ashu.firstname = 'ashu',
ashu.lastname = 'raut'
ashu.display = function(){
    console.log(this.firstname+this.lastname)
}
ashu.display()

let obj = {
    init:function(fn, ln){
        this.firstname = fn,
        this.lastname = ln
    },
    display : function(){
        console.log(this.firstname+this.lastname)
    }
}

let ashlesha = Object.create(obj)
console.log(ashlesha)    
ashlesha.init("ash", "raut")
ashlesha.display()