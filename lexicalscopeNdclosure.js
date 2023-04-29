// let human = {
//     name : 'sejal',
//     lastname : 'kumari',
//     age : 25,
//     display : function(){
//         console.log(age)
//     }
// }
// console.log(human.age) //----- object - 25 
// human.display() //will throw error cause it is function  


// let human = {
//     name: 'sejal',
//     lastname: 'kumari',
//     age: 25,
//     display: function () {
//         console.log(this.age)
//     }
// }
// console.log(human.age) //----- object - 25 
// human.display() //25

//==================================================================

//lexical scope :
//function inside function ==> parent function variable are acessible in child function
//ex - 1

function add() {
    let a = 10
    let b = 20
    console.log(a + b)

    function add1() {
        let c = 5
        let d = 15
        console.log(c + d)
        console.log(a + b + c + d)

        function add2() {
            let e = 31
            let f = 29
            console.log(e + f)
            console.log(a + b + e + d)
        }
        add2()

    }
    add1()

}
add()


//ex - 2
function init() {
    let p = 21
    let q = 45
    console.log(p + q)
    //console.log(r - s) //-error--cause not accessible in parent function

    function init1() {
        let r = 23
        let s = 12
        console.log(r - s)
    }
    init1()
}
init()

//=================================================================

//global scope
//ex - 1
let x = 5
let y = 15
function func1() {
    let g = 45
    let h = 23
    console.log(g + h)
    console.log(x + y)

    function func2() {
        let i = 43
        let j = 35
        let x = 20
        let y = 12
        console.log(i + j)
        console.log(x + y)
        console.log(x + y + i + j)

        function func3() {
            let x = 3
            let y = 7
            console.log(x + y)
        }
        func3()
    }
    func2()
}
func1()

//ex - 2
let a1 = 10
let a2 = 30
function func4() {
    let a3 = 20
    let a4 = 10
    console.log(a3 + a4)
    console.log(a1 + a2)

    function func5() {
        let a5 = 5
        let a6 = 5
        console.log(a5 + a6)
        console.log(a1 + a2 + a5 + a6)

        function func6() {
            console.log(a1 + a2)
        }
        func6()
    }
    func5()
}
func4()

//==========================================================================

//closure
function add() {
    let a = 10
    let b = 20
    return a + b  // return means closure
    console.log(a + b + 10) // after the return type - code will not get execute
    console.log('hello')
}
let result = add() //30
console.log(result)


function addd() {
    let aa = 40
    let bb = 50
    return function(){  // return function(), here after return also code is getting executed i.e due to closure
        console.log(aa + bb)
        console.log(aa+bb+10)
        console.log('hello')
    }   
}
let aa = addd()
console.log(aa) //function
aa()