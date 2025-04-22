// Form Validation

function validateForm() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let valid = true;

    document.getElementById("firstname-error").innerText = "";
    document.getElementById("lastname-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("password-error").innerText = "";
    document.getElementById("phone-error").innerText = "";

    if (firstname == "") {
      document.getElementById("firstname-error").innerText = "First name is required.";
      valid = false;
    }

    if (lastname == "") {
        document.getElementById("lastname-error").innerText = "Last name is required.";
        valid = false;
      }

    if (email == "") {
        document.getElementById("email-error").innerText = "Email is required.";
        valid = false;
    }

    if (password == "") {
      document.getElementById("password-error").innerText = "Password is required.";
      valid = false;
    }else if (password.length < 5 || password.length > 10) {
        document.getElementById("password-error").innerText = "Password must be between 5 and 10 characters.";
        valid = false;
    }

    if (phone == "") {
      document.getElementById("phone-error").innerText = "Phone number is required.";
      valid = false;
    }

    return valid;
  }