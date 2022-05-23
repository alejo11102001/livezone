var puntajealtura = 0;
function altura1(obj){
	if(obj.checked){
        puntajealtura = 1;
    }
}

function altura2(obj){
	if(obj.checked){
        puntajealtura = 2;
    }
}

function altura3(obj){
	if(obj.checked){
        puntajealtura = 3;
    }
}

function altura4(obj){
	if(obj.checked){
        puntajealtura = 3;
    }
}

var puntajematerial = 0;
function Material1(obj){
    if(obj.checked){
        puntajematerial = 2;
        document.getElementById('material').style.display="none";
      var radio = document.createElement('Input');
      document.getElementById("listaA").style.display="inline";
      document.getElementById("listaB").style.display="none";
      document.getElementById("listaC").style.display="none";
    }
}
    function abrir1(){
        var btnAbrirPopup = document.getElementById('btn-abrir-popup1'),
        overlay = document.getElementById('overlay1'),
        popup = document.getElementById('popup1'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup1');
    
        btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
        });
        btnCerrarPopup.addEventListener('click', function(e){
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
        });
    }

    function Material2(obj){
        if(obj.checked){
            puntajematerial = 1;
            document.getElementById('material').style.display="none";
          var radio = document.createElement('Input');
          document.getElementById("listaA").style.display="none";
          document.getElementById("listaB").style.display="inline";
          document.getElementById("listaC").style.display="none";
        }
    }
    function Material3(obj){
        if(obj.checked){
            puntajematerial = 2;
            document.getElementById('material').style.display="none";
          var radio = document.createElement('Input');
          document.getElementById("listaA").style.display="none";
          document.getElementById("listaB").style.display="none";
          document.getElementById("listaC").style.display="inline";
        }
    }
    function abrir2(){
        var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
        overlay2 = document.getElementById('overlay2'),
        popup2 = document.getElementById('popup2'),
        btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
    
        btnAbrirPopup2.addEventListener('click', function(){
        overlay2.classList.add('active');
        popup2.classList.add('active');
        });
        btnCerrarPopup2.addEventListener('click', function(e){
        e.preventDefault();
        overlay2.classList.remove('active');
        popup2.classList.remove('active');
        });
    }

    function material4(obj){
        if(obj.checked){
            puntajematerial = 1;
            document.getElementById('material').style.display="none";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function material5(obj){
        if(obj.checked){
            puntajematerial = 2;
            document.getElementById('material').style.display="none";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function material6(obj){
        if(obj.checked){
            puntajematerial = 3;
            document.getElementById('material').style.display="none";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function material7(obj){
        if(obj.checked){
            puntajematerial = 3;
            document.getElementById('material').style.display="none";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function material8(obj){
        if(obj.checked){
            puntajematerial = 3;
            document.getElementById('material').style.display="none";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function material9(obj){
        if(obj.checked){
            puntajematerial = 0;
            document.getElementById('material').style.display="block";
            document.getElementById("listaA").style.display="none";
            document.getElementById("listaB").style.display="none";
            document.getElementById("listaC").style.display="none";
        }
    }

    function abrir3(){
        var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
        overlay3 = document.getElementById('overlay3'),
        popup3 = document.getElementById('popup3'),
        btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');
    
        btnAbrirPopup3.addEventListener('click', function(){
        overlay3.classList.add('active');
        popup3.classList.add('active');
        });
        btnCerrarPopup3.addEventListener('click', function(e){
        e.preventDefault();
        overlay3.classList.remove('active');
        popup3.classList.remove('active');
        });
    }

var puntajetipom = 0;
function mamp(obj){
    if(obj.checked){
        puntajetipom = 1;
    }
}

    function abrir4(){
        var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
        overlay4 = document.getElementById('overlay4'),
        popup4 = document.getElementById('popup4'),
        btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');
    
        btnAbrirPopup4.addEventListener('click', function(){
        overlay4.classList.add('active');
        popup4.classList.add('active');
        });
        btnCerrarPopup4.addEventListener('click', function(e){
        e.preventDefault();
        overlay4.classList.remove('active');
        popup4.classList.remove('active');
        });
    }

    function mamp2(obj){
        if(obj.checked){
            puntajetipom = 1;
        }
    }

    function mamp3(obj){
        if(obj.checked){
            puntajetipom = 1;
        }
    }

    function abrir5(){
        var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
        overlay5 = document.getElementById('overlay5'),
        popup5 = document.getElementById('popup5'),
        btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');
    
        btnAbrirPopup5.addEventListener('click', function(){
        overlay5.classList.add('active');
        popup5.classList.add('active');
        });
        btnCerrarPopup5.addEventListener('click', function(e){
        e.preventDefault();
        overlay5.classList.remove('active');
        popup5.classList.remove('active');
        });
    }

    var puntajetipoc = 0;
    function conc(obj){
        if(obj.checked){
            puntajetipoc = 1;
        }
    }

    function conc2(obj){
        if(obj.checked){
            puntajetipoc = 1;
        }
    }

    function abrir6(){
        var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
        overlay6 = document.getElementById('overlay6'),
        popup6 = document.getElementById('popup6'),
        btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');
    
        btnAbrirPopup6.addEventListener('click', function(){
        overlay6.classList.add('active');
        popup6.classList.add('active');
        });
        btnCerrarPopup6.addEventListener('click', function(e){
        e.preventDefault();
        overlay6.classList.remove('active');
        popup6.classList.remove('active');
        });
    }

    function conc3(obj){
        if(obj.checked){
            puntajetipoc = 1;
        }
    }

    function conc4(obj){
        if(obj.checked){
            puntajetipoc = 2;
        }
    }

    function abrir7(){
        var btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
        overlay7 = document.getElementById('overlay7'),
        popup7 = document.getElementById('popup7'),
        btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7');
    
        btnAbrirPopup7.addEventListener('click', function(){
        overlay7.classList.add('active');
        popup7.classList.add('active');
        });
        btnCerrarPopup7.addEventListener('click', function(e){
        e.preventDefault();
        overlay7.classList.remove('active');
        popup7.classList.remove('active');
        });
    }

    var puntajetipop = 0;
    function pref(obj){
        if(obj.checked){
            puntajetipop = 2;
            document.getElementById('prefa').style.display = 'none';
        }
    }

    function abrir8(){
        var btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
        overlay8 = document.getElementById('overlay8'),
        popup8 = document.getElementById('popup8'),
        btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8');
    
        btnAbrirPopup8.addEventListener('click', function(){
        overlay8.classList.add('active');
        popup8.classList.add('active');
        });
        btnCerrarPopup8.addEventListener('click', function(e){
        e.preventDefault();
        overlay8.classList.remove('active');
        popup8.classList.remove('active');
        });
    }

    function pref2(obj){
        if(obj.checked){
            puntajetipop = 2;
            document.getElementById('prefa').style.display = 'none';
        }
    }

    function abrir9(){
        var btnAbrirPopup9 = document.getElementById('btn-abrir-popup9'),
        overlay9 = document.getElementById('overlay9'),
        popup9 = document.getElementById('popup9'),
        btnCerrarPopup9 = document.getElementById('btn-cerrar-popup9');
    
        btnAbrirPopup9.addEventListener('click', function(){
        overlay9.classList.add('active');
        popup9.classList.add('active');
        });
        btnCerrarPopup9.addEventListener('click', function(e){
        e.preventDefault();
        overlay9.classList.remove('active');
        popup9.classList.remove('active');
        });
    }

    function pref3(obj){
        if(obj.checked){
            puntajetipop = 2;
            document.getElementById('prefa').style.display = 'none';
        }
    }

    function abrir10(){
        var btnAbrirPopup10 = document.getElementById('btn-abrir-popup10'),
        overlay10 = document.getElementById('overlay10'),
        popup10 = document.getElementById('popup10'),
        btnCerrarPopup10 = document.getElementById('btn-cerrar-popup10');
    
        btnAbrirPopup10.addEventListener('click', function(){
        overlay10.classList.add('active');
        popup10.classList.add('active');
        });
        btnCerrarPopup10.addEventListener('click', function(e){
        e.preventDefault();
        overlay10.classList.remove('active');
        popup10.classList.remove('active');
        });
    }

    function pref4(obj){
        if(obj.checked){
            puntajetipop = 3;
            document.getElementById('prefa').style.display = 'none';
        }
    }

    function abrir11(){
        var btnAbrirPopup11 = document.getElementById('btn-abrir-popup11'),
        overlay11 = document.getElementById('overlay11'),
        popup11 = document.getElementById('popup11'),
        btnCerrarPopup11 = document.getElementById('btn-cerrar-popup11');
    
        btnAbrirPopup11.addEventListener('click', function(){
        overlay11.classList.add('active');
        popup11.classList.add('active');
        });
        btnCerrarPopup11.addEventListener('click', function(e){
        e.preventDefault();
        overlay11.classList.remove('active');
        popup11.classList.remove('active');
        });
    }

    function pref5(obj){
        if(obj.checked){
            puntajetipop = 1;
            document.getElementById('prefa').style.display = 'none';
        }
    }

    function abrir12(){
        var btnAbrirPopup12 = document.getElementById('btn-abrir-popup12'),
        overlay12 = document.getElementById('overlay12'),
        popup12 = document.getElementById('popup12'),
        btnCerrarPopup12 = document.getElementById('btn-cerrar-popup12');
    
        btnAbrirPopup12.addEventListener('click', function(){
        overlay12.classList.add('active');
        popup12.classList.add('active');
        });
        btnCerrarPopup12.addEventListener('click', function(e){
        e.preventDefault();
        overlay12.classList.remove('active');
        popup12.classList.remove('active');
        });
    }

    function pref6(obj){
        if(obj.checked){
            puntajetipop = 0;
            document.getElementById('prefa').style.display = 'block';
        }
    }

    var puntajematpiso = 0;
    function mpiso(obj){
        if(obj.checked){
            puntajematpiso = 1;
        }
    }

    function abrir13(){
        var btnAbrirPopup13 = document.getElementById('btn-abrir-popup13'),
        overlay13 = document.getElementById('overlay13'),
        popup13 = document.getElementById('popup13'),
        btnCerrarPopup13 = document.getElementById('btn-cerrar-popup13');
    
        btnAbrirPopup13.addEventListener('click', function(){
        overlay13.classList.add('active');
        popup13.classList.add('active');
        });
        btnCerrarPopup13.addEventListener('click', function(e){
        e.preventDefault();
        overlay13.classList.remove('active');
        popup13.classList.remove('active');
        });
    }

    function mpiso2(obj){
        if(obj.checked){
            puntajematpiso = 1;
        }
    }

    function abrir14(){
        var btnAbrirPopup14 = document.getElementById('btn-abrir-popup14'),
        overlay14 = document.getElementById('overlay14'),
        popup14 = document.getElementById('popup14'),
        btnCerrarPopup14 = document.getElementById('btn-cerrar-popup14');
    
        btnAbrirPopup14.addEventListener('click', function(){
        overlay14.classList.add('active');
        popup14.classList.add('active');
        });
        btnCerrarPopup14.addEventListener('click', function(e){
        e.preventDefault();
        overlay14.classList.remove('active');
        popup14.classList.remove('active');
        });
    }

    function mpiso3(obj){
        if(obj.checked){
            puntajematpiso = 2;
        }
    }

    function abrir15(){
        var btnAbrirPopup15 = document.getElementById('btn-abrir-popup15'),
        overlay15 = document.getElementById('overlay15'),
        popup15 = document.getElementById('popup15'),
        btnCerrarPopup15 = document.getElementById('btn-cerrar-popup15');
    
        btnAbrirPopup15.addEventListener('click', function(){
        overlay15.classList.add('active');
        popup15.classList.add('active');
        });
        btnCerrarPopup15.addEventListener('click', function(e){
        e.preventDefault();
        overlay15.classList.remove('active');
        popup15.classList.remove('active');
        });
    }

    function mpiso4(obj){
        if(obj.checked){
            puntajematpiso = 1;
        }
    }

    function abrir16(){
        var btnAbrirPopup16 = document.getElementById('btn-abrir-popup16'),
        overlay16 = document.getElementById('overlay16'),
        popup16 = document.getElementById('popup16'),
        btnCerrarPopup16 = document.getElementById('btn-cerrar-popup16');
    
        btnAbrirPopup16.addEventListener('click', function(){
        overlay16.classList.add('active');
        popup16.classList.add('active');
        });
        btnCerrarPopup16.addEventListener('click', function(e){
        e.preventDefault();
        overlay16.classList.remove('active');
        popup16.classList.remove('active');
        });
    }

    var puntajetipot = 0;
    function techo(obj){
        if(obj.checked){
            puntajetipot = 1;
        }
    }

    function abrir17(){
        var btnAbrirPopup17 = document.getElementById('btn-abrir-popup17'),
        overlay17 = document.getElementById('overlay17'),
        popup17 = document.getElementById('popup17'),
        btnCerrarPopup17 = document.getElementById('btn-cerrar-popup17');
    
        btnAbrirPopup17.addEventListener('click', function(){
        overlay17.classList.add('active');
        popup17.classList.add('active');
        });
        btnCerrarPopup17.addEventListener('click', function(e){
        e.preventDefault();
        overlay17.classList.remove('active');
        popup17.classList.remove('active');
        });
    }

    function techo2(obj){
        if(obj.checked){
            puntajetipot = 1;
        }
    }

    function abrir18(){
        var btnAbrirPopup18 = document.getElementById('btn-abrir-popup18'),
        overlay18 = document.getElementById('overlay18'),
        popup18 = document.getElementById('popup18'),
        btnCerrarPopup18 = document.getElementById('btn-cerrar-popup18');
    
        btnAbrirPopup18.addEventListener('click', function(){
        overlay18.classList.add('active');
        popup18.classList.add('active');
        });
        btnCerrarPopup18.addEventListener('click', function(e){
        e.preventDefault();
        overlay18.classList.remove('active');
        popup18.classList.remove('active');
        });
    }

    function techo3(obj){
        if(obj.checked){
            puntajetipot = 3;
        }
    }

    function abrir19(){
        var btnAbrirPopup19 = document.getElementById('btn-abrir-popup19'),
        overlay19 = document.getElementById('overlay19'),
        popup19 = document.getElementById('popup19'),
        btnCerrarPopup19 = document.getElementById('btn-cerrar-popup19');
    
        btnAbrirPopup19.addEventListener('click', function(){
        overlay19.classList.add('active');
        popup19.classList.add('active');
        });
        btnCerrarPopup19.addEventListener('click', function(e){
        e.preventDefault();
        overlay19.classList.remove('active');
        popup19.classList.remove('active');
        });
    }

    function techo4(obj){
        if(obj.checked){
            puntajetipot = 1;
        }
    }

    function abrir20(){
        var btnAbrirPopup20 = document.getElementById('btn-abrir-popup20'),
        overlay20 = document.getElementById('overlay20'),
        popup20 = document.getElementById('popup20'),
        btnCerrarPopup20 = document.getElementById('btn-cerrar-popup20');
    
        btnAbrirPopup20.addEventListener('click', function(){
        overlay20.classList.add('active');
        popup20.classList.add('active');
        });
        btnCerrarPopup20.addEventListener('click', function(e){
        e.preventDefault();
        overlay20.classList.remove('active');
        popup20.classList.remove('active');
        });
    }

    function techo5(obj){
        if(obj.checked){
            puntajetipot = 2;
        }
    }

    function abrir21(){
        var btnAbrirPopup21 = document.getElementById('btn-abrir-popup21'),
        overlay21 = document.getElementById('overlay21'),
        popup21 = document.getElementById('popup21'),
        btnCerrarPopup21 = document.getElementById('btn-cerrar-popup21');
    
        btnAbrirPopup21.addEventListener('click', function(){
        overlay21.classList.add('active');
        popup21.classList.add('active');
        });
        btnCerrarPopup21.addEventListener('click', function(e){
        e.preventDefault();
        overlay21.classList.remove('active');
        popup21.classList.remove('active');
        });
    }

    function techo6(obj){
        if(obj.checked){
            puntajetipot = 3;
        }
    }

    function abrir22(){
        var btnAbrirPopup22 = document.getElementById('btn-abrir-popup22'),
        overlay22 = document.getElementById('overlay22'),
        popup22 = document.getElementById('popup22'),
        btnCerrarPopup22 = document.getElementById('btn-cerrar-popup22');
    
        btnAbrirPopup22.addEventListener('click', function(){
        overlay22.classList.add('active');
        popup22.classList.add('active');
        });
        btnCerrarPopup22.addEventListener('click', function(e){
        e.preventDefault();
        overlay22.classList.remove('active');
        popup22.classList.remove('active');
        });
    }

    function techo7(obj){
        if(obj.checked){
            puntajetipot = 1;
        }
    }

    function abrir23(){
        var btnAbrirPopup23 = document.getElementById('btn-abrir-popup23'),
        overlay23 = document.getElementById('overlay23'),
        popup23 = document.getElementById('popup23'),
        btnCerrarPopup23 = document.getElementById('btn-cerrar-popup23');
    
        btnAbrirPopup23.addEventListener('click', function(){
        overlay23.classList.add('active');
        popup23.classList.add('active');
        });
        btnCerrarPopup23.addEventListener('click', function(e){
        e.preventDefault();
        overlay23.classList.remove('active');
        popup23.classList.remove('active');
        });
    }

    function techo8(obj){
        if(obj.checked){
            puntajetipot = 3;
        }
    }

    function abrir24(){
        var btnAbrirPopup24 = document.getElementById('btn-abrir-popup24'),
        overlay24 = document.getElementById('overlay24'),
        popup24 = document.getElementById('popup24'),
        btnCerrarPopup24 = document.getElementById('btn-cerrar-popup24');
    
        btnAbrirPopup24.addEventListener('click', function(){
        overlay24.classList.add('active');
        popup24.classList.add('active');
        });
        btnCerrarPopup24.addEventListener('click', function(e){
        e.preventDefault();
        overlay24.classList.remove('active');
        popup24.classList.remove('active');
        });
    }

    var puntajehundi = 0;
    function mostrar(obj){
        if(obj.checked){
            puntajehundi = 4;
        document.getElementById('hundimiento').style.display = 'block';
        }
    }
    
    function ocultar(obj){
        if(obj.checked){
            puntajehundi = 0;
        document.getElementById('hundimiento').style.display = 'none';
        }
    }

    var puntajegrietas = 0;
    function mostrar1(obj){
        if(obj.checked){
            puntajegrietas = 3;
        document.getElementById('grieta').style.display = 'block';
        }
    }
    
    function ocultar1(obj){
        if(obj.checked){
            puntajegrietas = 0;
        document.getElementById('grieta').style.display = 'none';
        }
    }

    function sumatoria(a, b, c, d, e, f, g, h, i){
        var a=puntajealtura, b=puntajematerial, c=puntajetipom, d=puntajetipoc, e=puntajetipop, f=puntajematpiso, g=puntajetipot, h=puntajehundi, i=puntajegrietas;
        return a+b+c+d+e+f+g+h+i;
    }
    
    function resultadointerior(){
        sumainterior=sumatoria(puntajealtura,puntajematerial,puntajetipom,puntajetipoc,puntajetipop,puntajematpiso,puntajetipot,puntajehundi,puntajegrietas);
        document.getElementById('result').value = sumainterior;
        return sumainterior;
    }