// conditional statements

// need => single input multiple  output

//if, else if, else, switch case

//syntax

// if(condition){
//  statements  
// }

//if statements

// if (true){
//    console.log ("hi")
// }

// if (false){
//     console.log ('hello')
// }

// if (5 == 5) {
//     console.log("number is equal")
// }

// if (4 == 5) {
//     console.log("number not equal")
// }

//note: if only gives output for the true condition statements, for false statements its doesnt provide output

//program 1
// tickets
// 1-5 => 10% discount
// 6-10 => 20% discount
// >10 => 30% discount 

// let ticketnumber = 1
// if (ticketnumber > 0 && ticketnumber <= 5) {
//     console.log('you got 10 % discount')
// }
// if (ticketnumber > 5 && ticketnumber <= 10) {
//     console.log('you got 20 % discount')
// }
// if (ticketnumber > 10) {
//     console.log('you got 30 % discount')
// }

//note: if executes each line of statements, if first condition statement giving the output but still it goes in 2nd condition statement,
// and hence it increase the execution time....

//program 2 

// let ticketN = 7
// if (ticketN > 0 && ticketN <= 5) {
//     console.log('you got 10% discount')
// }
// if (ticketN > 5 && ticketN <= 10) {
//     console.log('you got 20% discount')
// }
// if (ticketN > 10) {
//     console.log('you got 30% discount')
// }


// ticketN = 15
// if (ticketN > 0 && ticketN <= 5) {
//     console.log('you got 10% discount')
// }
// else if (ticketN > 5 && ticketN <= 10) {
//     console.log('you got 20% discount')
// }
// else if (ticketN > 10) {
//     console.log('you got 30% discount')
// }

//note: else if executes the statements till the condition get satisfied, once the statement gets true it does not go in the 2nd block
// it save the execution time....

//program 3

// marks = 89
// if (marks > 90) {
//     console.log("grade A")
// }
// else if (marks > 80) {
//     console.log("grade B")
// }
// else if (marks > 70) {
//     console.log("grade C")
// }

//single condition 

// score = 72
// if (score > 90) {
//     console.log('qualified')
// }
// else {
//     console.log('disqualified')
// }

//ternary operator => single condition
//condition ? true condition : false condition 

// let score1=89
// score1 > 90 ? console.log('qualified') : console.log('disqualified')


//let number = 12
// if (number > 10) {
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }

let number = 15
(number > 50) ? console.log('greater') : console.log('not greater')

