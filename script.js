function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    alert("Login successful!");
    window.location.href = "dashboard.html";
    return false;
}

function validateRegistration() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (roll == "") {
        alert("Please enter your roll number.");
        return false;
    }

    if (course == "") {
        alert("Please select your course.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration successful!");
    window.location.href = "login.html";
    return false;
}
