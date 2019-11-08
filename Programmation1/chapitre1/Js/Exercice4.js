var taux;
var heures;
var salaire;
taux = Number(prompt("inscrivez le taux horaires ici :"));
heures = Number(prompt("inscrivez le nombre d'heures travaillé :"));

salaire = taux * heures;

console.log("le salaire brut est de :" + salaire);