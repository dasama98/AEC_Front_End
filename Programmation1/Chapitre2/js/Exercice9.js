var nom;
var MotDePasse;

nom = prompt("inscrivez votre identifiant:");
MotDePasse = prompt("inscrivez votre mot de passe:");

if(nom === "admin"){
    if(MotDePasse === "12345"){
        console.log("bonjour "+ nom);
    }

}
else{
    console.log("Votre nom d’utilisateur ou votre mot de passe est invalide")
}