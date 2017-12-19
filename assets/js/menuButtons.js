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

$("#navbar-logo-container").mouseup(function(){
    magic.play()
    window.open("index.html?language=" + language,"_self");
});
$(".text0").click(function(){
    magic.play();
    window.open("webisodes.html?language=" + language,"_self");
});
$(".text2").click(function(){
    magic.play();
    window.open("letsplay.html?language=" + language,"_self");
});
$(".text3").click(function(){
    magic.play();
    window.open("yogobooks.html?language=" + language,"_self");
});
$(".navbar-btn").click(function(){
    magic.play();
});