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
controleur = prompt("quel controleur voulez vous,le Raspberry Pi à 55$ ou le Raspberry pi zero à 15$ ");
moteurs= Number(prompt("combien de moteurs avez vous besoin choissisez entre 1 et 24"));
camera = prompt("voulez vous une camera USB a 35$? tapez oui ou non");
LED=prompt("voulez vous une matrice de LED pour les yeux à 10$ tapez oui ou non");


if(controleur.toLowerCase() === "raspberry pi"){
    controleurprix=55;
    document.write("raspberry pi");
    document.write("<br/>")
}
    else if(controleur.toLowerCase()=== "raspberry pi zero"){
        controleurprix=15;
    document.write("raspberry pi zero");
    document.write("<br/>")
}

if(moteurs >=2 && moteurs<= 24){
    moteursprix=moteurs*5;
    document.write(moteurs + " moteurs");
    document.write("<br/>")
}
if(camera.toLowerCase() === "oui"){
    cameraprix=35;
    document.write("camera");
    document.write("<br/>")
}
    else if(camera.toLowerCase() === "non"){
        cameraprix=0
}
if(LED.toLowerCase() ==="oui"){
    LEDprix=10;
    document.write("LED");
    document.write("<br/>")
}
    else if(LED === "non"){
        LEDprix=0
}
document.write("filament3D");
document.write("<br/>");
document.write("batterie USB");
document.write("<br/>");


total=LEDprix+cameraprix+moteursprix+controleurprix+filamentprix+batterieprix;
    document.write("votre total est de " + total + " avec le transport votre total est de " +total*1.5);