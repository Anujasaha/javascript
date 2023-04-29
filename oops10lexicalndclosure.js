//lexical scope : when we write fn inside fn, then we can access parent prop/methd in child fn
//program 1

function addition() {
    let x = 10
    let y = 20
    console.log(x + y)

    function additionA() {
        let a = 5
        let b = 15
        console.log(a + b + x + y)

        function additionB() {
            let s = 10
            let t = 30
            console.log(x + y + a + b + s + t)
        }
        additionB()
    }
    additionA()
}
addition()


//closure
//program 1

function greet() {
    console.log('Hii')
    return "Hello anuja" //return is the last statement in any fn in programming language
    console.log("Bye anuja") //after return, code not get execute
}
let a = greet()
console.log(a)


//program 2

function calculation(p, q) {
    return function () {
        console.log(p + q)
    }
}
let r = calculation(45, 25)
console.log(r)
r()


// after return statement as well parent fn properties asseccible this is due to closure
// in arrow fn, this keyword refer its immidiate parent
// inside arrow fn if we write arrow fn instead of arrow fn then it refer to window, means global variable