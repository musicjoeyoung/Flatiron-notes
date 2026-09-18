function printHello() {
    console.log("Hello!")
}

setTimeout(printHello, 2000)//pass the function itself, and NOT the invocation of the function (printHello())

function myFunction(phrase){
    console.log(phrase)
}

//setTimeout(myFunction("hello again!!!!"), 3000)//the function passed in setTimeout must NOT be invoked

setTimeout(() => {//this is called an anonymous function
    myFunction("please work this time!!")
}, 3000)

//Passing a callback as a named parameter
function printStudentGrade(studentName, grade, printFunction){
    const printText = `${studentName} has ${grade}.`;
    printFunction(printText)
}
printStudentGrade("Mickey", 100, console.log)
//printStudentGrade("Joseph", 1000, console.log("hello!"))

printStudentGrade("Joseph", 10000000, (text) => {
    console.log(`${text} Here is something! `)
})

const button = document.getElementById("button")

//callbacks with event listeners
button.addEventListener("click", () => {
    console.log("Button clicked!")
})