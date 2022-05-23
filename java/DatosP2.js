var puntajeaño;
function p1(obj){
    if(obj.checked){
        puntajeaño = 4;
    }
}

function p2(obj){
    if(obj.checked){
        puntajeaño = 3;
    }
}

function p3(obj){
    if(obj.checked){
        puntajeaño = 3;
    }
}

function p4(obj){
    if(obj.checked){
        puntajeaño = 2;
    }
}

function p5(obj){
    if(obj.checked){
        puntajeaño = 1;
    }
}

var puntajeval;
function mostrar(obj){
    if(obj.checked){
        puntajeval = 0;
        document.getElementById('constructora').style.display = 'block';
    }
}

function ocultar(obj){
    if(obj.checked){
        puntajeval = 3;
        document.getElementById('constructora').style.display = 'none';
    }
}

function sumar(a, b){
    var a=puntajeaño, b=puntajeval;
    return a+b;
}

function resultadoDatosP2(){
    sumaDatosP2=sumar(puntajeaño,puntajeval);
    document.getElementById('result').value = sumaDatosP2;
    return sumaDatosP2;
}