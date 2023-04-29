//string
//string ==> object 
//object ==> property & method

//method :
//action 
//return

//======================================================

let student = "anuja"
console.log(student)
console.log(typeof student)
console.log(typeof "anuja")
console.log(typeof '14')

//=======================================================

//string stores value index wise 

let firstName = "Anuja"

// A n u j a
// 0 1 2 3 4 ==> index starts with 0 

console.log(firstName[0]) // A
console.log(firstName[2]) // u 
console.log(firstName[3]) // j

//========================================================

//propery ==> length 
//length ==> gives total number of char 

console.log(firstName.length)

let fullName = "anuja saha"
console.log(fullName.length) // 10 - space counted

//=========================================================

//method 
//1. toUpperCase
//action : convert all char into upper case
//return : new sting

let fruit = "apple"
let a1 = fruit.toUpperCase()
console.log(a1)

//===========================================================

//2. toLOwerCase
//action : Converts all the alphabetic characters in a string to lowercase.
//return : new string 

let animal = "TIGER"
let a2 = animal.toLowerCase()
console.log(a2)

//============================================================

//3. indexOf
//action : give index of given char // if index not found returns -1
//return : number 

let Name = "Anuja"
let a3 = Name.indexOf('A') //0   
console.log(a3)

console.log(Name.indexOf('n')) //1  

console.log(Name.indexOf('a'))

//==============================================================

//4. include()
//action : find the char or substring present in string, if found return true else return false
//return : boolean

let Name1 = "shree ganesh"
let s1 = Name1.includes('shree')
console.log(s1) //true

console.log(Name1.includes('Shree')) //false cause javascript is case sensetive language

console.log(Name1.includes('g')) //true

//================================================================

//5. trim()
//action : removes the space from start and end
//return :  new string

//let fullname = " anuja saha "

// console.log(fullname)
// console.log(fullname.length)

// let t1 = fullname.trim()
// console.log(t1)
// console.log(t1.length)

//================================================================

//6. trimStart()
//action : removes space from start
//return : new string 

let fullname = "     anuja saha "
console.log(fullname)
console.log(fullname.length) //16

let t2 = fullname.trimStart()
console.log(t2)
console.log(t2.length) //11

//=================================================================

//7. trimEnd()
//action : removes the space from end 
//return : new string

let fullname1 = "  Anuja  "
console.log(fullname1)
console.log(fullname1.length) //9
let t3 = fullname1.trimEnd()
console.log(t3)
console.log(t3.length) //7

//==================================================================

//8. startWith()
//action : check weather the string starts with given char or substring 
//return : boolean

let flower = 'jasmine'
let f1 = flower.startsWith('jas')
console.log(f1) //true 

let f2 = flower.startsWith("as")
console.log(f2) //false

let f3 = flower.startsWith("j")
console.log(f3) //true

//===================================================================

//9. endWith()
//action : check weather given string ends with given char or substring
//return : boolean 

let flowerr = 'sunflower'
let f11 = flowerr.endsWith('r')
console.log(f11) //true

let f22 = flowerr.endsWith('R')
console.log(f22)

let f33 = flowerr.endsWith('wer')
console.log(f33)

//======================================================================

//10. slice()
//action : breaks string as per start and end index
//return : string

let fname = 'Anuja saha'

// -10 -9 -8 -7 -6 -5  -4 -3 -2 -1
//   A  n  u  j  a      s  a  h  a 
//   0  1  2  3  4  5   6  7  8  9

//left => right 
//right to left blank string
//string.slice(startposition, endposition)
//endposition optional
//endposition number is always less than 1

// let fn1 = fname.slice(1, 6)
// console.log(fn1) // nuja 

// let fn11 = fname.slice(4, 7)
// console.log(fn11) // a s

// let fn12 = fname.slice(0, 5)
// console.log(fn12) //Anuja 

let fn13 = fname.slice(6, 9)
console.log(fn13) //sah

let fn14 = fname.slice(-9, -2)
console.log(fn14) //nuja sa

console.log(fname.slice(-10, -5)) //Anuja

console.log(fname.slice(-2, -8))

//======================================================================

//11.split()
//return : array 

let myname = 'Anuja saha'
let m11 = myname.split('u')
console.log(m11) //'An', 'ja saha'

console.log(myname.split('a')) //'Anuj', ' s', 'h', '' 

let t = 'shree ganesh'
console.log(t.split("a")) //'shree g', 'nesh'

console.log(t.split(" ")) //'shree' , 'ganesh'

//=========================================================================

//12.charAt()
//if index not found => blank string

let girl = "manali"
//0 1 2 3 4 5
//m a n a l i
let g1 = girl.charAt(1)
console.log(g1)  //a

console.log(girl.charAt(4))  //l

console.log(girl.charAt(6))

//===========================================================================

//13.charCodeAt()
//ASCII value return 

console.log(girl.charCodeAt(2))

console.log(girl.charCodeAt(7)) //NaN

// //array ==> join() => returns --> string datatype

// //string ==> split() ==> returns --> arrray datatype


//string concatination(+)

//string+string=> string
//sting+number=> string
//number+string==> string
//number+number=> number
// let a="mayuri"
// let b=10
// let c=20

// console.log(b+c) //30
// console.log(a+b) //mayuri10
// console.log(b+c+a)//30mayuri
// console.log(a+b+c) //mayuri1020


// have to print => my firstName is Anuja and my lastname is Saha
let firstNamee = "Anuja"
let lastName = "Saha"

console.log("my firstname is" + firstNamee + "and my lastname is" + lastName)
//my firstname isAnujaand my lastname isSaha

//string interpolation :
console.log(`My firstname is ${firstNamee} and my lastname is ${lastName}`)
//my firstName is Anuja and my lastname is Saha

console.log(typeof `${2 + 2}`)

