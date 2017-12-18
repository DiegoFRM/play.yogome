var pop = document.getElementById("pop");
                var flipcard = document.getElementById("flipcard");
                var magic = document.getElementById("magic");

function loadVideos(index){  
    if(language == "ES"){
                    $("#videoContainer").html(videolist[index].url_ES);
                    $(".video-title").find(".text43").text(videolist[index].NAME_ES);
                }else if(language == "EN"){
                    $("#videoContainer").html(videolist[index].url_EN);
                    $(".video-title").find(".text43").text(videolist[index].NAME_EN);
                }else{
                    $("#videoContainer").html(videolist[index].url_EN);
                    $(".video-title").find(".text43").text(videolist[index].NAME_EN);    
                }
}

loadVideos(0);            


                for(i=1;i<=3;i++){
                    $("#button" + i).attr("number",i-1);
                    if(!$("#button" + i).hasClass("lock") ){
                       $("#button" + i).click(function(){
                           pop.play();
                           console.log(parseInt($(this).attr("number")) );
                           loadVideos(parseInt($(this).attr("number")));
                        });

                    }
                }