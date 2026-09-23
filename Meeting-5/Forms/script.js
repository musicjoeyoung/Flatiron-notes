const form = document.querySelector("#name-form")
const nameInput = document.querySelector("#name")
const output = document.querySelector("#output")

form.addEventListener("submit", (event) => {
    event.preventDefault()//prevents the page from refreshing

    output.textContent = `Hello, ${nameInput.value}`
})