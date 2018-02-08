epicModel.checkQuery();
var credentials = epicModel.getCredentials();
var email = credentials.email;

function callBackLogIn(){
            console.log(credentials)
            credentials = epicModel.getCredentials();
	        email = credentials.email;
            if(email){
                $("#menuUserMovil").css("display","block");
                $("#menuUser").css("display","flex");
                $(".accesButtons").hide();
                $(".accesButtonsMovil").hide();
                $(".navbar").addClass("navbar-login");
                $("#id_user").text(email)    
                $("#id_userMovil").text(email)    
               }
 

}


function loadPlayer(){
	var credentials = epicModel.getCredentials()
	if(credentials.email){
		epicModel.loadPlayer(false, callBackLogIn)
	}else{
		callBackLogIn()
	}
}
epicModel.checkQuery(loadPlayer);

$("#logInButton").click(function(){
	epicModel.loadPlayer(true, callBackLogIn)
});

$("#devicelogInButton").click(function(){
	epicModel.loadPlayer(true, callBackLogIn)
});


var booksArray = [
                { 
                    id:22,
                    EN:"The Monster",
                    ES:"El Monstruo",
                    url:"https://play.yogome.com/yogomebooks/22",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:21,
                    EN:"The River",
                    ES:"El Río",
                    url:"https://play.yogome.com/yogomebooks/21",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:16,
                    EN:"The Christmas<br> Present",
                    ES:"El regalo<br> de navidad",
                    url:"https://play.yogome.com/yogomebooks/16",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:27,
                    EN:"Eagle learns<br>about Christmas",
                    ES:"Eagle entiende<br>la navidad",
                    url:"https://play.yogome.com/yogomebooks/27",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:6,
                    EN:"I am<br> Angry",
                    ES:"Estoy<br> Enojada",
                    url:"https://play.yogome.com/yogomebooks/6",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:13,
                    EN:"Quiet <br>space",
                    ES:"El espacio <br> ideal",
                    url:"https://play.yogome.com/yogomebooks/13",
                    new:false,
                    lock:false
                    
                }
          ]
          
          for(i=0;i<=booksArray.length-1;i++){
              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              if(booksArray[i].new){
                  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text text52">NEW!</div></div>');
              }
              $("#book" + i).attr("number",i);
              
              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1ES.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                    console.log(i +  ": " + booksArray[i].lock);
                  
                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        magic.play();
                      if(email){
                          window.open(booksArray[$(this).attr("number")].url + "?language=" + language  + "&name=" + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "?language=" + language  + "&name=Yogome", "_self"); 
                      }
                        
                  });
                  
              }else if(language == "EN"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        if(email){
                          window.open(booksArray[$(this).attr("number")].url + "?language=" + language  + "&name=" + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "?language=" + language  + "&name=Yogome", "_self"); 
                      }
                  });
              }else{
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        if(email){
                          window.open(booksArray[$(this).attr("number")].url + "?language=ES"  + "&name=" + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "?language=ES"  + "&name=Yogome", "_self"); 
                      } 
                  });
              }

              $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
          
               if(language == "ES"){
                $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].ES +'</h4>');
               }else if(language == "EN"){
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].EN +'</h4>');     
                    }else{
                     $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].EN +'</h4>');   
                }
          
          }
          

