function handleSubmit(e) {
    e.preventDefault();

    const fullname = document.getElementById("name").value;
    const fullnameError = document.getElementById("fullnameError");

    if (fullname.length < 3) {
        fullnameError.style.display = 'block';
        fullnameError.style.color = "red";
        fullnameError.innerHTML = '<b>Full name should contain minimum 3 letters';
    }

    console.log("Form Submitted");
}

