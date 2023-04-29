//while loop

//for loop ==> run till specific duration
//while loop ==> no specific duration 

//=======================================

//syntax of while loop

// initialization 
// while(condition){
//     statement
//     increment/decrement
// }

//=======================================

//print 1-5 with while loop (forward loop)

// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }

//print 5-1 with while loop (backward loop)

// let i=5
// while(i>=1){
//     console.log(i)
//     i--
// }

//print table of 5

// let i=5
// while(i<=50){
//     console.log(i)
//     i=i+5
// }

//=================================================

//while loop with break ==> print 1-7, after 4 break

// let i=1
// while(i<=7){
// console.log(i)
// if(i==4){
//     break
// }
// i++
// }  
//==>here getting output as 1 2 3 4 and after 4 break is applied ==> this is because we write console statement before if block

// let i=1
// while(i<=7){
//     if(i==4){
//         break
//     }
//     console.log(i)
//     i++
// }
//==>here getting output as 1 2 3 and at 4 break is applied ==> this is because we write console statement after if block

//==========================================================

//while loop using continue

//print 1-7 and skip 4 by using while loop

// let i = 1
// while (i <= 7) {
//     if (i == 5) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }
// ==> when we use continue we need to add icrement/decrement statement in if loop as well, else it goes in infinite loop

//============================================================

// write a program to find out even numbers and odd numbers from 1-10
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
        console.log('this is even number')
    }
    else{
        console.log(i)
        console.log('this is odd number')
    }
}

//use continue and while at the same time

