function dark(){
    document.getElementById("fondo-color").style.background="#303030"
    document.getElementById("subtitle").style.color="#FFFFFF"
    document.getElementById("contenido-textos").style.color="#D2D2D2"
    document.getElementById("subtitle2").style.color="#FFFFFF"
    document.getElementById("corte").style.fill="#303030"
}

function light(){
    document.getElementById("fondo-color").style.background="#FFFFFF"
    document.getElementById("subtitle").style.color="#000000"
    document.getElementById("contenido-textos").style.color="#000000"
    document.getElementById("subtitle2").style.color="#000000"
    document.getElementById("corte").style.fill="#FFFFFF"
}
function enviado(){
    var nombre = document.getElementById("texto").value;
    var Gmail = document.getElementById("e-mail").value;
    if (nombre.length==0){
        alert("No colocó el nombre");
    }else if(Gmail.length==0){
        alert("No compelto el gmail");
    }else{
        alert ("Gracias por completarlo");
    }
}


