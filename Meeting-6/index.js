const output = document.getElementById('output');

function renderMessage(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.append(paragraph)
}

function clearOutput(){
    output.innerHTML = "";
}


async function getOneUser() {
    clearOutput();
    renderMessage("Loading user...")

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //pause the function until the response comes back
        console.log(response)
        const user = await response.json()//pause again until the body is converted into JavaScript data
        console.log(user)

        clearOutput();
        renderMessage(`Name: ${user.name}`)
        renderMessage(`Email: ${user.email}`)
        renderMessage(`Company: ${user.company.name}`)
    }catch(error){
        clearOutput();
        renderMessage("Could not load the user")
        console.log(error)
    }
}
getOneUser()