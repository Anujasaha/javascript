{/* <h1 id="flw" class="one">Flowers</h1>
    <ul>
        <li class="flower" >Rose</li>
        <li class="flower" >Lotus</li>
        <li class="flower" >Jasmin</li>
        <li class="flower" >Lily</li>
    </ul> */}

let h1 = document.querySelector('#flw')
console.log(h1)

let li = document.querySelector(".flower") //it gives first element of li
console.log(li)

//for all element of li - document.querySelectorAll
let liList = document.querySelectorAll('.flower') //it gives Nodelist 
console.log(liList)

for (let i = 0; i < liList.length; i++) {
    //console.log(liList[i].textContent) - will give textcontent
    if (i % 2 == 0) {
        liList[i].style.color = "Red"
    }
    else {
        liList[i].style.color = "Blue"
    }
}

