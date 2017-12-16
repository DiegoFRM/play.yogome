$(".loginAccess").hide();

$("#logInButton").click(function(){
    modal.showLogin();
 });
        
$("#devicelogInButton").click(function(){
    modal.showLogin();
});
        

function callBackLogIn(){
    var credentials = getCredentials()
    var email = credentials.email
    
    $(".loginAccess").show();
    $(".accesButtons").hide();
    $(".navbar").addClass("navbar-login");
    $("#id_user").text(email)
}

epicModel.checkQuery();