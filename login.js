var email = document.getElementById("email");
var password = document.getElementById("password");
var error =document.getElementById("error");


function validation(){
    // if(email.value.trim() ==""){
    //     alert("Email feid is not empty");
    //      return false;
    // }
    let regexp=/^([\A-Za-z0-9\.\-]+)@([\a-zA-Z0-9\-]+)\.([a-z]{2,3})$/
    if(regexp.test(email.value)){
        
        if(password.value.trim()==""){
            alert("Password field is no empty");
            return false;
           
         }
         else if(password.value.length<=4){
            password.style.border="2px solid red"
            alert("password strength is poor");
            return false;
            
        }
        else if(password.value.length<=6){
            alert("password strength is medium");
            password.style.border="2px solid orange"
            return false;
        }
        else if(password.value.length<=8){
            password.style.border="2px solid green"
            alert("password strength is poor");
            return false;
            
        }
        else{
            return true;
        }  
        
    }
    else{
        error.innerHTML ="invalid";
        error.style.color="red";
        return false;

    }

}
