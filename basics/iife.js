// Imediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`BD Connected`);
})();

(/*parem passed =>*/(name) => {
    // Simple IIFE
    console.log(`DB CONNECTED ${name}`);
})('ibtisam')