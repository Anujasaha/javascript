//Problem 1 => click on button and change text color, bg color, height, width

//STEP 1: to find out HTML element

/* <h1 class ="one" id="two">my name is anuja</h1>
<button class="three">click to change</button> */

// let heading = document.querySelector('#two')
// console.log(heading)  // to check element is selected or not => copy path of html file open in browser nd ispect and console

// let btn = document.querySelector('.three')
// console.log(btn)

// //step 2 : code to perform action 
//                 //(action,callback fn)
// btn.addEventListener('click',()=>{
// heading.textContent = "anuja saha"
// heading.style.color = "red"
// heading.style.backgroundColor = "pink"
// heading.style.height = "50px"
// heading.style.width = "150px"
// })

//=====================================================================================

// program 2 => user input : if user type any color then text color and text need to get change to typed color

/* <h1 id="clb">color box</h1>
<input type="text">     
<button>change color</button> */

let clrbox = document.querySelector("#clb")
console.log(clrbox)

let userinp = document.querySelector("input")
console.log(userinp)

let button1 = document.querySelector("button")
console.log(button1)

button1.addEventListener("click",()=>{
    let userEnteredValue = userinp.value
    clrbox.textContent = userEnteredValue
    clrbox.style.color = userEnteredValue
    userinp.value = ""
})



