// set datatype

// set => stores unique values and ignores the repeated values
// stores values onlys not key val pair

let myset = new Set()
console.log(myset) //{} ---because set is empty

//methods of set
//1. add()

myset.add("anuja")
console.log(myset)
myset.add("manali")
console.log(myset)
myset.add(15)
console.log(myset)

let newset = new Set(["anuja","manali","ashu"])
console.log(newset)

let a1 = new Set('vaibhav') 
console.log(a1) //Set(5) { 'v', 'a', 'i', 'b', 'h' } // cause v and a are repeated, nd set stores unique values only


//***size ---- property => gives size of set based on unique val 
let a11 = new Set("shreeganesh")
console.log(a11.size) //7
console.log(a11)

let a22 = new Set([1,2,3,4,5,6,3,2,1])
console.log(a22)
console.log(a22.size)

let a33 = new Set(["anuja", 'manali', "ashlesha", "anuja"])
console.log(a33.size)
console.log(a33)


//2. has() 
//search for an element in set and return boolean

let set1 = new Set([4, 5, 6])
console.log(set1.has(5)) // true

let s1 = set1.has(7)
console.log(s1) // false

//3. delete()
//Removes a specified value from the Set.

let set2 = new Set ([10,12,41,75,11])
let s11 = set2.delete(41)
console.log(s11) // true
console.log(set2) //{10,12,75,11}

//4. clear()
//clear out the entire set

let set3 = new Set ([1,2,2,4,6,9])
let s33 = console.log(set3.clear)
console.log(s33)
console.log(set3)

//5.forEach
//Performs the specified action for each element in an array.

let set4 = ([7,6,5,4,3,2])
set4.forEach((ele) => {
console.log(ele)
})

//==========================
set4.forEach((ele) => {
    console.log(ele+2)
    })


//==================================================

//loop
//for
let set5 = new Set(["a", "b", "c", "a", "d"])
for(let val of set5){
    console.log(val)
}

//use loop if want val in sequence not in iteration
//console.log(set5)

//===================================================

//key()

let set6 = new Set(["a", "n", "u", "j", "a", "a"])
let b = set6.keys()
console.log(b)  // { 'a', 'n', 'u', 'j' } -- iteration
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)
console.log(b.next().value)

let c = set6.values()
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)

let d = set6.entries()
console.log(d) // [val, val]

//==========================================================

let rollnum = [10,20,30,40,50]
let r1 = rollnum[0]
let r2 = rollnum[1]
let r3 = rollnum[2]
let r4 = rollnum[3]
let r5 = rollnum[4]
console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)
//to print any ele will need to provide index no. => to overcome this there is destructor


//destructuring

//syntax :
//let [] = variable name

//1. destructuring of array
let rollnumber = [10,20,30,40,50] 
let [e1, e2, e3, e4, e5] = rollnumber
//print 40 
console.log(e4)
console.log(e1)

//2. destructuring of nested array
let number = [[10,45,58],[13,78,29],[24,36,17]]
let [[m1,m2,m3],[m4,m5,m6],[m7,m8,m9]] = number
console.log(m2) //45
console.log(m7) //24
console.log(m9) //17

//object 
//3. destructring of object
let car = {
    model : "audi",
    color : "black"
}

//normally we print like => objectname.key
console.log(car.model)
console.log(car.color)

//using destucturing
let {model, color} = car
console.log(model)
console.log(color)

//4.destructing of nested object
let student = {
    name : "anuja",
    classinfo : {
        rollnumb : 17,
        std : 10
    }
}

//normally =>
console.log(student.name) //anuja
console.log(student.classinfo.rollnumb) //17

//using destructuring
let {name,classinfo:{rollnumb,std}} = student
console.log(rollnumb)
console.log(name)
console.log(std)












