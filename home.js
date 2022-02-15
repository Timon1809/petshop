// JavaScript source code

function HomeIndex() {
    /*Eigenschaften*/

    const heightFromTop = 300;

    /*Methoden*/

    this.initialiseScrollToTopButton = function () {
        /*Eventhandler für den Fensterscroll*/
        $(window).scroll(function () {
            /*Nach-oben-Schaltfläche je nach Scroll-Abstand
             * ein - oder ausblenden*/
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });
        /*Eventhandler für den Nach-oben-Klick*/
        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
}
$(document).ready(function () {
    /*Instanziiert die neue Klasse Home*/

    app.homeIndex = new HomeIndex();
    /*Initialisiert die Schaltfläche Nach oben*/

    app.homeIndex.initialiseScrollToTopButton();
});