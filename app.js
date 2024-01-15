var img1 = "./img/logo-cefet.png"
var img2 = "./img/TI.jpg"
var img3 = "./img/TI.png"
var cont=0;

function trocar(){

    cont++;

    if(cont==4) cont==0;

    if(cont==0) document.getElementById("figura").src = img1;
    else if(cont==1){
        document.getElementById("figura").src = img2;
    } else if(cont==2){
        document.getElementById("figura").src = img3;
    } else if(cont==3){
        document.getElementById("figura").src = img1;
    }

    if(cont>=3) cont=0;
}

var certificado1 = "./img/python.jpeg"
var certificado2 = "./img/power bi.jpeg"
var certificado3 = "./img/site simples.jpeg"
var certificado4 = "./img/seguranca de ti.jpeg"
var certificado5 = "./img/fundamentos de ti.jpeg"
var contadora=0;

function trocaIMG1(){

    contadora--;

    if(contadora==5 || contadora==-5) contadora=0;

    if(contadora==0){
        document.getElementById("certificado1").src = certificado1;
        document.getElementById("certificado2").src = certificado2;
        document.getElementById("certificado3").src = certificado3;
    } else if(contadora==1 || contadora==-1){
        document.getElementById("certificado1").src = certificado2;
        document.getElementById("certificado2").src = certificado3;
        document.getElementById("certificado3").src = certificado4;
    } else if(contadora==2 || contadora==-2){
        document.getElementById("certificado1").src = certificado3;
        document.getElementById("certificado2").src = certificado4;
        document.getElementById("certificado3").src = certificado5;
    } else if(contadora==3 || contadora==-3){
        document.getElementById("certificado1").src = certificado4;
        document.getElementById("certificado2").src = certificado5;
        document.getElementById("certificado3").src = certificado1;
    } else if(contadora==4 || contadora==-4){
        document.getElementById("certificado1").src = certificado5;
        document.getElementById("certificado2").src = certificado1;
        document.getElementById("certificado3").src = certificado2;
    }
}

function trocaIMG2(){

    contadora++;

    if(contadora==5) contadora=0;

    if(contadora==0){
        document.getElementById("certificado1").src = certificado1;
        document.getElementById("certificado2").src = certificado2;
        document.getElementById("certificado3").src = certificado3;
    } else if(contadora==1 || contadora==-1){
        document.getElementById("certificado1").src = certificado2;
        document.getElementById("certificado2").src = certificado3;
        document.getElementById("certificado3").src = certificado4;
    } else if(contadora==2 || contadora==-2){
        document.getElementById("certificado1").src = certificado3;
        document.getElementById("certificado2").src = certificado4;
        document.getElementById("certificado3").src = certificado5;
    } else if(contadora==3 || contadora==-3){
        document.getElementById("certificado1").src = certificado4;
        document.getElementById("certificado2").src = certificado5;
        document.getElementById("certificado3").src = certificado1;
    } else if(contadora==4 || contadora==-4){
        document.getElementById("certificado1").src = certificado5;
        document.getElementById("certificado2").src = certificado1;
        document.getElementById("certificado3").src = certificado2;
    }
}