//destructuring

//syntax :
//let [] = variable name

//1. destructuring of array
// let rollnumber = [10,20,30,40,50] 
// let [e1, e2, e3, e4, e5] = rollnumber
// //print 40 
// console.log(e4)
// console.log(e1)

// //2. destructuring of nested array
// let number = [[10,45,58],[13,78,29],[24,36,17]]
// let [[m1,m2,m3],[m4,m5,m6],[m7,m8,m9]] = number
// console.log(m2) //45
// console.log(m7) //24
// console.log(m9) //17

// //object 
// //3. destructring of object
// let car = {
//     model : "audi",
//     color : "black"
// }

// //normally we print like => objectname.key
// console.log(car.model)
// console.log(car.color)

// //using destucturing
// let {model, color} = car
// console.log(model)
// console.log(color)

// //4.destructing of nested object
// let student = {
//     name : "anuja",
//     classinfo : {
//         rollnumb : 17,
//         std : 10
//     }
// }

// //normally =>
// console.log(student.name) //anuja
// console.log(student.classinfo.rollnumb) //17

// //using destructuring
// let {name,classinfo:{rollnumb,std}} = student
// console.log(rollnumb)
// console.log(name)
// console.log(std)


//5. array inside object

// let emp = {
//     fullName: "Vaibhav naik",
//     empId: 1234,
//     skills: ["java", "python", "cypress"]
// }

// let { fullName: fuN, empId: emID, skills: [a1, a2, a3] } = emp

// console.log(a2)
// console.log(fuN)
// console.log(fullName)


//6. object inside array
let studentOne = [
    {
        firstName: "Rohan",
        lastName: "mali"
    },
    {
        firstName: "Sham",
        lastName: "kumar"
    }
]

let [{ firstName: f1, lastName: l1 }, { firstName: f2, lastName: l2 }] = studentOne
console.log(l2)

let person = {
    firstName: "shubham",
    family: {
        father: "mohan",
        mother: "mira",
        sister: [
            {
                name1: "rohini",
                age1: 12
            },
            {
                name2: "kaveri",
                age2: 25
            },
            {
                name3: "sharmila",
                age3: 30,
                skills: ['java', 'python', 'react']
            }
        ]
    }
}

let { firstName, family: { father, mother, sister: [{ name1: n1, age1: ag1 }, { name2: n2, age2: ag2 }, { name3: n3, age3: ag3, skills: [a, b, c] }] } } = person
console.log(c)