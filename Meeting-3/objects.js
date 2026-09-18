const comment = {
    author:"Joseph", 
    body:"Hello everyone!",
    date: Date.now(),
    likes: 0
}

//For loop
for (const key in comment){
    console.log(key)
}

//Object.keys()
//Object.values()
//Object.entries()
console.log(Object.keys(comment))
console.log(Object.values(comment))
console.log(Object.entries(comment))
let commentTransformedToArray = Object.entries(comment);
/* Object.entries(comment).forEach(([key, value]) => {
    console.log(`${key} --> ${value}`)
}) */

//console.log(commentTransformedToArray)
//below IS AN ARRAY!!!
commentTransformedToArray.forEach(([key, value]) => {
    console.log(`${key} --> ${value}`)
})