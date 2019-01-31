function berechne(){


  var txt = document.getElementById("KMWindkraft").value;
  var res = txt*0.25*16;
  var ang= res/1000;

  document.getElementById("ergebnisWind").innerHTML = res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}



function berechne1(){
  var txt = document.getElementById("KMTesla-Ökostrum").value;
  var res = txt*0.25*16;
    var ang= res/1000;
  document.getElementById("ergebnisTesla").innerHTML = res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}



function berechne2(){
  var txt = document.getElementById("KMAromenergie").value;
  var res = txt*0.25*23;
  var ang= res/1000;
  document.getElementById("ergebnisAtomenergie").innerHTML = res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}



function berechne3(){
  var txt = document.getElementById("KMSolarenergie").value;
  var res = txt*0.25*160;
    var ang= res/1000;
  document.getElementById("ergebnisSolarenergie").innerHTML =res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}



function berechne4(){
  var txt = document.getElementById("KMBraunkohle").value;
  var res = txt*0.25*1230;
    var ang= res/1000;
  document.getElementById("ergebnisBraunkohle").innerHTML = res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}


function berechne5(){
  var txt = document.getElementById("KMSteinkohle").value;
  var res = txt*0.25*1080;
    var ang= res/1000;
  document.getElementById("ergebnisSteinkohle").innerHTML = res + " Gramm"+ " Co2" +"<br>" + "Das sind " +ang  +"kg";
}
