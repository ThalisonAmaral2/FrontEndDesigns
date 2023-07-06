// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevents the default form submission
    
//     // Additional logic or validation checks
//     var name = document.getElementById("myForm").elements["name"].value;
    
//     if (name === "") {
//       // Perform specific actions if the form is invalid or incomplete
//       alert("Please enter your name");
//     } else {
//       // Perform actions when the form is valid
//       // For example, you can proceed with form submission using AJAX or other operations
//       alert("Form submitted successfully");
//     }
//   });
  

document.querySelector(".login-form").addEventListener("submit", e => {
    e.preventDefault(); // Prevent the default form submission behavior
    var formData = new FormData(e.target); // Get the form data

    const email = formData.get("email-input");
    const pass = formData.get("password-input");

    console.log(email,pass)
    // Send the form data using AJAX or perform any other necessary actions
    // For example, you can use the fetch API to send the data to the server
    fetch("/submit-form", {
      method: "POST",
      body: formData
    })
    .then(response => {
      // Handle the response
    //   console.log(response)
    })
    .catch(error => {
      // Handle errors
    });
  });