//Optional chaining operator //denoted by question mark ?
    
let info = {
    firstname : 'anuja',
    lastname : 'saha',
    rollno : 03,
    parent : {
        mother : 'Nilima',
        father : 'node OptionalChaining.js'
    }
}
console.log(info.firstname)
console.log(info.parent?.mother)

let info1 ={
    firstname : 'anuja1',
    lastname : 'saha1',
    city : {
        native : 'nagpur'
    }
}

let info2 ={
    firstname : 'anuja2',
    lastname : 'saha2',
    city : {
        job : 'pune'
    }
}

let info3 ={
    firstname : 'anuja3',
    lastname : 'saha3',
}

let info4 ={
    firstname : 'anuja4',
    lastname : 'saha4',
    city : {
        native : 'nashik'
    }
}

let students = [info1, info2, info3, info4]
students.forEach((el)=>{
    if(el.city?.native)
    {
        console.log('N')
    }
    else if (el.city?.job){
        console.log('J')
    }
    else {
        console.log('No city')
    }
})


 
let a = 9 < 6  && "hello"  //false
console.log(a)

let b = 7 > 6  && "hello"  //hello
console.log(b)

let c = 9 == 9 || "bye"  //true
console.log(c)

let d = 9 > 10 || "bye"  //true in every cond
console.log(c)