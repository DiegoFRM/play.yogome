var orientationTouched = false;
//prevent tapping on drag content
var dragging = false;
$("body").on("touchmove", function () {
    dragging = true;
});
$("body").on("touchstart", function () {
    dragging = false;
});


$(document).ready(function () {
    initSizes();
    setTimeout(function () {
        $('.epic-slider').slick({
            dots: true,
            autoplay: false,
            vertical: true,
            verticalSwiping: true,
            accessibility: true,
            arrows: false,
            mobileFirst: true,
        });

        $('.epic-slider').animate({
            opacity: '1'
        }, 500);
    }, 500);

    if ($(window).width() <= 768) {
        addEvents();
        isPortrait();
    }
});

function isPortrait() {
    var width = $(window).width();
    var height = $(window).height();

    if (height > width) {
        //portrait mode
        $('#landscape').css('display', 'none');
    } else {
        //landscape mode
        $('#landscape').css('display', 'block');
    }
    if (orientationTouched) window.location.replace("index.html");
}

function addEvents() {
    var closeButton = document.getElementById("close");
    closeButton.addEventListener("touchstart", close, false);

    var slide1 = document.getElementById("slide1");
    slide1.addEventListener("touchend", function () {
        open(1)
    }, false);
  
    var slide2 = document.getElementById("slide2");
    slide2.addEventListener("touchend", function () {
        open(2)
    }, false);

    var slide3 = document.getElementById("slide3");
    slide3.addEventListener("touchend", function () {
        open(3)
    }, false);

    var slide4 = document.getElementById("slide4");
    slide4.addEventListener("touchend", function () {
        open(4)
    }, false);

    close();
}

function initSizes() {
    // 20 px for the player info margin top
    var sliderHeight = $('#left').height() - $('#player-info').height() - 20;
    $('.epic-slider').css('height', sliderHeight);

    var innerHeight = $('#iframe-box').height() - 40;
    var innerWidth = $('#iframe-box').width() - 40;
    $('#iframe-inner').css('height', innerHeight);
    $('#iframe-inner').css('width', innerWidth);

    $('#iframe').css('height', innerHeight - 40);
    $('#iframe').css('width', innerWidth - 40);

    if (innerWidth < 560) {
        $('#iframe-img').css('width', '100%');
        $('#iframe-img').css('height', 'auto');
    } else {
        $('#iframe-img').css('height', '100%');
        $('#iframe-img').css('width', 'auto');
    }
}

$(window).resize(function () {
    initSizes();
    if ($(window).width() <= 768) {
        addEvents();
        isPortrait();
    }
});

$(window).on("orientationchange", function (event) {
    orientationTouched = true;
    isPortrait();
});

function close() {
    $('#iframe-mobile').css('display', 'none');
}

function open(slide) {
    if (dragging) return;
    //slide -> parameter to show content based on selected slice
    // slide (integer // entero) indicates the number of the slide the user selected.
    // 1 = Adventure mode
    // 2 = Books
    // 3 = Minigames
    // 4 = Videos
    $('#iframe-mobile').css('display', 'block');
}

/*DIEGO ROJAS*/



    var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames();


function showGames(){
    $("#content-minigames").show();
        var pathGames = "games/nonrefactored/"
  		var games = yogomeGames.getGames();
  		for(var i = 0 ; i<= games.length-1 ;i++){

  			var num = i;
  			if(games[i].review){
  				$("#content-minigames").append("<div class='col-xs-6 col-sm-4 container'><a href='"+games[i].url+"' rev='"+games[i].name+"' class='gameCatalog' id='gameimg" + num+"' ><img class='growMouse img-responsive bannerMinigame' src='" +games[num].url +"/images/fbpost.png" + "'/></a> </div>");
  				$("#gameimg" + num).attr("value",i);
  			}

  		}    
    
}  

//ESTE ES PARA EL DIV DE LOS MINIJUEGOS
//$("#content-minigames").hide();


//$("#content-minigames").attr("src","http://yogome.com/play.yogome/letsplay.html")