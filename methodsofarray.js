// program - add 5 in each element of an array

// let numbers = [12, 34, 26, 21, 98]
// let newnumber = []
// for (i = 0; i < numbers.length; i++) {
//     numbers[i] + 5
//     newnumber.push(numbers[i] + 5)
// }
// console.log(newnumber)

//==============================================================

//we can perform above operation without using for loop with the help of methods 

//Map()
//action : performs operation with each and every element of an array
//return : new array

// let number = [12, 10, 53, 47, 07]
// let newnumber = number.map(function (element, index, array) { //=>this function is called as callback function coz it executes without calling 
//     return element * 2                                          //we can take anything as element name 
// })
// console.log(newnumber)


// let birthyear = [1990, 1991, 1992, 1993, 1994] //finf out currernt age
// let currentAge = birthyear.map(function (el) {
//     return 2023 - el
// })
// console.log(currentAge)

//============================================================================

//filter()
//action : filter out the function based on array
//return : new array

// let numbers = [10, 24, 56, 34, 78, 86]  // findout the numbers greater than 50
// let greater50 = numbers.filter(function(element, index, array){
// return element > 50
// })
// console.log(greater50)

//============================================================================

//reduce()

// let marks = [45,56,78,23,98,67]  //add the numbers in array
// let totalmarks = marks.reduce(function(accumulator, element, index, array){
// return element + accumulator
// },10)
// console.log(totalmarks)

//============================================================================

//foreach
//action : Performs the specified action for each element in an array.
// return : nothing

// let student = ['anuja', 'manali', 'ashlesha']
// for (i = 0; i < student.length; i++) {         //using foe loop
//     console.log('welcome ' + student[i])
// }


// student.forEach(function (el, index, arr) {
//     console.log("welcome " + el)
// })

//==============================================================================

//some()
//action : if condition gets true atleast once then give true else give false // 
//return : boolean value
// let marks = [15, 34, 29, 46, 52]
// let finalmarks = marks.some(function(ele, inx, arr){
// ele > 50
// })
// console.log(finalmarks)

//=============================================================================

//every()
//action : Determines whether all the elements of an array satisfy the specified test/condition, if yes => true , else false
//return : boolean
// let numbers = [15, 34, 29, 46, 52]
// let result = numbers.every(function (ele, ind, arr) {
//     return ele < 10
// })
// console.log(result)

//=============================================================================

//find()
//action : find the value of the first element in the array where predicate is true, and undefined otherwise.
//return : Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// score = [12, 67, 34, 87, 34, 32, 97]
// let res = score.find(function (ele, inx, arr) {
//     return ele > 100
// })
// console.log(res)

//=============================================================================

//findIndex()
//action : find the index of first element where cond gets true 
//retun : Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// num = [12, 67, 34, 87, 10, 32, 97, 73]
// a1 = num.findIndex(function (el) {
//     return el > 80
// })
// console.log(a1)

//==============================================================================

//slice()
//action : breaks array as per given startposition and endposition
//return : Returns a copy of a section of an array

// -         -8  -7  -6  -5  -4  -3  -2  -1
//let marks = [12, 67, 34, 87, 10, 32, 97, 73]
// +           0   1   2   3   4   5   6   7

// scale left to right
//arrayName.slice(startposition, endposition)
//endposition optional
//endposition always acts less than 1

// let aa = marks.slice(1, 5)
// console.log(aa)

// let ab = marks.slice(5, -3)
// console.log(ab)

// let ac = marks.slice(-7, -1)
// console.log(ac)

//===============================================================================

//splice 
//return : removed element array

//syntax: arrayName.splice(startindex, no of delet element,replace1,replace2)

//               0   1   2   3   4   5   6   7
// let marks1 = [12, 67, 34, 87, 10, 32, 97, 73]
// let m1 = marks1.splice(1, 1, 10) // 
// console.log(m1) // removes ele - [67]
// console.log(marks1) // [12, 10, 34, 87, 10, 32, 97, 73]

// m2 = marks1.splice(3, 2, 20, 15)
// console.log(m2)
// console.log(marks1)

//===============================================================================

//fill()
//syntax : arrayName.fill(replaceValue, startposition,endposition)

// let marks2 = [12, 67, 34, 87, 10, 32, 97, 73]
// //             0   1   2   3   4   5   6   7

// let m3 = marks2.fill("anuja", 1, 4)
// console.log(m3)

//===============================================================================

//concat()
// let a = [1, 2, 3]
// let b =[5, 6, 7]

// let ress = a.concat(b)
// console.log(ress)

//===============================================================================

//at()
let marks3 = [12, 67, 34, 87, 10, 32, 97, 73]
//             0   1   2   3   4   5   6   7

console.log(marks3.at(5))

let m4 = marks3.at(2)
console.log(m4)