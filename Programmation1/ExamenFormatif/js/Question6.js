var controleur;
var controleurprix;
var moteurs;
var moteursprix;
var camera;
var cameraprix;
var LED;
var LEDprix;
var filamentprix =20;
var batterieprix=15;
var total;
controleur =Number(prompt("choisissez le controleur que vous voulez tapez 1 pour le raspberry pie à 55$ ou 2 pour le raspberry pi zero" ));
moteurs= Number(prompt("combien de moteurs avez vous besoin choissisez entre 1 et 24"));
camera = Number(prompt("voulez vous une camera USB a 35$? tapez 1 pour oui ou 2 pour non"));
LED=Number(prompt("voulez vous une matrice de LED pour les yeux à 10$ tapez 1 pour oui ou 2 pour non"));


if(controleur === "1"){
    controleurprix=55;
    document.write("raspberry pi");
    document.write("<br/>")
}
    else if(controleur=== "2"){
        controleurprix=15;
    document.write("raspberry pi zero");
    document.write("<br/>")
}

if(moteurs >=2 && moteurs<= 24){
    moteursprix=moteurs*5;
    document.write(moteurs + " moteurs");
    document.write("<br/>")
}
if(camera === "1"){
    cameraprix=35;
    document.write("camera");
    document.write("<br/>")
}
    else if(camera=== "2"){
        cameraprix=0
}
if(LED.toLowerCase() ==="1"){
    LEDprix=10;
    document.write("LED");
    document.write("<br/>")
}
    else if(LED === "2"){
        LEDprix=0
}
document.write("filament3D");
document.write("<br/>");
document.write("batterie USB");
document.write("<br/>");


total=LEDprix+cameraprix+moteursprix+controleurprix+filamentprix+batterieprix;
    document.write("votre total est de " + total + " avec le transport votre total est de " +total*1.5);