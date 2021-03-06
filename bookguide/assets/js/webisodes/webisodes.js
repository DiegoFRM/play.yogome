var pop = document.getElementById("pop");
var flipcard = document.getElementById("flipcard");
var magic = document.getElementById("magic");
var videoLanguage;
var videoId;
var credentials = epicModel.getCredentials();

function loadVideos(index){  
    
    if(language == "ES"){
                    $("#player").attr("src","https://www.youtube.com/embed/" + videolist[index].url_ES);
                    $(".video-title").find(".text43").text(videolist[index].NAME_ES);
        videoLanguage = videolist[index].url_ES;
                }else if(language == "EN"){
                    $("#player").atter("src","https://www.youtube.com/embed/" + videolist[index].url_EN);
                    $(".video-title").find(".text43").text(videolist[index].NAME_EN);
                    videoLanguage = videolist[index].url_EN;
                }else{
                    $("#ytplayer").atter("src","https://www.youtube.com/embed/" + videolist[index].url_ES);
                    $(".video-title").find(".text43").text(videolist[index].NAME_EN);   
                    videoLanguage = videolist[index].url_EN;
                }
    
    mixpanelYT(videoLanguage,videolist[index].videoID,videolist[index].NAME_ES)

}

loadVideos(0);  
          


                for(i=1;i<=5;i++){
                    if(language == "ES"){
                        $("#textVideo" + i).text(videolist[i-1].NAME_ES)
                    }else{
                       $("#textVideo" + i).text(videolist[i-1].NAME_EN) 
                    }
                    $("#button" + i).attr("number",i-1);
                    if(!$("#button" + i).hasClass("lock") ){
                       $("#button" + i).click(function(){
                           $( "#player" ).remove();
                           $( "#videoContainer" ).append("<div id='player'></div>");
                           pop.play();
                           console.log(parseInt($(this).attr("number")) );
                           loadVideos(parseInt($(this).attr("number")));
                        });

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
 

}

epicModel.checkQuery();
epicModel.loadPlayer(false,callBackLogIn); 


function mixpanelYT(videoLanguage,idnumber,namevideo){
    
if($("#player").length == 0) {
  //it doesn't exist
  console.log('no pasa nada');
} else {
  console.log('cargando video');
  //Youtube video API
  //This code loads the IFrame Player API code asynchronously.


  // This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          videoId: videoLanguage, //get var videoLanguage to load videoId
          playerVars: {
              rel: 0,
              modestbranding: 1,
              enablejsapi:1
          },
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
        
  }
    
onYouTubeIframeAPIReady()
  //The API will call this function when the video player is ready.
  function onPlayerReady(event) {
      console.log('Video Ready');
  }
  // The API calls this function when the player's state changes.
  var done = false;
  var countPlay = 0;

  function onPlayerStateChange(event) {
      console.log('Video change');
      if (event.data == YT.PlayerState.PLAYING && !done) {
        countPlay += 1;
        if (countPlay === 1) {
          //console.log('video is playing');
          mixpanel.track('videoStart',
            {
              "user_id": credentials.educationID,
              videoId: videoId,
              app: "web",
              id:idnumber,
              name_video: namevideo
            }
        );
        }
        else{
          //console.log('Video is continuing');
          mixpanel.track('videoUnpause',
            {
              "user_id": credentials.educationID,
              videoId: videoId,
              app: "web",
              id:idnumber,
              name_video: namevideo
            }
          );
        }
      }
      if (event.data == YT.PlayerState.PAUSED && !done) {

        mixpanel.track('videoPaused',
          {
            "user_id": credentials.educationID,
              videoId: videoId,
              PauseTime: player.getCurrentTime(),
              app: "web",
              id:idnumber,
              name_video: namevideo
          }
        );

      }
      if (event.data == YT.PlayerState.ENDED) {
        //console.log('video complete');
        mixpanel.track('videoStop',
          {
            "user_id": credentials.educationID,
            videoId: videoId,
            EndTime: player.getCurrentTime(),
            app: "web",
              id:idnumber,
              name_video: namevideo            
          }
        );

      }
  }

  function stopVideo() {
      player.stopVideo();
  }
  
  //End Youtube video API
}    
}
