const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    const equipamento = loginForm.equipamento.value;
    const instalação = loginForm.instalação.value;
    

    if(equipamento === "" && instalação === "") {
        successMsg.classList.add("d-none");
        errorMsg.classList.remove("d-none");
    }
    else{
       

        errorMsg.classList.add("d-none");
        successMsg.classList.remove("d-none");
    }
} )

function validar(){
    var input = document.getElementById("texto");
    if(input.value == ""){

         alert("Preencha todos os campos em branco.")

    }
}