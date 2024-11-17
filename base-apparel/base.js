const form=document.querySelector("form");
const input=document.querySelector("form input[type=text]");
const errorIcon = document.querySelector(".error-icon")
const errorText = document.querySelector(".error-text")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputValue=input.value;
    if(validateEmail(inputValue)){
        // if(errorIcon.classList.contains('show') && errorText.classList.contains("show")&&input.classList.contains("color")){
        //     errorIcon.classList.remove("show");
        //     errorText.classList.remove("show")
        //      input.classList.remove("color")
        // }
        form.classList.remove("error");
    }else{
        // errorIcon.classList.add("show");
        // errorText.classList.add("show")  
        // input.classList.add("color")
        form.classList.add("error")
    }
    inputValue="";
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
   console.log('re', re.test(email))
    return re.test(email);
  }