// FOREACH Loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Cascade Style sheet",
        languageFileName: "CSS"
    }
 
]

myCoding.forEach(  (item) => {
    console.log(item.languageFileName);
}  )