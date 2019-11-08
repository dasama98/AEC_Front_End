var  nom;
var gros;
var detail;
var profit;

nom = prompt("inscrivez le nom de l'article: ");
detail = Number(prompt("inscrivez le prix de detail :"));

gros= detail * 0.66;

profit = detail - gros;

console.log("le prix du gros est de : " + gros + " et le profit attendu est de :" + profit);


