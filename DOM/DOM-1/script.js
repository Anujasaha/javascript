//there are four ways of finding a html element 
//document.querySelector() -- is method

////<h1 class="student" id="one" name="textOnly">Anuja</h1>

//1. by tagname
let bytagname = document.querySelector('h1')
console.log(bytagname)
//or
console.log(document.querySelector('h1'))


//2. by class (.)
let byclass = document.querySelector('.student')
console.log(byclass)


//3. by id (#)
let byid1 = document.querySelector('#one')
console.log(byid1)

let byid2 = document.querySelector('#two')
console.log(byid2)


//4. by common formula 
//tagname[attribute="value"]
let bycommonformula = document.querySelector('h1[name="textOnly"]')
console.log(bycommonformula)


//program1 => by clicking on Anuja, text needs to get change to sahastrabuddhe
// bytagname.addEventListener('click', function(){
//     bytagname.textContent = "sahastrabuddhe"
// }) 

// byclass.addEventListener('click', function(){
//     byclass.textContent = "sahastrabuddhe"
// })

byid2.addEventListener('click',function(){
    byid2.textContent = "saha"
})


//program2 =>
byclass.addEventListener('click', function(){
    byclass.textcontent = byclass.textContent.toUpperCase()
})

