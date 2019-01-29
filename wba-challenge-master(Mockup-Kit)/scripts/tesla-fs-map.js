/*  Fullscreen für die Karte beim Doppelklick
    Benötigt Zingtouch.js
    https://zingchart.github.io/zingtouch/
----------------------------------------------------------------------------- */

// Fs Map Objekt
var fsMap = {};
fsMap.init = function() {

    // ZingTouch initialisieren
    var fs = new ZingTouch.Pan({ numInputs: 1 });

    // Elemente selektieren
    var ele = document.querySelector("[data-trigger=fullscreen]");
    var activeRegion = ZingTouch.Region(ele);
    var childElement = document.querySelector("[data-trigger=fullscreenChild]");
    var target = document.querySelector("[data-trigger=fullscreenTarget]");

    // Aktion an das Element binden
    activeRegion.bind(childElement, fs, function(e) {

        // Wir wollen, dass die Höhe konstant bleibt
        var h = window.getComputedStyle(ele).height;
        ele.style.height = h;

        // Gesten auswerten und aktion ausführen
        var d = e.detail.data[0];
        if (d.currentDirection == 180 && d.distanceFromOrigin > 200) {
            target.classList.add("is-hidden");
            ele.classList.add("is-large");
        }

        if (d.currentDirection == 360 && d.distanceFromOrigin > 200) {
            target.classList.remove("is-hidden");
            ele.classList.remove("is-large");
        }

    });
}

// Warten, bis alles geladen ist
document.addEventListener("DOMContentLoaded", function(event) {
    fsMap.init();
});