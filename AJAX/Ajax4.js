// promise combinator - performs parallel execution
 
function getSingleuserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

// async function GetInfo(){
//    let a =  await getSingleuserInfo(1)
//    let b =  await getSingleuserInfo(2)
//    let c =  await getSingleuserInfo(3)
//    let d =  await getSingleuserInfo(4)
//    console.log(a)
//    console.log(b)
//    console.log(c)
//    console.log(d)
// }
// GetInfo()

// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

//1. Promise.all() - return all object/ need to have all true cond to get execute

async function GetInfo() {
    let a =  await Promise.all([
         getSingleuserInfo(1),
         getSingleuserInfo(2),
         getSingleuserInfo(3),
         getSingleuserInfo(4),
 
     ])
     console.log(a)
 }
//GetInfo()

//if one false/reject condition is there then entire execution will fail
async function allMethod(){
    let aa = await Promise.all([
         Promise.resolve("hello"),
         Promise.resolve("bye"),
         Promise.resolve("Rejected"),
         Promise.resolve("Good Afternoon")
 
     ])
     console.log(aa)
 }
//allMethod()


//2. Promise.allSettled() - return all whether it is true or false condition

async function allSet(){
    let aa = await Promise.allSettled([
         Promise.resolve("hello"),
         Promise.resolve("bye"),
         Promise.reject("Try another time"),
         Promise.resolve("Good Afternoon")
     ])
     console.log(aa)
 }
//allSet()


//3. Promise.race()
function getResolve(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello")
        },2000)
    })
}

function getReject(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye")
        },1000)
    })
    
}
 async function allRace(){
    let aa = await Promise.race([
        getResolve(),
        getReject()  
     ])
     console.log(aa)
 }
 allRace()



// //missed the below session

// // promise combinators?? 
// // parallel execution 
// // advantage??


// async function PromiseAll() {
//     try {
//         let a = await Promise.all([
//             Promise.resolve("hello"),
//             Promise.resolve("hello2"),
//             Promise.resolve("hello3"),
//             Promise.reject("rejected"),
//             Promise.resolve("hello4")
//         ])
//         console.log(a)
//     }
//     catch (s) {
//         console.log(s)
//     }
// }
// PromiseAll().then(function () {
//     console.log("bye")
// })


// program 2

// async function PromiseAllSettle() {
//     let a = await Promise.allSettled([
//         Promise.resolve("hello"),
//         Promise.resolve("hello2"),
//         Promise.resolve("hello3"),
//         Promise.reject("rejected because....."),
//         Promise.resolve("hello4")
//     ])
//     console.log(a)
// }
// PromiseAllSettle()


let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('calculated')
    }, 3000)
})
let pro2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('calculated2')
    }, 2000)
})

let pro3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('rejected because not calculated')
    }, 1000)
})


// async function PromiseRace(){
//     let qq = await Promise.race([
//         pro,
//         pro2,
//         pro3

//     ])
//     console.log(qq)
// }
// PromiseRace().then(function(){
//     console.log('bye')
// })

// Promise

// async function PromiseRace() {
//     try {
//         let qq = await Promise.race([
//             pro,
//             pro2,
//             pro3
//         ])
//         console.log(qq)
//     }
//     catch (e) {
//         console.log(e)
//         console.log('please continue execution')
//     }

// }
// PromiseRace().then(function () {
//     console.log('bye')
// })


// Promise.any() -- ignore


// async function PromiseAny(){
//     let r = await Promise.any([
//         pro,
//         pro2,
//         pro3
//     ])
//     console.log(r)
// }
// PromiseAny()

async function PromiseAny(){
    try{
        let r = await Promise.any([
            pro,
            pro2,
            pro3
        ])
        console.log(r)

    }
    catch(e){
        console.log(e)
    } 
}
PromiseAny().then(function(){
    console.log('bye')
})
