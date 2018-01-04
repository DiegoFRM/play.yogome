    /**
     * * Metodo implementado en mixpanel.js
     */
    var credentials = epicModel.getCredentials();

$(document).ready(function () {


    mixpanel.track(
        "PageLoadWebisodes",
        {
            "user_id": credentials.educationID,
            "app": "web"
        }
    );
});

  $(".btn-mixpanel-payments").click(function(e) {
      e.preventDefault();
      var buttonId = $(this).attr("id");
      var gotoPayments = $(this).attr("href")+distinct_id;
      console.log(gotoPayments);
      mixpanel.track("buttonClick", {
        "Url": window.location.href.split("?")[0].split("#")[0].split("&")[0],
        "Button Id" : buttonId,
        "language" : language
     
      });
      window.location.href = gotoPayments;
     
  });


