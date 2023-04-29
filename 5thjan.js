// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for (let i = 2; i <= 20; i = i + 2) {
//     console.log(i)
// }


//calculate sum of 1 to 10

let sum = 0
for (let i = 1; i <= 10; i++) {
    console.log(i)
    sum = sum + i
}
console.log(sum)


//5th feb 
//3. by using method

class studenttwo {
    setFname(fn) {
    this.firstname = fn
}
setLname(ln){
    this.lastname = ln
}
setAge(ag){
    this.age = ag
}
setRnumber(rn){
this.rollnumber = rn 
}
}

let anuja = new studenttwo()
console.log(anuja) //{}
anuja.setFname("anuja")
anuja.setLname('saha')
anuja.setAge(25)
anuja.setRnumber(7)
console.log(anuja)

let manali = new studenttwo()
manali.setFname('manali')
manali.setLname('saha')
manali.setAge(22)
manali.setRnumber(12)
console.log(manali)

