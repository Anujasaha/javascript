//swich case
//switch without break
//program 1

// let day = 6
// switch (day) {
//     case 1:
//         console.log('Monday')
//     case 2:
//         console.log('tuesday')
//     case 3:
//         console.log('wednesday')
//     case 4:
//         console.log('thurday')
//     case 5:
//         console.log('friday')
//     case 6:
//         console.log('saturday')
//     case 7:
//         console.log('sunday')
// }


//program 2
//switch with break
// let day = 6
// switch (day) {
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('tuesday')
//         break
//     case 3:
//         console.log('wednesday')
//         break
//     case 4:
//         console.log('thurday')
//         break
//     case 5:
//         console.log('friday')
//         break
//     case 6:
//         console.log('saturday')
//         break
//     case 7:
//         console.log('sunday')
//         break
// }

//program 3
// let city = "jaipur"
// switch (city) {

//     case "pune":
//         console.log('MH')
//         break

//     case "indore":
//         console.log('MP')
//         break

//     case 'jaipur':
//         console.log('RJ')
//         break

// }


let city = 'mumbai'
switch (city) {
    case "indore" :
    case "gwalior" :
        console.log("MP")
        break

    case "nagpur" :
    case "pune" :
        console.log("MH")
        break

    case "jaipur" :
        console.log("RJ")
    break
    
    default : 
    console.log("invalid city")
}


let country = "netherland"
switch (country){
    case "spain" :
    case "france" :
    case "netherland" :
    case "italy" :
        console.log("this country is in europe")
        break
    default :
        console.log('not in europe')

}

