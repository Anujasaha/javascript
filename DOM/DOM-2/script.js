let heading = document.querySelector('.one')
console.log(heading)  

let button = document.querySelector('#btn')
console.log(btn)

button.addEventListener('click',()=>{
   heading.textContent = "anuja is a student"
   heading.style.color = "red"
   heading.style.backgroundColor = "yellow"
})