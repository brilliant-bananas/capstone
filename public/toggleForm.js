
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login")
    const createSignInForm = document.querySelector("#createAccount")

    document.querySelector("#linkCreateAccount").addEventListener("click", event => {
        event.preventDefault();
        loginForm.classList.add("form-hidden");
        createSignInForm.classList.remove("form-hidden")
    })

    document.querySelector("#linkLogin").addEventListener("click", event => {
       event.preventDefault(); 
       loginForm.classList.remove("form-hidden")
       createSignInForm.classList.add("form-hidden")  
    })
})