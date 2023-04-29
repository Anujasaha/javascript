// class ---- object 
// class --- 4 -- Inheritance , polymorphism , abstraction 
// encapsulation 

//Write a program for bank activity - like as follows
//properties : accName,accNumber,branch,bal
//methods() : deposit(), withdrawl(), transaction(), totalDeposite(), totalWithdrawl(), lastFiveTranscation()

class Bank {
    constructor(accName, accNo, branch, bal) {
        this.accName = accName
        this.accNo = accNo
        this.branch = branch
        this.bal = bal
        this.transaction = []
    }
    
    deposite(amount) {
        this.bal = this.bal + amount   //deposite means add +amount
        this.transaction.push(amount)  //use push method to add amount into this.transaction blank array
        return this.bal
    }

    withdrawl(amount) {
        if (this.bal >= amount) {
            this.bal = this.bal - amount   //withdrawl means -amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('you have insufficient balance to withdrawl')
        }
    }

    //last five transaction
    lastfivetransaction() {
        return this.transaction.slice(-5)  //slice method cut the array into parts/pieces (here -5 indicates start position)
    }
    //slice ex -  -9    -8   -7  -6   -5   -4   -3    -2   -1
    // let t = [200, -500, 400,-50, 220, -300,-900, 200, 400]


    //to calculate total deposite amount
    totaldeposite() {
        return this.transaction.filter((el) => {  //here .filter method used to filterout +amount
            return el > 0
        }).reduce((acc, el) => {  //.reduce to add all +amount
            return acc + el
        }, 0)
    }

    //to calculate total withdrawl amount
    totalwithdrawl() {
        return this.transaction.filter(function (el) {  //here .filter method used to filterout -amount
            return el < 0
        }).reduce(function (acc, el) {  //.reduce to add all -amount
            return acc + el
        }, 0)
    }

}

let anuja = new Bank("anuja", 123456, "hingna", 1000)
console.log(anuja)
anuja.deposite(500)
console.log(anuja.transaction)
console.log(anuja.deposite(300))
console.log(anuja.withdrawl(100))
console.log(anuja.withdrawl(200))
console.log(anuja.deposite(200))
console.log(anuja.deposite(50))
anuja.withdrawl(2000)
console.log(anuja.transaction)
console.log(anuja.lastfivetransaction())
console.log(anuja.totaldeposite())
console.log(anuja.totalwithdrawl())



