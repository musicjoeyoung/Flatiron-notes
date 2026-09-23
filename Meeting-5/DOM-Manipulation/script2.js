const users = [
  {
    userName: "John Doe",
    age: 25,
    telephone: "123-456-7890",
  },
  {
    userName: "Jane Smith",
    age: 30,
    telephone: "987-654-3210",
  },
  {
    userName: "Alice Johnson",
    age: 35,
    telephone: "555-123-4567",
  },
];

// render all user data into elements with DOM manipulation
const container = document.querySelector(".user-container")

//function that will iterate through the array 'users' and return elements for each
function showUsers(users){
    //iterate over the array
    users.forEach((user) => {
        //create variables for each type of element we want to create
        const userDiv = document.createElement("div");
        const userNameHeading = document.createElement("h2");
        const ageParagraph = document.createElement("p")
        const telephoneParagraph = document.createElement("p")
    
        //add the data/text from objects into our new elements
        userNameHeading.textContent = "User name is: " + user.userName;
        ageParagraph.textContent = "User age is: " + user.age;
        telephoneParagraph.textContent = `User telephone is: ${user.telephone}`;

        //add/append elements to a user div
        userDiv.append(userNameHeading, ageParagraph, telephoneParagraph)
       /*  userDiv.append(ageParagraph)
        userDiv.append(telephoneParagraph) */

        container.append(userDiv)
    })
}
showUsers(users)