function audioSync(subtitles,soundTrack,arraypistas){
        $("#" + subtitles).blast({ delimiter: "word" });

        $("#" + subtitles).find('span').each(function(i){
        $(this).attr('id', 'c_' + i);
         });        
        
          ( function(win, doc) {
              var audioPlayer = doc.getElementById(soundTrack);
              var subtitles1 = doc.getElementById(subtitles);
              var syncData = arraypistas;
              createSubtitle();

              function createSubtitle()
              {
                  var element;
                  for (var i = 0; i <= syncData.length-1; i++) {
                      element = doc.createElement('span');
                      element.setAttribute("id", "c_" + i);
                      element.innerText = syncData[i].text + "";
                      //subtitles.appendChild(element);
                  }
              }

              audioPlayer.addEventListener('started', function(e){
              subtitles1.children[1].style.background = 'none';
              
              });
              
              audioPlayer.addEventListener("timeupdate", function(e){
                  syncData.forEach(function(element, index, array){
                      if( audioPlayer.currentTime > element.start /*&& audioPlayer.currentTime <= element.end*/ ){
                          subtitles1.children[index].style.background = 'red';
                          $(subtitles1.children[index]).css("font-size","6vh");
                      }else{
                          subtitles1.children[index].style.background = 'none';
                      }
                      
                      
                    });
              });
          }(window, document));
}