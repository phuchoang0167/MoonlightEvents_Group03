const check = () => {
    var Name = document.getElementById("txtName").value;
    var Email = document.getElementById("txtMail").value;
    var Address = document.getElementById("txtAddress").value;

    var reName = /^[a-zA-Z\s]+$/;
    var reMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate Name
    if (!Name) {
        alert("Name cannot be blank!");
        document.getElementById("txtName").focus();
        return false;
    } else if (!reName.test(Name)) {
        alert("Please enter a valid name (letters and spaces only)!");
        document.getElementById("txtName").focus();
        return false;
    }

    // Validate Email
    if (!Email) {
        alert("Email cannot be blank!");
        document.getElementById("txtMail").focus();
        return false;
    } else if (!reMail.test(Email)) {
        alert("Please enter a valid email address!");
        document.getElementById("txtMail").focus();
        return false;
    }

    // Validate Address
    if (!Address) {
        alert("Address cannot be blank!");
        document.getElementById("txtAddress").focus();
        return false;
    }

    alert("Form submitted successfully!");
    return true;
};
