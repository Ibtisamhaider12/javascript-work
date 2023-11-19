let a = 300 
if(true) {
    let a =10
    const b = 50
    // console.log("INNER: ", a);
}

// console.log(a);

function one(){
    const username = "ibtisam"

    function two(){
        const website = "facebook"
        console.log(username);
    }
    //  console.log(website);
    // two()
}

// one()

addone(5)
function addone(num){
    return num + 1
}


addTwo(5)
/*its also known as expression*/ const addTwo = function(num){
    return num + 2
}