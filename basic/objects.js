// singleton "it is build from constructors not literals".
// obejct.create (it is the constructor method of creating singletons)

// object literals
const mySym = Symbol("key1")


const jsUser = {
    name: "ibtisam",
    [mySym]: "key1",
    age: 25,
    location: "gujrat",
}

// console.log(jsUser["name"])
// console.log(jsUser["name"])
// console.log(jsUser[mySym])

// jsUser.email = "ibtisam@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "ibtisam@email.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello ibtisam")
}
jsUser.greetingTwo = function(){
    console.log(`hello ibtisam, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());