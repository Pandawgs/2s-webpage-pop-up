const popupScreen = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const closeBtn = document.querySelector(".exit");

window.addEventListener("load", () => {
    setTimeout(() => {
        popupScreen.classList.add("active");
    }, 2000) //Popup the screen 2 seconds after the page is loaded.
});

closeBtn.addEventListener('click', () =>{
    popupScreen.classList.remove("active"); //Close the popup screen.
});

function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let btn = document.querySelector('button');
    let inputs = document.querySelectorAll('input');
    
    form.addEventListener('submit',function(event){
        event.preventDefault()

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "#31ce68";
        console.log(email)
        popupScreen.classList.remove("active");
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter a Valid Email Address.";
        text.style.color = "#ff0000";
        inputs.forEach(input => input.value = ''); // Auto clear text when its invalid
    }
    if (email==null || email==""){ // when you just type just a "space-bar" or leave it blank.
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Email can't be leave as blank";
        text.style.color = "#ff0000";
        return false
    }  
}
)}