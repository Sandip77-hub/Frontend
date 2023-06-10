function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now
  
    // Get form values
    var username = document.getElementById("username").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform validation checks
    if (username === "") {
      alert("Please enter a username");
      return;
    }
  
    if (contact === "") {
      alert("Please enter a contact number");
      return;
    }
  
    if (address === "") {
      alert("Please enter an address");
      return;
    }
  
    if (email === "") {
      alert("Please enter an email");
      return;
    }
  
    if (password === "") {
      alert("Please enter a password");
      return;
    }
  
    // If all validations pass, you can proceed with form submission or further processing
    // Here, you can send the form data to a server for backend processing or perform any additional tasks
  
    // Example: Display an alert with the submitted data
    var userData = {
      username: username,
      contact: contact,
      address: address,
      email: email,
      password: password
    };
  
    alert("Sign up successful!\n\n" + JSON.stringify(userData));
    window.location.href = "loginpage.html";
  }
  