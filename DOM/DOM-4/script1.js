
let bodyele = document.querySelector('body')
console.log(bodyele)

bodyele.addEventListener('click',function(event){
    //console.log(event.target)       //.target is a property which gives the element of tapped/clicked text, can check it on console
    console.log(event.target.tagName) //it return tagnames in capital letters
    console.log(event.target.id)      //if id is not present in element then it return blank
    console.log(event.target.textContent) //gives text of clicked text
})