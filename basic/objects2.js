// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "ibt@123"
tinderUser.name = "Saam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "ibtisam@123",
    fullname: {
        userfullname: {
            firstname: "ibtisam",
            lastname: "haider"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} 
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

/* important */
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in Urdu",
    price: "999",
    courseInstructure: "ibtisam"
}

// course.courseInstructure

const {courseInstructure} = course

console.log(courseInstructure);