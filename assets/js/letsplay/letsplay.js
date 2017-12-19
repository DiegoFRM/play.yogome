  var pop = document.getElementById("pop");
                var flipcard = document.getElementById("flipcard");
                var magic = document.getElementById("magic");
    
    var subjectsButtons =     
        [
        {
        name:"All subjects",
        ES:"Todas las materias",
        EN:"All Subjects",
        PT:"Todos os assuntos",
        ZH:"所有科目",
        JA:"すべての科目",
        KO:"모든 과목들",
        img:"allsubjects"
        },
        {
        name:"Math",
        ES:"Matemáticas",
        EN:"Math",
        PT:"Matemática",
        ZH:"数学",
        JA:"算数",
        KO:"수학",
        img:"math"
        },
        {
        name:"Coding",
        ES:"Programación",
        EN:"Coding",
        PT:"Codificação",
        ZH:"编码",
        JA:"コーディング",
        KO:"소프트웨어",
        img:"coding"
        },
        {
        name:"Science",
        ES:"Ciencia",
        EN:"Science",
        PT:"Ciências",
        ZH:"科学",
        JA:"サイエンス",
        KO:"과학",
        img:"science"
        },
        {
        name:"Geography",
        ES:"Geografía",
        EN:"Geography",
        PT:"Geografia",
        ZH:"地理",
        JA:"地理",
        KO:"지리학",       
        img:"geo"
        },
        {
        name:"Creativity",
        ES:"Creatividad",
        EN:"Creativity",
        PT:"Criatividade",
        ZH:"创造力",
        JA:"創造性",
        KO:"창의력",
        img:"crea"
        },
        {
        name:"Language",
        ES:"Idioma",
        EN:"Language",
        PT:"Idioma",
        ZH:"语言",
        JA:"言語",
        KO:"언어",
        img:"lang"
        },
        {
        name:"Health",
        ES:"Salud",
        EN:"Health",
        PT:"Saúde",
        ZH:"健康",
        JA:"健康",
        KO:"건강",   
        img:"health"
        },
        {
        name:"Sustainability",
        ES:"Sustentabilidad",
        EN:"Sustainability",
        PT:"Sustentabilidade",
        ZH:"环境可持续发展",
        JA:"サステナビリティ",
        KO:"지속 가능성!",
        img:"sust"
        }
        ]
    var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames();
    
    for(var i= 0;i<=subjectsButtons.length-1;i++){
        $("#subject-slider").append('<div class="subject-select-btns" style="color:#FFF;"><div class="subject-btn '+subjectsButtons[i].img+'"></div><div class="subject-name text-center" style="color:#FFF;">'+subjectsButtons[i][language]+'</div></div>');
        
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
  				$("#minigamesContainer").append("<a href='"+games[i].mapUrl+"' rev='"+games[i].name+"' class='gameCatalog " +games[i].subject +"' id='gameimg" + num +"'><div id='btnMinigame" + i + "' class='minigameBg col-xs-6 col-sm-4'></div></a>");
                
                $("#btnMinigame" + num).css("background-image","url('" + games[num].url + "images/fbpost.png')");
  				$("#gameimg" + num).attr("value",i);
  			}

  		}    
    
}    

  showGames();  