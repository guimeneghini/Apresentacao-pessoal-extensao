var img1 = "./img/foto formatura.jpeg"
var img2 = "./img/logo-cefet.png"
var img3 = "./img/TI.jpg"
var cont=0;

function trocar(){

    document.getElementById("figura").src = img1;
    if(cont==1){
        document.getElementById("figura").src = img2;
    } else if(cont==2){
        document.getElementById("figura").src = img3;
    } else if(cont==3){
        document.getElementById("figura").src = img1;
    }
    cont++;
    if(cont>=3){
        cont=0;
    }
}