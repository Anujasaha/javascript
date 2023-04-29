//Polymorphism
//poly - means many
//morphism - form

//overriding  => different class, same method name, same signature

//program 1
// class Shape {
//     draw() {
//         console.log('i am generic')
//     }
// }

// class Square extends Shape {
//     draw() {
//         console.log('i am square')
//     }
// }

// class Circle extends Square {
//     draw() {
//         console.log('i am circle')
//     }
// }

// let anu1 = new Shape()
// anu1.draw()  //i am generic 

// let anu2 = new Square()
// anu2.draw()  //i am generic
//              //i am square

// let anu3 = new Circle()
// anu3.draw()  //i am generic
//              // i am square
//              // i am circle

//overriding means, when new method get created of the same name then the values get updated means override and will get output as updated one

//program2
class Shape {
    draw() {
        console.log('i am generic')
    }
}
class Square extends Shape {
    draw() {
        super.draw()
        console.log('i am square')
    }
}
class Circle extends Square {
    draw() {
        super.draw()
        console.log('i am circle')
    }
}

let a1 = new Circle()
a1.draw()

let a2 = new Shape()
a2.draw()

let a3 = new Square()
a3.draw()

//program 3
class myntra {
    image() {
        console.log('image of items')
    }
}
class lifestyle extends myntra {
    image() {
        super.image()
        console.log('image of lifestyle items')
    }
}
class footware extends lifestyle {
    image() {
        super.image()
        console.log('image of footware items')
    }
}

let m1 = new myntra
m1.image()  //image of items

let m2 = new lifestyle
m2.image()  //image of items
//image of lifestyle items

let m3 = new footware
m3.image()  //image of items
// image of lifestyle items
// image of footware items

//if we want to inherite the properties/methods from parent class then we need to use the super keyword.

//=======================================================================

//overloading ==> same class, same method name, different signature(parameter)

class Calculator {
    addition(a, b) {
        console.log(a + b)
    }

    addition(a, b, c) {
        console.log(a + b + c)
    }

    addition(a, b, c, d) {
        console.log(a + b + c + d)
    }
}

let s1 = new Calculator
s1.addition(10, 20) //NaN - not a number 
s1.addition(10, 20, 5) //NaN
s1.addition(10, 20, 5, 15) //50
// this is because javascript does not support overriding, when we write the method with same name with diff signiture nd when we pass the argument it consider the latest or updated method (overwrite)
// whereas in java we can achieve this drawback easily beacuse i.e default in java

//still to achieve this drawback in javascript we can perform it explicitly.

class calci {
    add(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }

    }
}

let c1 = new calci()
c1.add(5, 7) //12

c1.add(5, 7, 5) //17

c1.add(5, 7, 4, 2) //18