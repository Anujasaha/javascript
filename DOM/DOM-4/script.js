//write a program to add the typed name of flower in unordered list

{/* <ul>
        <p class = "one" >here are some flowers</p>
        <li>mogra</li>
        <li>jasmine</li>
        <li>rose</li>
        <li>lotus</li>
        <li>lily</li>
        <input type="text">
        <button>click to add</button>
        <script src="script.js"></script>
    </ul> */}

let ulList = document.querySelector('ul')
console.log(ulList)

inputBox = document.querySelector('input')
console.log(inputBox)

let btn = document.querySelector('button')
console.log(btn)

btn.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    ulList.appendChild(newLi)
    inputBox.value=""
})



//practice

// btn.addEventListener('click',()=>{
//     let A1 = inputBox.value
//     let A2 = document.createElement('li')
//     A2.textContent = A1
//     ulList.appendChild(A2)
//     inputBox.value=""
// })





