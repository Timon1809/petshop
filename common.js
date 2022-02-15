// JavaScript source code

function Common() {
    let self = this;
    /*Eigenschaften*/
    this.promoBar =
    {
        promoItems: null,
        currentItem: 0,
        numberofItems: 0,
    };
    /*Methoden*/
    this.initialisePromo = function () {
        /*F�r alle Elemente im Werbebanner*/
        let promoItems = $("#promo > div");
        /*Werte festlegen*/
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;
        /*Werbeschleife f�r n�chstes Element initialisieren*/
        this.startDelay();
    }
    this.startDelay = function () {
        /*Warte 4 Sekunden, dann zeige n�chste Mitteilung an*/
        setTimeout(function () {
            self.showNextPromoItem()
        }, 4000);
    }
    this.showNextPromoItem = function () {
        /*Aktuelles Element ausblenden*/
        $(self.promoBar.promoItems).fadeOut("slow").promise().
            done(function () {
                /*Z�hler f�r aktuelles Werbeelement hochsetzen*/
                if (self.promoBar.currentItem >= (self.promoBar.numberOfItems - 1)) {
                    /*Z�hler auf Null zur�cksetzen*/
                    self.promobar.currentItem = 0;
                } else {
                    /*Z�hler um 1 erh�hen*/
                    self.promoBar.currentItem++;
                }
                /*N�chstes Element einblenden*/
                $(self.promoBar.promoItems).eq(self.promoBar.currentItem).
                    fadeIn("slow", function () {
                        /*Verz�gerung vor Anzeige des n�chsten Elements*/
                        self.startDelay();
                    });
            });
    }
}

$(document).ready(function () {
    /*Instanziiert eine neue Klasse Common*/
    app.common = new Common();
    /*Werbebanner initialisieren*/
    app.common.initialisePromo();
});