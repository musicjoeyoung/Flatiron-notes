const mockAPIURL = "https://645403e2c18adbbdfeada66e.mockapi.io";

//GET request

const getUsers = async () => {
    try{
        const response = await fetch(`${mockAPIURL}/usrs`)

     /*    if (!response.ok){
            throw new Error(`Get users request failed!`)
        } */

        const users = await response.json()
        console.log(users)

    }catch(error){
        console.log(error)
    }
}

//getUsers()


////////////////
//api.nasa.gov
const myApiUrl = "https://science.nasa.gov/wp-json/wp/v2/apod-basic/";
const myApiKey = "QUk8zF9iDKAn4tsoNbkgas4pltqCtrBebjs3C6IT";

async function getNasaPod() {
    try{
        const response = await fetch(`${myApiUrl}?api_key=${myApiKey}`)
        const info = await response.json()
        console.log(info[0])
        createHTMLElements(info[2])
            //if we were to just use "info" without and index, nothing will render on our html!
    }catch(error){
        console.log(error)
    }
}

//CHALLENGE TO YOU: can you iterate through the entire array that is just 'info', and put everything on the page?

//make a function to create the elements that we need
const createHTMLElements = (information) => {
    const title = document.createElement("h2");
    title.textContent = information.title;

    const image = document.createElement("img");
    const imageURL = information.hdurl;
    image.src = imageURL;
    //image.classList.add("img");

    const explanation = document.createElement("p");
    explanation.innerText = information.explanation;

    const body = document.querySelector("body");
    body.appendChild(title);
    body.appendChild(image);
    body.appendChild(explanation);
}

getNasaPod()