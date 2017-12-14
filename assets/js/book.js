          var booksArray = [
                { 
                    id:22,
                    EN:"The Monster",
                    ES:"El Monstruo",
                    url:"http://play.yogome.com/yogomebooks/22",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:21,
                    EN:"The River",
                    ES:"El Río",
                    url:"http://play.yogome.com/yogomebooks/21",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:16,
                    EN:"The Christmas<br> Present",
                    ES:"El regalo<br> de navidad",
                    url:"http://play.yogome.com/yogomebooks/16",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:27,
                    EN:"Eagle learns<br>about Christmas",
                    ES:"Eagle entiende<br>la navidad",
                    url:"http://play.yogome.com/yogomebooks/27",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:6,
                    EN:"I am<br> Angry",
                    ES:"Estoy<br> Enojada",
                    url:"http://play.yogome.com/yogomebooks/6",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:13,
                    EN:"Quiet <br>space",
                    ES:"El espacio <br> ideal",
                    url:"http://play.yogome.com/yogomebooks/13",
                    new:false,
                    lock:false
                    
                }
          ]
          
          for(i=0;i<=booksArray.length-1;i++){
              
              var number = i;
              
              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              
              if(booksArray[i].new){
                  $("#container-books").find("#book" + i).append('<div class="new-ribbon"></div>');
              }
              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1ES.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                    console.log(i +  ": " + booksArray[i].lock);
                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
              }else if(language == "EN"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
              }else{
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
              }
              
              $("#book" + i).click(function(){
                        window.open(booksArray[number].url + "?language=" + language , "_blank"); 
                  });
              
              $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
          
               if(language == "ES"){
                $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');
               }else if(language == "EN"){
                   $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].EN +'</h2>');     
                    }else{
                     $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');   
                }
          
          }
          
    