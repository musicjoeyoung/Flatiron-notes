const globalVariable = "I am global!" //variable that is globally accessible; accessible TO ALL!

function myFunction() {
    console.log(globalVariable)
}
myFunction();//globalVariable is accessible!

const outerFunction = () =>{
    const outerVariable = "I am in outerFunction!"//scoped only inside outerFunction
    console.log(outerVariable)
    console.log(`${globalVariable}: I am logged from inside outerFunction`)

    const innerFunction = () =>{
        const innerVariable = "I am in innerFunction!"//scoped only inside innerFunction
        console.log(innerVariable)
        console.log(`${outerVariable}: I am logged from inside innerFunction`)
        console.log(`${globalVariable}: I am logged from inside innerFunction`)
    }
    innerFunction()
}
outerFunction()

console.log(globalVariable)
//console.log(outerVariable)
//console.log(innerVariable)