function login(){
    let emailid = document.getElementById("email-id").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (emailid === "gupta@gmail.com" && password==="2618"){
        message.innerHTML ="Login Successful...!";
        message.style.color="green"
    } else{
        message.innerHTML="Invalid email-id or password...!";
        message.style.color="black"
    }
}