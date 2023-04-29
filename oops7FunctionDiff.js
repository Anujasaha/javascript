//types of function :-
//function declaration
//function expresion
//arrow function

function add(a, b) {
    console.log(a + b)
}

let add1 = function () {
    console.log("hii")
}

let add2 = () => {
    console.log('hello')
}

add(4, 5)
add1()
add2()

//========================================================================

// let x=10 //let is local variable/declaration
// console.log(x) //10

// console.log(window.x) //undefined

//window

// var y=20 // var is a global variable/declaration
// console.log(y) //20
// console.log(window.y)

// let info = {
//     firstname: 'anuja',
//     lastname: 'saha',
//     display: function () {
//         console.log(this.firstname + this.lastname)  //anuja saha
//        // console.log(this == info) //true

//         let greet = function () {
//            // console.log(this == window)  //true
//             console.log(this.firstname + this.lastname)  //NaN
//         }
//         greet()
//     }
// }

// console.log(info.display)
// info.display()

//=============================================================================

var firstname = 'sam'
var lastname = 'roy'
let info1 = {
    firstname: 'anuja',
    lastname: 'saha',
    display: function () {         //function expression
        console.log(this == info1) //true
        console.log(this.firstname + this.lastname)  //anujasaha

        let greet = function () {    //function expression type (function inside function)
            //console.log(this == window)  //true
            console.log(this.firstname + this.lastname)  //samroy
        }
        greet()
    }
}

console.log(info1.display)
info1.display()

//=================================================================================

var firstname = 'sam'
var lastname = 'roy'
let info2 = {
    firstname: 'anuja',
    lastname: 'saha',
    display: function () {         //function expression
        console.log(this == info2) //true
        console.log(this.firstname + this.lastname)  //anujasaha

        function greet () {    //function declaration type (function inside function)
            //console.log(this == window)  //true
            console.log(this.firstname + this.lastname)  //samroy
        }
        greet()
    }
}

info2.display()

//===================================================================================

let info3 = {
    firstname: 'anuja',
    lastname: 'saha',
    display: function () {         //function expression
        console.log(this == info3) //true
        console.log(this.firstname + this.lastname)  //anujasaha

        greet = () => {    // arrow function (function inside function)
           // console.log(this == window)  //false
            console.log(this.firstname + this.lastname)  //anujasaha
        }
        greet()
    }
}

info3.display()

//======================================================================================

let info4 = {
    firstname: 'anuja',
    lastname: 'saha',
    display: () => {         //function expression
        console.log(this == info4) //true
        console.log(this.firstname + this.lastname)  //anujasaha

        greet = () => {    // arrow function (function inside function)
            //console.log(this == window)  //false
            console.log(this.firstname + this.lastname)  //anujasaha
        }
        greet()
    }
}

info4.display()












