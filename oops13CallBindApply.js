
let anuja = {
    firstname: 'anuja',
    lastname: 'saha',
    rollno: 25,
    skill: ["javascript, cypress"],
    display: function () {
        console.log(this.firstname + this.lastname)
    }
}

console.log(anuja.display) //function print
anuja.display() //anujasaha

//if we store the function or method in variable and then will try to call then it will return NaN
//because here this refers to window nd values are not defined globally it taking it as undefined - nd undefined+undefined=NaN

let name = anuja.display
console.log(name) // will return function
// function (){
//     console.log(this.firstname + this.lastname)

// so to set reference of this
// to use one method in multiple object 
// we use Call, Bind, and Apply method

//1.Bind()
let a = anuja.display.bind(anuja)
console.log(a)
a() //anujasaha

//2.call() => here in call method, we dont need to call it seperatly
anuja.display.call(anuja) //anujasaha

//3.Apply()
anuja.display.apply(anuja) //here in Apply method as well, we dont need to call it seperatly

//================================================================

let ana = {
    fName: 'Anu',
    lname: 'saha',
    displayName: function () {
        console.log(this.fname + this.lname)
    }
}
let mana = {
    fname: 'mana',
    lname: 'sahaa',
}

//here we want to access the method displayname from ana in mana.
let a1 = ana.displayName.bind(mana) //manasahaa
a1()

ana.displayName.call(mana) //manasahaa
ana.displayName.apply(mana) //manasahaa

//==================================================================

let joy = {
    firstName: "joy",
    lastName: "roy"
}

let sam = {
    firstName: "sam",
    lastName: "roy"
}

let anaa = {
    firstName: "ana",
    lastName: "roy"
}

let displayName = function () {
    console.log(this.firstName + this.lastName)
}
displayName()

//use one method in multiple object 

let s1 = displayName.bind(joy)
s1()  //joyroy

let s2 = displayName.bind(sam)
s2()

displayName.call(anaa)

displayName.apply(joy)

//=========================================================

let anu = {
    firstname : 'anuja'
}

let monu = {
    firstname : 'mona'
}

let ashu = {
    firstname : 'ashu'
}

let displayfirstname = function(greet1,greet2){
    console.log(`${greet1} ${this.firstname} ${greet2}`)
}

let b = displayfirstname.bind(anu, "good morning", "have a nice day")
b()

displayfirstname.call(monu, "good afternoon", "have a great day") 

displayfirstname.apply(ashu, ["hello", "good evening"])  //while using apply method with string interpolation we need to pass values in array
