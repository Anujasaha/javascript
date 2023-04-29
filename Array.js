// Array : collection of element, and array stores values index wise and index starts with 0
//index          0         1         2         3
let Names = ['Anuja', 'ashesha', 'manali', 'nilima']
// console.log(Names)
// console.log(Names[0])  //Anuja
// console.log(Names[1])  //ashlesha 
// console.log(Names[2])  //manali
// console.log(Names[3])  //nilima
console.log(typeof Names) //interiew question //it gives output as object //here Names is array

//              0         1       2          3           4         5
//let cities =['Nagpur', 'pune', 'mumbai', 'yavatmal', 'amravati','wardha']

// console.log(cities)
// console.log(cities[0])  //nagpur
// console.log(cities[1])  //pune 
// console.log(cities[4])  //amravati
// console.log(cities[3])  //yavatmal

//  for(i=0;i<=5;i++){
//  console.log(cities[i])
//  }

//with for loop
//let country = ['india', 'pakistan', 'china', 'bangladesh', 'shrilanka']
// for(i=0;i<=4;i++){
//     console.log(country[i])
// }
//or
// for (i=0; i<=country.length; i++){
//     console.log(country[i])
// }

//with while loop
// let country = ['india', 'pakistan', 'china', 'bangladesh', 'shrilanka']
// let i=0
// while(i<=4){
//     console.log(country[i])
//     i++
// }

//object: 1.method
//        2.property

//ex: // Object - Human
// Property  - age , color ,gender , height
// Method - talk() , walk()


//property - length
//length : its gives length of array - and index always starts with 0
// let fruits = ['apple', 'banana', 'grapes', 'orange']
// let p1 = fruits.length 
// console.log(p1)


//methods :  
//push() : action - adds the new element at last
//         return - gives new length of array
// let p2 = fruits.push('mango')
// console.log(fruits)
// console.log(p2)


//unshift() : action - adds the new element at start 
//            return - new length of array
// let p3 = fruits.unshift('papaya')
// console.log(fruits)
// console.log(p3)


//pop() : action - removes the last element of array
//        return - returns the removed element
// let fruits = ['apple', 'banana', 'grapes', 'orange']     
// let p4 = fruits.pop()
// console.log(fruits)
// console.log (p4)


//shift() : action - removes the first element of array
//          return - returns the removed element
// let p5 = fruits.shift()
// console.log(p5)
// console.log(fruits)


//includes() : action - search for an element 
//             return - boolean value - if elent found - true else false
// let animals = ['tiger', 'lion', 'elephant', 'monkey']
// let p6 = animals.includes('Tiger')  //false - because js is case sensetive
// console.log(p6)
//console.log(animals.includes('Tiger') )
// let p7 = animals.includes('tiger')
// console.log(p7)


//reverse : reverse the elements in an array in a place
// let animals = ['tiger', 'lion', 'elephant', 'monkey']
// let p8 = animals.reverse()
// console.log(p8)


//indexOf() : gives the index of specific element in an array and //if element is not available it returns -1.
// let animals = ['tiger', 'lion', 'elephant', 'monkey']
// let p9 = animals.indexOf('lion')
// console.log(p9)


//join() : Adds all the elements of an array into a string, separated by the specified separator string.
// let details = ['anuja','ramkrishna', 'sahastrabuddhe', 9960339414, 9975320061 ]
// let p10 = details.join('-')
// console.log(p10)
// let p11 = details.join('*')
// console.log(p11)


//Flat() : Returns a new array with all sub-array elements
let numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(numbers.flat())



//push()
// unshift()
// Pop()
// shift()
// include()
//Reverse()
// indexOf()
// join()
// flat()

