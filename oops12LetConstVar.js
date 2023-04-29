let x = 10
console.log(x) //10
x = 40  //update
console.log(x) //40

const y = 20 
console.log(y) //20
// y = 5          //we const variable value can not be update
//console.log(y) //error - Assignment to constant variable

var z = 25
console.log(z)

// scope 

//{}  => block

// let is block scope variable

// const is block scope variable

// var is function scope variable

//===================================================

// program 1

{
    let x1=5
    console.log(x1)
}
// console.log(x1) //error

// program 2

let y1 = 100
{
    let y1 = 200
    console.log(y1) //200
}
console.log(y1) //100

//program 3

let z1 = 25
{
    console.log(z1) //25
    z1 = 55
    console.log(z1) //55
}
console.log(z1) //55

//======================================================

//constant variable --- {} block scope
//program 4

// {
//     const p = 250
// }
//console.log(p) //p1 is not defined - error - coz cant access outside the block

//program 5

const p = 13
{
    const p = 15
    console.log(p)
}
console.log(p)

//program 6

// const p1 = 13
// {
//     console.log(p1)
//     p1 = 15          //cant update const
//     console.log(p1)  //error - Assignment to constant variable
// }
// console.log(p1)

// var variable
//program 7

{
    var m = 42
}
console.log(m)

//program 8

// var m1 = 250
// function add(){
//     m1 =350
//     console.log(m1)
// }
// console.log(m1)
// add()
// console.log(m1)  //250,350,350 - here value gets update


var m1 = 250
function add(){
    var m1 =350
    console.log(m1)
}
console.log(m1)
add()
console.log(m1) //250,350,250

