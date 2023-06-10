function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now
  
    // Get form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform validation checks
    if (email === "") {
      alert("Please enter your email");
      return;
    }
  
    if (password === "") {
      alert("Please enter your password");
      return;
    }
  
    // If all validations pass, you can proceed with form submission or further processing
    // Here, you can send the form data to a server for authentication or perform any additional tasks
  
    // Example: Display an alert with the submitted data
    var userData = {
      email: email,
      password: password
    };
  
    alert("Login successful!\n\n" + JSON.stringify(userData));
  
    // Redirect to another page after successful login (e.g., dashboard.html)
    window.location.href = "bill.html";
  }
  
  function goToSignUp() {
    // Redirect to the sign-up page when the "Sign Up" button is clicked
    window.location.href = "index.html";

  }
  