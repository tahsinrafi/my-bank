const loginSubmit=document.getElementById("login-submit");
loginSubmit.addEventListener("click",function(){
    const userEmail= document.getElementById("user-email");
    const userEmailText=userEmail.value;
    const userPassword=document.getElementById("useer-password");
    const userPasswordText=userPassword.value;

    if(userEmailText=="amartakade@gmail.com" && userPasswordText=='1234'){
        window.location.href="banking.html"
    }

    
})