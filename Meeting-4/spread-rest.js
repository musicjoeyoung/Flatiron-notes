//rest operator

const movie = {
    title: "Braveheart",
    director: "Mel Gibson",
    yearReleased: 1998,
    budget: 500000
}
const {budget, ...whatElse} = movie
console.log("besides the budget, we still have: ", whatElse)


const movieList = ["Star Wars", "Harry Potter", "Braveheart", "Beauty & Black", "Weekend at Bernie's"]

const [firstMovie, , thirdMovie, ...restOfMovies] = movieList;
console.log("firstMovie: ", firstMovie)
console.log("thirdMovie: ", thirdMovie)
console.log("restOfMovies: ", restOfMovies)

//spread operator 
const students = [
  { name: "Abraham", grade: 100 },
  { name: "Ange", grade: 100 },
  { name: "Junaid", grade: 90 },
  { name: "Ezra", grade: 80 },
  { name: "Perpetua", grade: 100 },
];
console.log(students)
const studentsWithDrinks = students.map((student) => {
    return {
        ...student, // spread operator copies all existng properties (name, grade) into a new object, so that we don't mutate the original array
        favoriteDrink: "coffee"
    }
})
console.log(studentsWithDrinks)