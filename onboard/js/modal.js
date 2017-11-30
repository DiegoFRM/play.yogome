
// Get the modal
var singIn = document.getElementById('singIn');

var singUp = document.getElementById('singUp');

var resetPass = document.getElementById('resetPass');

var succsesResetPass = document.getElementById('succsesResetPass');

var singInBtn = document.getElementById("singInBtn");

var singUPBtn = document.getElementById("singUpBtn");

var span = document.getElementsByClassName("close")[0];

var loginBtn = document.getElementById("login");

var fb = document.getElementById("fb");

var google = document.getElementById("google");

var fb2 = document.getElementById("fb2");

var google2 = document.getElementById("google2");

var request = document.getElementById("request");

var closeModal = document.getElementById("closeModal");

var createAccountBtn = document.getElementById("createAccountBtn");

// Open Sing In Modal 
singInBtn.onclick = function() {
    singIn.style.display = "block";
}

// Open Sing Up Modal 
singUpBtn.onclick = function() {
    singUp.style.display = "block";
}

//Login with email
loginBtn.onclick = function(){
    if(document.getElementById("email").value == "" || document.getElementById("pass").value == ""){
        document.getElementById("error").innerText = "That username and password dosen't exist. You can try again, or"; 
        document.getElementById("recover").innerText = "recover your password"; 
    }
    else
        window.location.href="welcome.html";   
}

//Recover Pass
request.onclick = function(){
    if(document.getElementById("emailRequest").value == ""){
        document.getElementById("requestError").innerText = "Enter your email"; 
    }
    else{
        $("#resetPass").hide();
        $("#succsesResetPass").show();   
    }
}

//Login with facebook
fb.onclick = function(){
    window.location.href="welcome.html";   
}

//Login with google
google.onclick = function(){
    window.location.href="welcome.html";   
}

fb2.onclick = function(){
    
    if(!validate()){
        document.getElementById("unchecked").innerText = "Please accept the terms of use "; 
    }
    else
        window.location.href="welcome.html";   
}

//Login with google
google2.onclick = function(){
    
    if(!validate()){
        document.getElementById("unchecked").innerText = "Please accept the terms of use "; 
    }
    else
        window.location.href="welcome.html";   
}

//Create Account  
createAccountBtn.onclick = function(){
    if(document.getElementById("createEmail").value == "" || document.getElementById("createPass").value == "" || document.getElementById("createName").value == ""){
        document.getElementById("missData").innerText = "Please fill all the fields"; 
    }
    else if(!validate()){
        document.getElementById("unchecked").innerText = "Please accept the terms of use "; 
    }
    else
        window.location.href="welcome.html";   
}

// Validate the checkbox           
function validate(){
  var agree = document.getElementById('agree');
    
    if (agree.checked){
        return true
    }
    else{
        return false
    }
}
    
//Recover Pass Succses
requestSuccses.onclick = function(){
    $("#succsesResetPass").fadeOut();
}

// clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    switch(event.target){
        case singIn:
            singIn.style.display = "none";
        break;
        case singUp:
            singUp.style.display = "none";
        break;
        case resetPass:
            resetPass.style.display = "none";
        break;
        case succsesResetPass:
            succsesResetPass.style.display = "none";
        break;
    }
}

//Close the modals
$(".close").click(function() {
    $("#singIn").fadeOut();
    $("#resetPass").fadeOut();
    $("#succsesResetPass").fadeOut();
    $("#singUp").fadeOut();
});

//Modal transitions
$("#recoverPass").click(function() {
    $("#singIn").hide();
    $("#resetPass").show();
});

$("#backModal").click(function() {
    $("#resetPass").hide();
    $("#singIn").show();
});

$("#backModal2").click(function() {
    $("#succsesResetPass").hide();
    $("#resetPass").show();
});

$('#singIn').on('show', function () {
      $('.modal-content',this).css({width:'auto',height:'auto', 'max-height':'100%'});
});

$('#singUp').on('show', function () {
      $('.modal-content',this).css({width:'auto',height:'auto', 'max-height':'100%'});
});

$('#resetPass').on('show', function () {
      $('.modal-content',this).css({width:'auto',height:'auto', 'max-height':'100%'});
});

$('#succsesResetPass').on('show', function () {
      $('.modal-content',this).css({width:'auto',height:'auto', 'max-height':'100%'});
});




