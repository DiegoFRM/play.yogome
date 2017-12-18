    //AQUI VA PARA SABER EL LENGUAGE
        function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

        var language;
        language = getParameterByName("language");

        if(language == null ){
            var lengua;
            //lengua = navigator.language || navigator.userLanguage;
            //language = eval("'" + lengua + "'").toUpperCase();
            language= "ES";
        }else{
            language.toUpperCase();
        }