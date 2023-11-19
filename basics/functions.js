// // function addTwoNumbers(number1, number2){
// //     console.log(number1 + number2);
// // }

// // const result = addTwoNumbers(2, 3)

// // console.log("Result: ", result);


// function addTwoNumbers(number1, number2){
// // let result = number1 + number2
// // return result
//    return number1 + number2
// }

// const result = addTwoNumbers(2, 3)

// console.log("Result: ", result);

// // method no 2
// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please Enter a username")
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(loginUserMessage()) 

// // Method 3

// function loginUserMessage(username) {
//     if(!username){
//         console.log("Please Enter a username")
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(loginUserMessage()) 
// // Method 4

// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please Enter a username")
//         return
//     }
//     return`${username} just logged in`
// }

// // console.log(loginUserMessage()) 
// console.log(loginUserMessage("ibtisam"))

function calculateCartPrice(vali1, val2, ...num1){   /*Rest Operator */
    return num1 
}

// console.log(calculateCartPrice(200, 400, 500, 600))

const user = {
    username: "ibtisam",
    session: 10000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and session price is ${anyobject.session}`);
}

// handleObject(user)
handleObject({
    username: "ibtisam",
    session:2000
})

const myNewArray = [200, 300, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]));