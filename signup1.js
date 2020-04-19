document.addEventListener("submit",formvalid);
document.addEventListener("submit",funpassword);
document.addEventListener("submit",repassword);
document.addEventListener("submit",phonenumber);



var email =document.getElementById("email");
var error1 =document.getElementById("emailerror");
var password =document.getElementById("password");
var error2 =document.getElementById("passworderror");
var number =document.getElementById("phoneno");
var error3 =document.getElementById("numbererror");
var psw=document.getElementById("password2");
var error4=document.getElementById("passworderror2");

let regexpp=/^([\A-Za-z])$/

//Email validation

function formvalid(){
    let regexp=/^([\A-Za-z0-9\.\-]+)@([\a-zA-Z0-9\-]+)\.([a-z]{2,3})$/
    if(regexp.test(email.value)){
        

    } 
    else{
        // error1.innerHTML ="invalid";
        // error1.style.color="red";
        alert("invalid email id");
        return false;

    }
}

//password validation
function funpassword(){
    if(password.value.trim()==""){
        // password.style.border="2px solid red"
        // error2.innerHTML="password field cannot empty";
        // error2.style.color="red";
        alert("password field cannot empty");
        return false;
        
       
     }
     else if(password.value.length<=4){
        // password.style.border="2px solid red"
        // error2.innerHTML="password strenth is poor";
        // error2.style.color="red";
        alert("password strenth is poor");
        return false;
        
    }
    else if(password.value.length<=6){
     
        // password.style.border="2px solid orange";
        //     error2.innerHTML="password strength is medium";
        //     error2.style.color="orange";
        alert("password strength is medium");
            return false;
            
    }
    else if(password.value.length<=8){
        // password.style.border="2px solid green"
        //     error2.innerHTML="password strength is strong";
        //     error2.style.color="green";
        alert("password strength is not strong");
            return false;
        
    } 
    
    else{
        return true;
    }  

}


//password visible
function myFunction() {
    
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
  }

  function repassword(){
      if(password.value!=psw.value){
        // psw.style.border="2px solid red"
        // error4.innerHTML="password not match";
        // error4.style.color="red";
        alert("password not match");
        return false;

      }
      

  }


//mobile number validation 
  function phonenumber(){
      if (number.value.length!=10){
        // number.style.border="2px solid red"
        //         error3.innerHTML="mobile number must contain 10 digit";
        //         error3.style.color="red";
        alert("mobile number must contain 10 digit");
                return false;

      }
      

//     if(number.value.length!=10){
//         alert("gjdyfuy");
//         // number.style.border="2px solid red"
//         // error3.innerHTML="password field cannot empty";
//         // error3.style.color="red";
//         // return false;

      
//   }
}

