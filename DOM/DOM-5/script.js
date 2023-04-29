{/* <body>
<h1>Cities</h1>
<ul>
    <p>name of cities</p>
    <li>nagpur</li>
    <li>wardha</li>
    <li>pune</li>
    <input type="text">
    <button>click</button>
</ul>
</body> */}

let ulList = document.querySelector('ul')
console.log(ulList)

let inputbox = document.querySelector('input')
console.log(inputbox)

let btn = document.querySelector('#btn1')
console.log(btn)

//STEP 4
ulList.addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.className == "remove") {
            let li=event.target.parentElement //li
            let ul=li.parentElement //ul
            ul.removeChild(li)
        }
        if (event.target.className == "up") {
            let li=event.target.parentElement //li
            let ul=li.parentElement //ul
            let prev=li.previousElementSibling //prev li element
            if(prev){
                ul.insertBefore(li, prev)
            }
        }
        if (event.target.className == "down") {
            let li=event.target.parentElement
            let ul=li.parentElement
            let next=li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)
            }
        }
    }
})

//STEP 1
btn.addEventListener('click', function () {
    let text = inputbox.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    //STEP 3 (Calling the function)
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputbox.value = ""
})


//STEP 2
{/* <button class = "remove">Remove</button>
        <button class = "up">Up</button>
        <button class = "down">Down</button> */}

function createButtons(element) {
    //Remove button
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" //<button>Remove</button>
    remove.className = remove //<button class="remove">Remove</button>
    element.appendChild(remove)

    //UP button
    let up = document.createElement('button') //<button></button>
    up.textContent = "UP" //<button>Up</button>
    up.className = up //<button class="up">Up</button>
    element.appendChild(up)

    //Down button
    let down = document.createElement('button') //<button></button>
    down.textContent = "Down" //<button>Down</button>
    down.className = down //<button class="down">Down</button>
    element.appendChild(down)
    
}



