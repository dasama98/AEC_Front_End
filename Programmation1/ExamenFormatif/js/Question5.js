
var angle;

angle = Number(prompt("inscrivez l'angle de la main du robot:"));

if(angle>=0 && angle<= 39){
    document.write("la main est fermée")
}
    else if(angle>=40 && angle <=89){
        document.write("la main est aggrippe")
}
        if(angle >=90 && angle<=180){
            document.write("la main est ouverte")
}
            else{
                document.write("Le robot est hors de contrôle!")
        }