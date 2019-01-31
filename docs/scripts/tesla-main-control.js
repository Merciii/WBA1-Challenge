/* Funktionalitäten für die Hauptsteuerung
----------------------------------------------------------------------------- */

var mainControl = {};

mainControl.init = function() {
    
    // Music App
    var controlMusic = document.querySelector('[data-control-music]');
    controlMusic.addEventListener('click', function() {
        
        //Element selektieren
        var element = document.querySelector('[data-content-upper] [data-screen-content]');
        
        //Element entfernen
        element.removeChild(element.firstElementChild);
        
        //Div-Element erzeugen
        var image = document.createElement('div');
        
        //Attribute hinzufügen
        image.style.backgroundImage = 'url(images/tsl/tsl-music.svg)';
        image.style.backgroundSize = 'cover';
        image.classList.add('tsl-fixed');
        
        //Element hinzufügen
        element.appendChild(image);
    })
}

// Warten, bis alles geladen ist
document.addEventListener("DOMContentLoaded", function(event) {
    mainControl.init();
});
