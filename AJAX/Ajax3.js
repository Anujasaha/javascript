//Ajax ==> 
//promise use : to convert async to sync
//can consume code using .then and async await 


//program : have to write a code to fetch the user info page wise 


// API  -- list of user page wise -- //https://reqres.in/api/users?page=2 // ID
// API  -- single user info -- // https://reqres.in/api/users/2 // Info


function getUserPageWise(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then (function(response){
        return response.json()
    })
    .then(function(response){
    //  console.log(response)
        return response.data[0].id
    })
}
// getUserPageWise(1) // it will return id 

function singleUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
        //  console.log(response) 
            return response.data
        })
}
// singleUserInfo(2) // it will return single user object 

function renderHtml(user){
    document.write(`<h1>${user.first_name}</h1>`)
    document.write(`<h1>${user.last_name}</h1>`)
    document.write(`<h1>${user.id}</h1>`)
    document.write(`<h1>${user.email}</h1>`)
    document.write(`<img src = "${user.avatar}"/>`)
}

// getUserPageWise(2)
// .then(function(id){
//     console.log(id)
//     return singleUserInfo(id)
// })
// .then(function(user){
//     renderHtml(user)
// })

// OR another way using async await

async function info(pageNumber){
    let id = await getUserPageWise(pageNumber)
    let user = await singleUserInfo(id)
    renderHtml(user)
}
info(2)
