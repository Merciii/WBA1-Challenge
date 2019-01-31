/* Verschiedene Layouts via Query String
Basiert auf "Get Query String Parameters with JavaScript" von David Walsh.
https://davidwalsh.name/query-string-javascript
----------------------------------------------------------------------------- */


var changeLayout = {};

changeLayout.switch = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var layout = urlParams.get("layout");
    var scale = urlParams.get("scale");

    if(urlParams.get("fluid")=="true") {
      document.getElementById("screen").className += " screen--fluid";
    }
    
    
    
    document.body.classList.add('scale--'+scale);
    document.getElementById("screen").classList.toggle(layout);
}

// Warten, bis alles geladen ist
document.addEventListener("DOMContentLoaded", function(event) {
    changeLayout.switch();
});
