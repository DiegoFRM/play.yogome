function replaceQueryParam(param, newval, search) {
    var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    var query = search.replace(regex, "$1").replace(/&$/, '');
    return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
}   


$(".slick-nav-buttons").find("slick-arrow").addClass("botonSound");
$(".slick-prev").click(function(){
         pop.play()
})

var languagesPage = ["ES","EN","PT","ZH","JA","KO"];
for(i=0;i<=5;i++){
    $(".botonLang" + i ).attr("number",i);
    $(".botonLang" + i ).click(function(){
        var str = window.location.search
        str = replaceQueryParam('language', languagesPage[$(this).attr("number")], str)
        window.location = window.location.pathname + str;
})    
    
}

$("#navbar-logo-container").css("cursor","pointer");
$(".text0").css("cursor","pointer");
$(".text2").css("cursor","pointer");
$(".text3").css("cursor","pointer");

$(".register-btn").click(function(){
    magic.play()
    window.location.href = "https://yogomepayments.com/";
});

$("#navbar-logo-container").mouseup(function(){
    magic.play()
    window.location.href = "index.html?language=" + language;
});




$(".text0").click(function(){
    magic.play();
    window.location.href = "webisodes.html?language=" + language;
});
$(".text2").click(function(){
    magic.play();
    window.location.href = "letsplay.html?language=" + language;
});
$(".text3").click(function(){
    magic.play();
    window.location.href = "yogobooks.html?language=" + language;
});
$(".navbar-btn").click(function(){
    magic.play();
});

$("#buttonLogOut").click(function(){
    localStorage.clear();
    window.location.reload();
});