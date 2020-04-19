var email =document.getElementById("email");
var error1 =document.getElementById("emailerror");
var password =document.getElementById("password");
var error2 =document.getElementById("passworderror");
var number =document.getElementById("number");
var error3 =document.getElementById("numbererror");
let regexpp=/^([\A-Za-z])$/


function formvalid(){
    let regexp=/^([\A-Za-z0-9\.\-]+)@([\a-zA-Z0-9\-]+)\.([a-z]{2,3})$/
    if(regexp.test(email.value)){
        

        // password validation start
        if(password.value.trim()==""){
            alert("Password field is no empty");
            return false;
            
           
         }
         else if(password.value.length<=4){
            password.style.border="2px solid red"
            error2.innerHTML="password strength is poor";
            error2.style.color="red";
            return false;
            
        }
        else if(password.value.length<=6){
         
            password.style.border="2px solid orange";
            error2.innerHTML="password strength is medium";
            error2.style.color="orange";
            return false;
        }
        else if(password.value.length<=8){
            password.style.border="2px solid green"
            error2.innerHTML="password strength is strong";
            error2.style.color="green";
            return false;
            
        } 
        
        else{
            return true;
        }  
        //password validation
        
    }
    else{
        error1.innerHTML ="invalid";
        error1.style.color="red";
        return false;

    }
    




    

}