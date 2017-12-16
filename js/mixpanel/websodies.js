$(document).ready(function () {
    /**
     * * Metodo implementado en mixpanel.js
     */
    var credentials = getCredentials();

    mixpanel.track(
        "PageLoadWebisodes",
        {
            "user_id": credentials.educationID,
            "app": "web"
        }
    );
});