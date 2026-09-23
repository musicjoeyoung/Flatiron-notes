const form = document.querySelector("#myForm")

const formSubmissions = document.querySelector("#formSubmissions")

//where we'll store our entries
const submissionsArray = [];

//form logic and eventlistener

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const hotdog = document.getElementById("hotdog").value;

    const submissionData = {
        name, email, confirmEmail, phone, message, hotdog
    }

    submissionsArray.push(submissionData)

    form.reset()

    updateSubmissionsDisplay();
})

//function to update the display of submissions
function updateSubmissionsDisplay() {
  submissionsArray.forEach((submissionData) => {
    //for each form submission/entry create a div
    const submission = document.createElement("div");

    //for each form submission/entry create an h2
    const h2 = document.createElement("h2");
    h2.textContent = "Form Results";
    submission.appendChild(h2);

    //for each form submission/entry create an h3
    //make the textContent whatever we typed/submitted into the form
    const name = document.createElement("h3");
    /* name.classList.add("name") */
    name.textContent = submissionData.name;
    submission.appendChild(name);

    //for each form submission/entry create an h3
    //make the textContent whatever we typed/submitted into the form
    const email = document.createElement("p");
    email.textContent = submissionData.email;
    submission.appendChild(email);

    const confirmEmail = document.createElement("p");
    confirmEmail.textContent = submissionData.confirmEmail;
    submission.appendChild(confirmEmail);

    const phone = document.createElement("p");
    phone.textContent = submissionData.phone;
    submission.appendChild(phone);

    const message = document.createElement("p");
    message.textContent = submissionData.message;
    submission.appendChild(message);

    const hotdog = document.createElement("p");
    hotdog.textContent = submissionData.hotdog;
    submission.appendChild(hotdog);

    formSubmissions.appendChild(submission);
  });
}
