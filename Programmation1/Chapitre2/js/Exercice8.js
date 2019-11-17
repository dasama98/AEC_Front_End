var taux;
var heures;



taux = Number(prompt("entrez votre taux horaire: "));
heures= Number(prompt("entrez le nombre d'heures que vous avez fait:"));

var salaire = (taux * heures);
var supplementaire = (heures-40)*taux*2;



if(heures <=40){
    console.log("votre salaire est de: " + salaire)
}
if (heures > 40){
    console.log("votre salaire est de: "+ (salaire+supplementaire))
}
