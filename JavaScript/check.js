const check = () => {
        var Mail = document.getElementById("txtMail").value;
        var reMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

        if (!Mail) {
            alert("Email cannot be blank!");
            document.getElementById("txtMail").focus();
            return false;
        } else if (!reMail.test(Mail)) {
            alert("Please enter a valid email address!");
            document.getElementById("txtMail").focus();
            return false;
        }

        return true;
}
