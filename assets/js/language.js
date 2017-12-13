var languageArrayIndex = [
                { 
                    id:0,
                    NAME:"mainMenu0",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                },
                { 
                    id:1,
                    NAME:"mainMenu1",
                    ES:"Jugar",
                    EN:"Play",
                    PT:"Jogar",
                    ZH:"开始游戏",
                    JA:"ゲーム開始",
                    KO:"플레이"
                },
                { 
                    id:2,
                    NAME:"mainMenu2",
                    ES:"Libros",
                    EN:"Books",
                    PT:"Livros",
                    ZH:"书籍",
                    JA:"本",
                    KO:"도서관"
                },
                { 
                    id:3,
                    NAME:"mainMenu3",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                },
                { 
                    id:4,
                    NAME:"mainMenu4",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                },
                { 
                    id:5,
                    NAME:"mainMenu5",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                },
                { 
                    id:6,
                    NAME:"mainMenu6",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                },
                { 
                    id:7,
                    NAME:"mainMenu7",
                    ES:"Episodios",
                    EN:"Webisodes",
                    PT:"Episódios",
                    ZH:"网络视频短片",
                    JA:"ウェブエピソード",
                    KO:"웹피소드"
                }
    
    
          ]
          

var language = "EN"

function changeLanguage(){
    for(i=0;i<=languageArrayIndex.length-1;i++){
        if(language == "ES"){
            $("#text" + i).text(languageArrayIndex[i][language])
        }else if(language == "EN"){
            $("#text" + i).text(languageArrayIndex[i][language])    
        }else{
            $("#text" + i).text(languageArrayIndex[i].EN)    
        }
    }   
}

changeLanguage()
