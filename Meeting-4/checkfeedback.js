// Define the callback function to check the feedback
function checkFeedback() {
  console.log("Checking feedback...");
  // Imagine checking the feedback here for errors
}

// Define a function that takes a callback function
function submitFeedback(callback) {
  console.log("Submit button clicked.");
  callback(); // Calls the checkFeedback function
  console.log("Feedback submitted.");
}

// Call the submitFeedback function with checkFeedback as a callback
submitFeedback(checkFeedback);