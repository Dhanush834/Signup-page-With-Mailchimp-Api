const forms = document.querySelector(".forms");
const pwshowhide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".links");

pwshowhide.forEach( eyeIcon =>{
    eyeIcon.addEventListener("click", () =>{
        let pwFeilds = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    
        pwFeilds.forEach(password =>{
            if(password.type === "password")
            {
                password.type = "text";
            }
            else{
                password.type = "password";
            }
        })
    })
} )

links.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault(); //preventing the Sigup form
        forms.classList.toggle("Show-signup")
    })
})