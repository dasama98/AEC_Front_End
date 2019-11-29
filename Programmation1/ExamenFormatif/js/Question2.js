var  hp;
var dommage;

hp = Number(prompt("inserez les points de vie du pokemon adverse"));

if(hp<60){
    dommage=100;
}
if(hp>=60 && hp<=79){
    dommage=150
}
if(hp>=80 && hp<=99){
    dommage=200
}
if(hp>=100){
    dommage=200
}
document.write("tauros a fait " + dommage + " de dommage");