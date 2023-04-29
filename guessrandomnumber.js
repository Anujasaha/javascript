//guess random number with 3 user chance ==> using break statement

// let randomNumber = Math.floor(Math.random() * 5 + 1)
// console.log(randomNumber)
// for (i = 1; i <= 3; i++) {
//     let userinput = prompt("enter any number between 1-5")
//     if (userinput == randomNumber) {
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }
// }

//=========================================================================

// we can use for loop - when we know the duration
// we can use when loop - when we dont know the duraation

//=========================================================================

//write a program for infinite user attempt to guess the number (using while loop)

// let randomNumber = Math.floor(Math.random() * 5 + 1)
// console.log(randomNumber)
// let userinput                       //==> here the value stored is undefinite
// while (userinput != randomNumber) {
//     userinput = Number(prompt('enter any number between 1-5'))
//     if (userinput === randomNumber) {
//         console.log('guess is correct')
//     }
//     else {
//         console.log('guess is incorrect')
//     }
// }

//=============================================================================

// let randomNumber = Math.floor(Math.random() * 5 + 1)
// console.log(randomNumber)
// let userinput = Number(prompt("enter any number between 1-5"))
// while (userinput != randomNumber) {
//     userinput = Number(prompt("enter any number between 1-5"))
//     if (userinput === randomNumber) {
//         console.log("guess is correct")
//     }
//     else {
//         console.log("guess is incorrect")
//     }
// }

//note: in above program if we define userinput outside the loop and if user guess the number correct in 1st attempt then (userinput!=randomNumber) - 
//condition will get false and it will not go in while loop so output will not get print as guess is correct or not. 
//==> to overcome this ==> do while 

//================================================================================

// do while loop 

// let i=1
// do{
//     console.log(i)
//     i++
// }
// while(i<=5)

let randomNumber = Math.floor(Math.random() * 5 + 1)
console.log(randomNumber)
let userinput
do {
    userinput = Number(prompt('enter any number between 1-5'))
    if (userinput === randomNumber) {
        console.log('guess is correct')
    }
    else {
        console.log('guess id incorrect')
    }
}
while (userinput != randomNumber)
