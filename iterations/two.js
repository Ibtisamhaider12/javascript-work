// FOR OF LOOP

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// Strings in for of loop

const greetings = "hello Ibtisam"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// MAPS "They're known for their unique Values"

const map =new Map()
map.set('PK', "pakistan")
map.set('UN', "United Nations")
map.set('UK', "United Kingdoms")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
}