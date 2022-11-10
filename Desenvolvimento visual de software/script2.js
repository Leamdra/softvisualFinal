const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.pwd.value;
    

    if(email === "test@gmail.com" && password === "test123") {
        errorMsg.classList.add("d-none");
        successMsg.classList.remove("d-none");
    }
    else{
        successMsg.classList.add("d-none");
        errorMsg.classList.remove("d-none");
    }
} )