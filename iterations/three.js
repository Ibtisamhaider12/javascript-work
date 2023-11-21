// FORIN Loop "its use for objects mostly"

const myObject = {
    js: 'javascript',
    HTML: 'Hyper Text mail Language',
    CSS: 'Cascading style sheet',
    swift: "swift"
}

for (const key in myObject) {
//    console.log(myObject[key]);
}

// forin for arrays

const programming = ["js", "html", "Css", "C++", "java"]

for (const key in programming) {
    console.log(programming[key]);
}