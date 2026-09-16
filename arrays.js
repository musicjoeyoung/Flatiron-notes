//Arrays

const books = ["Harry Potter", "Green Eggs & Ham", "Cat in the Hat", "The Green Mile", "Harry Green"]

//Loop

//For Loop

for (let i = 0; i < books.length; i++){
    console.log("The book is: " + books[i])
}

//forEach method (loop)

/* books.forEach((book) => {
    console.log(`The book ${book} `)
}) */

books.forEach((book, index) => {
    console.log(`The book ${book} is at index ${index}.`)
})

//Map method
const libraryInventory = books.map((bookTitle) => {
    return {
        title: bookTitle,
        availableCopies: 1,
    }
})

console.log(libraryInventory)

//Filter method
function getBooks(){
    return books.filter((book) => book.includes("Harry") /* && book.includes("Green") */)
}
//console.log(getBooks());
//let filteredBooks = getBooks();
console.log(getBooks())
//console.log(filteredBooks)





///Arrow functions
const greet = (firstName) => {
    //console.log(firstName)
    return firstName
}
console.log(greet("Joseph"))

//Traditional funtions
function greet2(firstName){
    return firstName
}
console.log(greet2("Ange"))


//Array of objects
const students = [
    {name: "Abraham", grade: 100},
    {name: "Ange", grade: 100},
    {name: "Junaid", grade: 90},
    {name: "Ezra", grade: 80},
    {name: "Perpetua", grade: 100},   
]

students.forEach((student) => {
    console.log(`The student ${student.name} scored ${student.grade}`)
})

const studentNames = students.filter((student) => student.grade > 90).map((student) => student.name)
console.log(studentNames)