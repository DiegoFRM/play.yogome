  var pop = document.getElementById("pop");
                var flipcard = document.getElementById("flipcard");
                var magic = document.getElementById("magic");
    
    var subjectsButtons =     
        [
        {
        name:"All subjects",
        ES:"TODAS LAS MATERIAS",
        EN:"ALL SUBJECTS",
        PT:"TODOS OS ASSUNTOS",
        ZH:"所有科目",
        JA:"すべての科目",
        KO:"모든 과목들",
        img:"allsubjects"
        },
        {
        name:"Math",
        ES:"MATEMATICAS",
        EN:"MATH",
        PT:"MATEMATICA",
        ZH:"数学",
        JA:"算数",
        KO:"수학",
        img:"math"
        },
        {
        name:"Coding",
        ES:"PROGRAMACION",
        EN:"CODING",
        PT:"CODIFICAÇÃO",
        ZH:"编码",
        JA:"コーディング",
        KO:"소프트웨어",
        img:"coding"
        },
        {
        name:"Science",
        ES:"CIENCIA",
        EN:"SCIENCE",
        PT:"CIÊNCIAS",
        ZH:"科学",
        JA:"サイエンス",
        KO:"과학",
        img:"science"
        },
        {
        name:"Geography",
        ES:"GEOGRAFIA",
        EN:"GEOGRAPHY",
        PT:"GEOGRAFIA",
        ZH:"地理",
        JA:"地理",
        KO:"지리학",       
        img:"geo"
        },
        {
        name:"Creativity",
        ES:"CREATIVIDAD",
        EN:"CREATIVITY",
        PT:"CRIATIVIDADE",
        ZH:"创造力",
        JA:"創造性",
        KO:"창의력",
        img:"crea"
        },
        {
        name:"Language",
        ES:"IDIOMA",
        EN:"LANGUAGE",
        PT:"IDIOMA",
        ZH:"语言",
        JA:"言語",
        KO:"언어",
        img:"lang"
        },
        {
        name:"Health",
        ES:"SALUD",
        EN:"HEALTH",
        PT:"SAÚDE",
        ZH:"健康",
        JA:"健康",
        KO:"건강",   
        img:"health"
        },
        {
        name:"Sustainability",
        ES:"SUSTENTABILIDAD",
        EN:"SUSTAINABILITY",
        PT:"SUSTENTABILIDADE",
        ZH:"环境可持续发展",
        JA:"サステナビリティ",
        KO:"지속 가능성!",
        img:"sust"
        }
        ]
    var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames();
    
    for(var i= 0;i<=subjectsButtons.length-1;i++){
        $("#subject-slider").append('<b><div class="subject-select-btns" style="color:#FFF;" font_size=12px><div class="subject-btn '+subjectsButtons[i].img+'"></div><div class="subject-name text-center" style="color:#FFF;">'+subjectsButtons[i][language]+'</div></div></b>');
        
        $("." + subjectsButtons[i].img).attr("index",i);
        $("." + subjectsButtons[i].img).click(function(){
            magic.play()
            var index = $(this).attr("index");
           $("#nameSubject").find("p").text(subjectsButtons[index][language]); 
            
                for(var p = 0 ; p<= games.length-1 ;p++){
                    if(subjectsButtons[index].name == "All subjects"){
                        $("#minigamesContainer").find("." + games[p].subject).show();
                    }else{
                        $("#minigamesContainer").find("." + games[p].subject).hide();  
                    }
                }
            
            $("#minigamesContainer").find("." + subjectsButtons[index].name.toLowerCase()).show();
        })
    }
        
    


function showGames(){
        var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames("absolute");
  		for(var i = 0 ; i<= games.length-1 ;i++){
  			var num = i;
  			if(games[i].review){
                var minigameHref;
                if(language != "ES" ){
                    minigameHref = games[i].mapUrl + "?language=EN";

                }else{
                    minigameHref = games[i].mapUrl + "?language=" + language;
                }
                
  				$("#minigamesContainer").append("<a href='"+ minigameHref +"' rev='"+games[i].name+"' class='gameCatalog " +games[i].subject +"' id='gameimg" + num +"'><div id='btnMinigame" + i + "' class='minigameBg col-xs-6 col-sm-4'></div></a>");
                
                $("#btnMinigame" + num).css("background-image","url('" + games[num].url + "images/fbpost.png')");
  				$("#gameimg" + num).attr("value",i);
  			}
  		}   
}    


function showDemoGames(){
        var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames("absolute");
  		for(var i = 0 ; i<= games.length-1 ;i++){
  			var num = i;
  			if(games[i].demo){
                var minigameHref;
                if(language != "ES" ){
                    minigameHref = games[i].mapUrl + "?language=EN";

                }else{
                    minigameHref = games[i].mapUrl + "?language=" + language;
                }
                
  				$("#minigamesContainer").append("<a href='"+ minigameHref +"' rev='"+games[i].name+"' class='gameCatalog " +games[i].subject +"' id='gameimg" + num +"'><div id='btnMinigame" + i + "' class='minigameBg col-xs-6 col-sm-4'></div></a>");
                
                $("#btnMinigame" + num).css("background-image","url('" + games[num].url + "images/fbpost.png')");
  				$("#gameimg" + num).attr("value",i);
  			}
  		}   
}
   

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
            showGames();
    }else{
        showDemoGames();
    }

}

epicModel.checkQuery();
epicModel.loadPlayer(false,callBackLogIn); 
