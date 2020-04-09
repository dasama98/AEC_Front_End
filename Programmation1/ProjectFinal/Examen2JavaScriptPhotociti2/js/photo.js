let LettreChanger;
let CibleImage;

$(document).ready(function(){
    $('#Lettre').keydown(function(event){
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode === 13){
            gestionduinput()
        }
    });
    $("#buttonGo").click(function(){
        gestionduinput()
    });
});

function gestionduinput() {
    let mot=$('#Lettre').val().toUpperCase();
    console.log(mot);
    if (mot.length<3||mot.length>12){
        alert("votre mot doit etre entre 3 et 12 characteres")
    }
    else{
        mot = mot.replace(/É/g,"E").replace(/È/g,"E").replace(/Ê/g,"E").replace(/Ë/g,"E");
        mot = mot.replace(/À/g,"A").replace(/Ù/g,"U");
        let ColonnePhoto=1;
        if (mot.length===3){
            ColonnePhoto=4;
        }
        else if(mot.length===4){
            ColonnePhoto=3;
        }
        else if(mot.length===5||6){
            ColonnePhoto=2;
        }
        else if(mot.length>7){
            ColonnePhoto=1;
        }
        let imageLettre="";
        for(let i=0;i<mot.length;i++){
            let lettreCourante = mot[i];
            if(lettreCourante  === '*') {lettreCourante  = 'CS';}
            imageLettre += '<div onclick="OuvrirModal(this,\''+lettreCourante+'\')" class="col-'+ColonnePhoto+'"><img class="bordure"  src="Letters/'+lettreCourante+'/'+lettreCourante+'1.jpg" alt="lettre'+i+'"></div>';
        }
        $('#photos').html(imageLettre);

    }
}


function OuvrirModal(e,lettreCourante){
    LettreChanger=lettreCourante;
    CibleImage=e;
    $("#Carousel1").attr("src","Letters/"+lettreCourante+"/"+lettreCourante+"1.jpg");
    $("#Carousel2").attr("src","Letters/"+lettreCourante+"/"+lettreCourante+"2.jpg");
    $("#Carousel3").attr("src","Letters/"+lettreCourante+"/"+lettreCourante+"3.jpg");
    $("#Carousel4").attr("src","Letters/"+lettreCourante+"/"+lettreCourante+"4.jpg");
    $("#Carousel5").attr("src","Letters/"+lettreCourante+"/"+lettreCourante+"5.jpg");
    $("#Modal").show();
}
function ChangeImg(NumeroImg){
    $(CibleImage).find("img").attr("src","Letters/"+LettreChanger+"/"+LettreChanger+NumeroImg+".jpg")
}


function FermerModal(){
    $("#Modal").hide();
    LettreChanger="";
    CibleImage="";
}

$( "#rectangleBleu" ).click(function() {
    $("#photos").css("background-color","#618AAA");
});
$( "#rectangleBlanc" ).click(function() {
    $("#photos").css("background-color","#ffffff");
});
$( "#rectangleBleuFonce" ).click(function() {
    $("#photos").css("background-color","#1b2736");
});
$( "#rectangleGris" ).click(function() {
    $("#photos").css("background-color","#62676A");
});
$( "#rectangleNoir" ).click(function() {
    $("#photos").css("background-color","Black");
});
$( "#rectangleRose" ).click(function() {
    $("#photos").css("background-color","#9A7587");
});
$( "#rectangleRouge" ).click(function() {
    $("#photos").css("background-color","#8D1E24");
});