// JavaScript source code

function HomeIndex() {
    /*Eigenschaften*/

    const heightFromTop = 300;

    /*Methoden*/

    this.initialiseScrollToTopButton = function () {
        /*Eventhandler f�r den Fensterscroll*/
        $(window).scroll(function () {
            /*Nach-oben-Schaltfl�che je nach Scroll-Abstand
             * ein - oder ausblenden*/
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });
        /*Eventhandler f�r den Nach-oben-Klick*/
        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
}
$(document).ready(function () {
    /*Instanziiert die neue Klasse Home*/

    app.homeIndex = new HomeIndex();
    /*Initialisiert die Schaltfl�che Nach oben*/

    app.homeIndex.initialiseScrollToTopButton();
});