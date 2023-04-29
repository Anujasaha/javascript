// //Math.floor ==> it gives the lowest value from scale
// console.log(Math.floor(14.2))
// console.log(Math.floor(25.99))
// console.log(Math.floor(72.14))
// console.log(Math.floor(-45.55))
// console.log(Math.floor(-7.1))

//========================================================

// //Math.ceil ==> it gives highest value from decimal
// console.log(Math.ceil(15.14))
// console.log(Math.ceil(77.1))
// console.log(Math.ceil(5.5))
// console.log(Math.ceil(-51.12))
// console.log(Math.ceil(-68.54))

//========================================================

// //Math.round ==> it round off the number 
// console.log(Math.round(21.89))
// console.log(Math.round(21.25))
// console.log(Math.round(-45.21))
// console.log(Math.round(-75.69))

//========================================================

// //Math.random ==> it gives random number/value between 0.00-0.99
// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())


// //program to get a random number between 1-5
// console.log(Math.random()*5)  //==> it will give random value between 0.00-4.95
// console.log(Math.random()*5)
// console.log(Math.random()*5)
// console.log(Math.random()*5)


// console.log(Math.floor(Math.random()*5+1)) // ==> math floor will give value in integer and by adding 1, it will give output between 1-5
// console.log(Math.floor(Math.random()*5+1))

//====================================================================================

//program => guessing game ==> guess the random number
// //random number ==> 1-5
// //user input ==> any number
// //guess is correct 
// //guess is incorrect

// let randomNumber = Math.floor(Math.random()*5+1)
// console.log(randomNumber)

// let userinput = prompt('enter any number between 1-5')
// if (userinput==randomNumber){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guess is incorrect')
// }

//=====================================================================================

//write a program, to allow user to guess the number thrice

let randomNumber = Math.floor(Math.random() * 7 + 1)
console.log(randomNumber)
for (let i = 1; i <= 3; i++) {
    let userinput = number(prompt("enter any number between 1-7"))
    if (userinput === randomNumber) {
        console.log("your guess is correct")
    }
    else {
        console.log("your guess is incorrect")
    }
}

//if we use comparision with 3 operator like === then we need to write number keyword before prompt statement else it will give error 
//because prompt works on string

//=====================================================================================

//notes:
//for user input ==> we use prompt method, and prompt ==> it works on windows ==> and windows works on html language
//steps to give user input
//1. create new file on vs code with extention .html
//2. enter shift + ! ==> select 1st ==> in body enter scr and then enter js file name ==> need to write in formatS: <script src="filename.js"></script> => save 
//3. right click on html file and copy path and paste it on browser, again right click and select inspect
//4. refresh and check random number and give user input 


