$(".loginAccess").hide();

$("#logInButton").click(function(){
    modal.showLogin();
 });
        
$("#devicelogInButton").click(function(){
    modal.showLogin();
});
        

function callBackLogIn(){
    $(".loginAccess").show();
    $(".accesButtons").hide();
    $(".navbar").addClass("navbar-login");
}