// map => datatype
// we use map so that we can use keys of different datatype
//in object we can use string datatype only

let aa = new Map()
//console.log(aa)  //{}

//methods of map
//to add element
//1. set() : Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

aa.set("firstname", "anuja")
aa.set("lastname","saha")
aa.set("age", 27)
aa.set("rollnumber", 25)
aa.set(200,2)
aa.set(true, "is married")
console.log(aa)


//retrive
//2. get()
let a1 = aa.get("firstname")
console.log(a1)

let a2 = aa.get(200)
console.log(a2)

let a11 = aa.get(true)
console.log(a11)


//3. has() 
//boolean indicating whether an element with the specified key exists or not.
//search for an key, if found return true else false

let a3 = aa.has(200)
console.log(a3) // true

let a4 = aa.has("skills")
console.log(a4) // false


//4. delete()
//true if an element in the Map existed and has been removed, or false if the element does not exist.
let a5 = aa.delete("rollnumber")
console.log(a5)
console.log(aa)


//5. clear() : clear out the entire map
// aa.clear()
// console.log(aa)


console.log(aa.size)  //4 //==>gives property size 


//6. forEach()
aa.forEach(function(val, key){
console.log(key,val)
})


//loop
for(let key of aa.keys()){
    console.log(key)
}

for(let val of aa.values()){
    console.log(val)
}

for(let [a,b] of aa.entries()){
    console.log(a,b)
}


console.log(aa.keys())
console.log(aa.values())
console.log(aa.entries())