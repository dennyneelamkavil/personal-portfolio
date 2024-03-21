function handleSubmit(e) {
    
    const fullname = document.getElementById("name").value;
    const fullnameError = document.getElementById("fullnameError");

    if (fullname.length < 3) {
        e.preventDefault();
        fullnameError.style.display = 'block';
        fullnameError.style.color = "red";
        fullnameError.innerHTML = '<b>Full name should contain minimum 3 letters';
    }

    console.log("Form Submitted");
}

