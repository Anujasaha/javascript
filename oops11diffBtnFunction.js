//1. function declaration

function add(x, y) {
    return x + y
}
let z = add(10, 20)
console.log(z)


//2. function expression 

let add1 = function (a, b) {
    return a + b
}
let c = add1(12, 15)
console.log(c)

//3. arrow function

// let add2 = (e, f) => {
//     return e + f
// }
// let g = add1(12, 13)
// console.log(g)

//can shorten the arrow function if single statement in fn to execute
let add2 = (e, f) => e + f
let g = add1(17, 13)
console.log(g)

//========================================================================



// let info = {
//     Name : "anuja",
//     lname : "saha",
//     age : 20,
//     rollno : 14,
//     display : function(){
//         console.log(this) //info
//         console.log(info.Name + info.lname)
        
//         function display2(){
//             console.log(this) //window
//             console.log(this.Name + this.lname)
//         }
//         display2()
//     }

// }
// info.display()



// let info = {
//     Name : "anuja",
//     lname : "saha",
//     age : 20,
//     rollno : 14,
//     display : function(){
//         console.log(this) //info
//         console.log(info.Name + info.lname)
        
//         let display2 = () => {
//             console.log(this) //info
//             console.log(this.Name + this.lname)
//         }
//         display2()
//     }

// }
// info.display()


var Name = "sana"
var lName = "roy"
let info = {
    Name : "anuja",
    lname : "saha",
    age : 20,
    rollno : 14,
    display : ()=> {
        console.log(this) //window -scope
        console.log(this.Name + this.lname)
        
        let display2 = () => {
            console.log(this) //window
            console.log(this.Name + this.lname)
        }
        display2()
    }

}
info.display()