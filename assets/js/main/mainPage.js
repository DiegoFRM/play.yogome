
		$(".mixpanel-call").click(function(e){
//			e.preventDefault()
			mixpanel.track("buttonClick", {
				"Url": window.location.href.split("?")[0].split("#")[0].split("&")[0],
				"Button Id" : e.target,
				"language" : language

			});
		});
        
        if(language == "ES"){
            $("#bookMainImg").attr("src","assets/images/books-main" + "ES" + ".png");
        }else if(language == "EN"){
             $("#bookMainImg").attr("src","assets/images/books-main" + "EN" + ".png");    
        }else{
             $("#bookMainImg").attr("src","assets/images/books-main" + "EN" + ".png");    
        }
        
        
        var pop = document.getElementById("pop");
        var flipcard = document.getElementById("flipcard");
        var magic = document.getElementById("magic");
      var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames("absolute");
  		for(var i = 0 ; i <= games.length-1 ;i++){
  			var num = i;
  			if(games[i].demo){
  				$("#container-html5games").append("<div onmouseover='flipcard.play()' class='col-xs-6 col-sm-4 game-container mixpanel-call "+games[i].subject+"'><a href='"+games[i].mapUrl+"' rev='"+games[i].name+"' class='gameCatalog' id='gameimg" + num+"' ><img class='growMouse img-responsive' src='" +games[num].url +"images/fbpost.png" + "'/></a> </div>");
  				$("#gameimg" + num).attr("value",i);
  			}

  		}   


$("#logInButton").click(function(){
    modal.showLogin();
 });
        
$("#devicelogInButton").click(function(){
    modal.showLogin();
});

$("#gamesButtonLog").click(function(){
       magic.play();
      window.location.href = "letsplay.html?language=" + language;
});

$("#gamesButtonLog").click(function(){
       magic.play();
      window.location.href = "letsplay.html?language=" + language;
});
        

function callBackLogIn(){
        var credentials = getCredentials()
        var email = credentials.email
            if(email){
                $("#menuUserMovil").css("display","block");
                $("#menuUser").css("display","flex");
                $(".accesButtons").hide();
                $(".accesButtonsMovil").hide();
                $(".navbar").addClass("navbar-login");
                $("#id_user").text(email)    
                $("#id_userMovil").text(email)    
               }
 
    if(credentials.subscribed){
                $("#joinusSecction").hide();
    }

}

epicModel.checkQuery();
epicModel.loadPlayer(false,callBackLogIn);
