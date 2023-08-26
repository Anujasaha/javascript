//console.log("Anuja")

//Ajax ----day1
//program 1
// function additionA() {
//     console.log('A is printed')
// }

// function additionB() {
//     console.log('B is printed')
// }

// additionA() //A is printed
// additionB() //B is printed

// additionB() //B is printed
// additionA() //A is printed

//If we call additionA first nd then additionB ==> then will get output as A is printed first nd then B is printed
//but we call additionB first nd then additionB ==> then will get output as B is printed first nd then A is printed
//means First call First go ===> that means THE CODE IS SYNCRONOUS IN NATURE

//===========================================================================

//program 2
// function additionC(){
//     setTimeout(function(){
// console.log('C is printed')
//     },2000)
// }
// function additionD(){
//     console.log('D is printed')
// }

// additionC()
// additionD()
//output : D is printed
//         C is printed

//here as we call additionC first so C is printed should have print first but 'D is printed' is getting print first 
//this is because of setTimeout, means code is asyn in nature, it does not stop the further execution of code 

//==============================================================================

//program 3

// function printInfo() {
//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)
//     setTimeout(function () {
//         console.log('get id')
//     }, 2000)
//     setTimeout(function () {
//         console.log('get info by id')
//     }, 1000)
// }
// printInfo()

//output : 
// get info by id
// get id
// user created
//output should have come as user created, get id, then get info by id but as code is async in nature, it giving output as above.

//================================================================================

// To execute aaync code, syncronously
// To overcome this, have term call back hell
// call back hell --- can write function inside function
// call back hell is tightly coupled , not reusable

// function printInfo() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get id')
//             setTimeout(function () {
//                 console.log('get info by id')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// printInfo()

// output: 
// user created
// get id
// get info by id
// By using call by hell, we got the output as expected but this code is tightly coupled, nd hence not reusable.

//================================================================================

//Ajax Day 2
// hence to overcome this, there is term called as promises
// better way of writing async code in sync by using promises
// promise :
// 1. pending
// 2. resolve
// 3. reject

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10
//     if (a == b) {
//         console.log('promise is completed')
//     }
//     else {
//         console.log('promise is not completed')
//     }
// })

// //consuming the promise
// pro.then(function (a) {
//     console.log(a)
// }, function (b) {
//     console.log(b)
// })

//================================================================

// let pro1 = new Promise(function (resolve, reject) {
//     let city = "pune"
//     if (city.includes('d')) {
//         resolve([11, 12, 13])
//     }
//     else {
//         resolve([45, 15, 25])
//     }
// })

// pro1.then(function (a) {
//     console.log(a[0])
// }, function (b) {
//     console.log(b[2])
// })

//=================================================================

//.then
//.catch
//.finally

// let pro2 = new Promise(function(resolve, reject){
//     let city = "pune"
//     if (city.includes('u')){
//         resolve([11,12,13])
//     }
//     else{
//         reject([45,15,25])
//     }
// })

// pro2.then(function(a){
//     console.log(a[0])
// })
// .catch(function(b){
//     console.log(b[2])
// })
// .finally(function(c){
//     console.log('i will always execute')
// })

//===================================================================

// let pro3 = new Promise(function(resolve, reject){
//     let a =10
//     let b =30
//     if (a>b){
//         resolve('a is called')
//     }
//     else{
//         reject('b is called')
//     }
// })

// //consuming promise
// pro3.then(function(a){
//     console.log(a)  //if condition is true then a, means resolve block will execute
//     return "hello"
// })
// .then(function(b){  //return is stored in b
//     console.log(b)  //hello
// })
// .catch(function(c){ //if condition is false then C, means reject block will execute
//     console.log(c)
// })
// .finally(function(d){
//     console.log('i will always execute') //finally block always execute
// })

//====================================================================================

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('user created')
        }, 3000)
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get id')
        }, 2000)
    })
}

function getInfoById() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('get info by id')
        }, 1000)
    })
}

// createUser()
//     .then(function (a) {
//         console.log(a)
//         return getId()
//     })
//     .then(function (b) {
//         console.log(b)
//         return getInfoById()
//     })
//     .then(function (c) {
//         console.log(c)
//     })
//     .catch(function () {
//         console.log('rejected')
//     })
//     .finally(function () {
//         console.log('finally')
//     })


//OR 
//simplified way of consuming promise 

async function getUser() {
    let a = await createUser()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfoById()
    console.log(c)
}
getUser()


//=========================================================================================

//API ---> application programming interface

//API use to perform communication between client and server
//4 types of parameter
//1. get - to retrive data
//2. post - to create or add data
//3. put - to update data
//4. delete - to delete or to remove data

//URL -            https://reqres.in   /api/users    /2
//url structure -  baseurl       +     response   +  para
//                                          1.query para -- if after response ? (question mark) is present in url --query type
//                                          2.path para  -- if after response / (forward slash) is present in url --path type
