let singleEle= document.querySelector("li") // document.queryselector gives single element
console.log(singleEle)

let allEle= document.querySelectorAll("li") // it gives nodelist
console.log(allEle) // nodelist - static : means we can not changes in the list, cant add more elements into the list
console.log(allEle.length)

//===========================================================================

//to add one more li element in ul lit
let newLi= allEle[0].parentNode.appendChild(document.createElement('li'))
console.log(newLi)

console.log(allEle)
console.log(allEle.length)

//============================================================================

//get element
let htmlcollection = document.getElementsByTagName("li") 
console.log(htmlcollection) // htmlcollection is dynamic, we can make changes into the list, can add element in existing list
console.log(htmlcollection.length) //4

htmlcollection[0].parentNode.appendChild(document.createElement('li'))
console.log(htmlcollection)
console.log(htmlcollection.length) //5

//get element by id
let a = document.getElementById("one")
console.log(a)

//get element by class name
let b = document.getElementsByClassName("tenth")
console.log(b)

//get element by tag name
let c = document.getElementsByTagName('li')
console.log(c)

//=============================================================================

//<p class="para">Paragraph</p>
pEle = document.querySelector('.para')
console.log(pEle)

console.log(pEle.classList) //gives total class present in element

//to add new class 
pEle.classList.add('ten')
console.log(pEle)
console.log(pEle.classList)

//to remove class
pEle.classList.remove('ten')
console.log(pEle.classList)

//toggle : if class present then it will remove that class nd if not present then it will add the class 
pEle.classList.toggle('tenthclass')
console.log(pEle.classList)

pEle.classList.toggle('tenthclass')
console.log(pEle.classList)

