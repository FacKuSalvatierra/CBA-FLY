const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");


//   Mostrar / ocultar contraseña
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})


// Toggle Registro e inicio de sesion
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

//Validar form

// Validar inicio sesion
function validar_inicio(){
    let email = document.getElementById("email_login").value
    let pass = document.getElementById("password_login").value
    if (email == ""){
        alert("Debe ingresar su correo electrónico");
    }
    else if (pass == ""){
        alert("Debe ingresar su contraseña");
    }

}

// Validar registro
function validar_registro(){
    let name = document.getElementById("name_register").value
    let email = document.getElementById("email_register").value
    let pass = document.getElementById("password_register").value
    let pass_conf = document.getElementById("password_register_conf").value
    let terms = document.getElementById("term").value
    if (name == ""){
        alert("Debe ingresar su nombre");
    }
    else if (email == ""){
        alert("Debe ingresar su correo electrónico");
    }
    else if (pass == ""){
        alert("Debe ingresar su contraseña");
    }
    else if (pass_conf == ""){
        alert("Debe confirmar su contraseña");
    }
    else if (terms == false){
        alert("Debe aceptar los términos y condiciones")
    }
}