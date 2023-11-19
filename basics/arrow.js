const user = {
    username: "ibtisam",
    price: 5000,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()


// const chia = function () {
//     let username = "ibtisam"
//     console.log(this.username);
// }


const chia = () => {
    let username = "ibtisam"
    // console.log(this);
}

// chia()


// ++++++++++++ Arrow ++++++++

// normal 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// implicit method

// const addTwo = (num1, num2) =>  num1 + num2

// anotherMethod
// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "ibtisam"} )


console.log(addTwo(5, 7));


const myArray = [2, 5, 7, 4, 10]