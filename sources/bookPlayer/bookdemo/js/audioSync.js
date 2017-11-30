function audioSync(subtitles,soundTrack,arraypistas){

          ( function(win, doc) {
              
              var audioPlayer = doc.getElementById(soundTrack);
              var subtitles1 = doc.getElementById(subtitles);
              var syncData = arraypistas;


              
                console.log(audioPlayer.duration);


              
              audioPlayer.addEventListener("timeupdate", function(e){
                    
//                    if(audioPlayer.currentTime >= audioPlayer.duration - 500){
//                                    console.log("complete")
//                                    audioPlayer.pause();
//                                    //$('.magazine').turn('next');
//                                }
                  
                      syncData.forEach(function(element, index, array ){

                          $("#" + subtitles).find('span').each(function(i){
                          if( audioPlayer.currentTime >= element.start /*&& audioPlayer.currentTime <= element.end*/ ){
                                 
                              
                                
                              
                                      $("#" + subtitles).find('#c_' + index).addClass("newColor");
                                      $("#" + subtitles).find('#c_' + index).append(" ");
                          }else{
                              $("#" + subtitles).find('#c_' + index).removeClass("newColor");
                              
                          }
                          
                          });

                        }
                    );
              });
          }(window, document));
}