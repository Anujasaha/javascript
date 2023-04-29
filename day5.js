Object

// Human  ---amol =>object
// Property ---- age , height , weight , color , gender
// Method -- talk() , walk() , sleep()

// Vechile -- audi => object
// Property  - color ,type , modelNumber , average , type
// Method -- start(), stop()


// Bank --- icic => object
// Property - bal , accNo , accName , city , IFSC code
// Method -- withdrawl() , deposit()

//object => has property, method

//Javascript
//String => datatype => Object
//property
//method

//*method
//action
//return 
//study()
// action => learn something
// return => marks, job

// let fruit="Apple"
// console.log(typeof fruit) //string

//Methods()
//1. toUpperCase()
//Action => to convert all char of string to capital case
//return => new string
//ex=> 
let fruit = "Apple"
let p1 = fruit.toUpperCase()
console.log(p1) //APPLE

//2. toLowerCase()
//action => to convert all char of string ib=nto small case
//return => new string 
let p2 = fruit.toLowerCase()
console.log(p2) //apple
console.log(typeof p2)

let firstName = "Anuja"
//string store value with the help of index
// // A   n   u   j   a
// // 0   1   2   3   4   => index
console.log(firstName[0])  //A
console.log(firstName[2])  //u

let w1 = "Shree Ganesh"
// //S   h   r   e   e       G   a   n   e   s   h
// //0   1   2   3   4   5   6   7   8   9   10  11
console.log(w1[4]) //e
console.log(w1[5]) // space - means nothing blank
console.log(w1[10]) //s

// //string => stores value indexWise => index start with => 0

//3. indexOf()
//action => find the index of  given char
//return => if char found then gives index number, if not found -1
let fruit1 = "Apple"
// // A  p  p  l  e
// // 0  1  2  3  4

// let d1 = fruit1.indexOf("A")
// console.log(d1) //0

// let d1 = fruit1.indexOf("a")
// console.log(d1) // -1

let d1 = fruit1.indexOf("l")
console.log(d1) 

//method => toupperCase(), toLowerCase(), indexOF()
//property = > length

let name1="ram sham"
// r   a  m     s   h   a  m
// 1   2   3  4  5  6   7  8 => length
// 0   1   2  3   4  5  6  7  => index
//length => length strats from 1
//index starts from 0
console.log(name1.length) //8








