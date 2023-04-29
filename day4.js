//Javascript

//*object

// Vehicals=> audi , nano, mercedes

// Banks => SBI, ICICI, Kotak mahinda

// Person => Mayuri , mahesh, veena, gaurav

// *multiple datatypes (number, string, boolean, undefined, null)

let a = 100
console.log(a)
console.log(typeof a)

let firstname = "anuja"
console.log(typeof firstname)

let nickname = 'anu'
console.log(typeof nickname)

let a1 = `meera`
console.log(typeof a1)

//*string denotes by ('' "" ``)

let x1 = "1000"
console.log(typeof x1) // datatype of x1 will be string cause it is in " "

console.log(typeof 5) // number

console.log(typeof '5') // string

let x2 = true
console.log(typeof x2) // boolean => true, false

//2. comparison operator => <, >, <=, >=, ==, !=, ===, !== 

console.log(3 < 5)

console.log(3 > 5)

console.log(3 <= 5)

console.log(5 >= 5)

console.log(5 >= 3)

// console.log(5 != '5') //false

// console.log(5 !== '5') //true

// console.log(20 > 10) //true

// console.log(5 < '-2') //false

// console.log(10 >= -9) //true

// console.log(10 >= 10) //true

// console.log(5 <= 3) //false

// console.log(100 <= 200) //true

//* !=  ,== //value compare
//* !== ,=== // value and datatype compare

console.log(5 == "5") // true

console.log(5 === '5') // false 

console.log(7 != 7) // false

console.log(9 !== 7) // true

console.log(6 !== 6) // false

//3. logical operator => AND (&&), OR (||), NOT (!)

//1. AND (&&) => multiplication 

// true && true => true
// true && false => false
// false && true => false 
// false && false => false

console.log(6 == 6 && 7 > 5)  //true
             true  &&  true

console.log(7 > 2 && 10 >= 12)  //false
             true && false

console.log(7 != 7 && 8 == '8') //false
            false  &&  true

console.log(15 == 16 && 8 === '8') //false        
              false  && false

//2. OR (||) => addition

// true || true => true
// true || false => true 
// false || true => true
// false || false => false 

console.log(7 == '0' || 80 >= 70) //true
// //             false || true => true

console.log(50 > 24 || 5 != 4) //true
// //            true  ||  true 

console.log(29 < 12 || 6 !== '6') //true
// //            false ||  true

console.log(-2 > -1 || 5 > 10)
// //          false   || false => false

// //  -5    -3   -2   -1  0   1  2  3

// // (3> 2) //T
// // (-1 >-2) //T

//3. NOT (!) 

// !true => false
// !false => true 

console.log(!10 == 10) //false

console.log(!(7 > 5)) //false

console.log(!(5 === "5")) //true

console .log(!4 >= 1)  //false









