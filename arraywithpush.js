//program 1:
//write a program to find out the current age from the birthyear 

let birthyear = [1990, 1991, 1992, 1993, 1994, 1995]

let age = []
for (let i = 0; i < birthyear.length; i++) {
    let ag = (2023 - birthyear[i])
    age.push(ag)
}
console.log(age)

//==================================================================

//program 2:
//write a program to add 2 in each element of an array

let score = [25, 45, 76, 12, 94, 36, 345]
let newscore = []
for (i = 0; i < score.length; i++) {
    let ns = score[i] + 2
    newscore.push(ns)  //OR newscore.push(score[i]+2)
}
console.log(newscore)

//===================================================================

//program 3: 
//write a program to sort greater than 50 numbers from an array

let numbers = [105, 45, 78, 32, 84, 23, 843]
let greater50 = []
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        let gt = numbers[i]
        greater50.push(gt)  //OR greater.push(number[i])
    }
}
console.log(greater50)

//===================================================================

//program 4: 
//write a program to find the sum of an array

let number = [12, 45, 67, 23, 93]
let sum = 0
for (i=0; i<number.length; i++){
    sum = sum + number[i]
}
console.log(sum)

