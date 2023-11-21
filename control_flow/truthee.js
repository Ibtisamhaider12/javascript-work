const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 /*it checks safely if a function gives value in DB otherwise consider it null*/
// val1 = undefined ?? 15


// console.log(val1);

// Terniary Opterator ... differnt than nullish oprator

//Syntax
// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less Than 80");