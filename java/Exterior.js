var puntajeubi = 0;
function ubicacion1(obj){
	if(obj.checked){
        puntajeubi = 2;
    }
}

function abrir22(){
	var btnAbrirPopup = document.getElementById('btn-abrir-popup25'),
	overlay = document.getElementById('overlay25'),
	popup = document.getElementById('popup25'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup25');
			
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

function ubicacion2(obj){
	if(obj.checked){
        puntajeubi = 1;
    }
}

function abrir23(){
	var btnAbrirPopup2 = document.getElementById('btn-abrir-popup26'),
	overlay2 = document.getElementById('overlay26'),
	popup2 = document.getElementById('popup26'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup26');
			
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

var puntajeele = 0;
function PA(obj){
	if(obj.checked){
        puntajeele = 2;
    }
}

function abrir24(){
	var btnAbrirPopup3 = document.getElementById('btn-abrir-popup27'),
	overlay3 = document.getElementById('overlay27'),
	popup3 = document.getElementById('popup27'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup27');
			
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

function PB(obj){
	if(obj.checked){
        puntajeele = 1;
    }
}

function PC(obj){
	if(obj.checked){
        puntajeele = 2;
    }
}

var puntajeactual = 0;
function USOA(obj){
	if(obj.checked){
        puntajeactual = 0;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOB(obj){
	if(obj.checked){
        puntajeactual = 1;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOC(obj){
	if(obj.checked){
        puntajeactual = 2;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOD(obj){
	if(obj.checked){
        puntajeactual = 2;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOE(obj){
	if(obj.checked){
        puntajeactual = 3;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOF(obj){
	if(obj.checked){
        puntajeactual = 3;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOG(obj){
	if(obj.checked){
        puntajeactual = 2;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOH(obj){
	if(obj.checked){
        puntajeactual = 4;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOI(obj){
	if(obj.checked){
        puntajeactual = 2;
		document.getElementById('elemento').style.display = 'none';
    }
}

function USOJ(obj){
	if(obj.checked){
        puntajeactual = 0;
		document.getElementById('elemento').style.display = 'block';
    }
}

function mostrar(obj){
    if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    document.getElementById('uso').style.display = 'block';
    }
}

function ocultar(obj){
    if(obj.checked){
    document.getElementById('uso').style.display = 'none';
    }
}

function anteriorA(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorB(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorC(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorD(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorE(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorF(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorG(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorH(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorI(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'none';
    }
}

function anteriorJ(obj){
	if(obj.checked){
		document.getElementById('anterior').style.display = 'block';
    }
}

var puntajeprimerpiso = 0;
function primerpisoA(obj){
	if(obj.checked){
        puntajeprimerpiso = 0;
    }
}

function primerpisoB(obj){
	if(obj.checked){
        puntajeprimerpiso = 1;
    }
}

function primerpisoC(obj){
	if(obj.checked){
        puntajeprimerpiso = 2;
    }
}

function primerpisoD(obj){
	if(obj.checked){
        puntajeprimerpiso = 2;
    }
}

function primerpisoE(obj){
	if(obj.checked){
        puntajeprimerpiso = 3;
    }
}

function primerpisoF(obj){
	if(obj.checked){
        puntajeprimerpiso = 3;
    }
}

function primerpisoG(obj){
	if(obj.checked){
        puntajeprimerpiso = 2;
    }
}

function primerpisoH(obj){
	if(obj.checked){
        puntajeprimerpiso = 4;
    }
}

function primerpisoI(obj){
	if(obj.checked){
        puntajeprimerpiso = 2;
    }
}

function primerpisoJ(obj){
	if(obj.checked){
        puntajeprimerpiso = 0;
    }
}

var puntajetotalp = 0;
function totalp1(obj){
	if(obj.checked){
        puntajetotalp = 1;
    }
}

function totalp2(obj){
	if(obj.checked){
        puntajetotalp = 1;
    }
}

function totalp3(obj){
	if(obj.checked){
        puntajetotalp = 1;
    }
}

function totalp4(obj){
	if(obj.checked){
        puntajetotalp = 2;
    }
}

function totalp5(obj){
	if(obj.checked){
        puntajetotalp = 2;
    }
}

function totalp6(obj){
	if(obj.checked){
        puntajetotalp = 2;
    }
}

function totalp7(obj){
	if(obj.checked){
        puntajetotalp = 3;
    }
}

var puntajetotalu = 0;
function totalu1(obj){
	if(obj.checked){
        puntajetotalu = 1;
    }
}

function totalu2(obj){
	if(obj.checked){
        puntajetotalu = 1;
    }
}

function totalu3(obj){
	if(obj.checked){
        puntajetotalu = 1;
    }
}

function totalu4(obj){
	if(obj.checked){
        puntajetotalu = 2;
    }
}

function totalu5(obj){
	if(obj.checked){
        puntajetotalu = 2;
    }
}

function totalu6(obj){
	if(obj.checked){
        puntajetotalu = 2;
    }
}

function totalu7(obj){
	if(obj.checked){
        puntajetotalu = 3;
    }
}

var puntajepar = 0;
function par1(obj){
	if(obj.checked){
        puntajepar = 0;
    }
}

function par2(obj){
	if(obj.checked){
        puntajepar = 1;
    }
}

function par3(obj){
	if(obj.checked){
        puntajepar = 2;
    }
}

function par4(obj){
	if(obj.checked){
        puntajepar = 3;
    }
}

function par5(obj){
	if(obj.checked){
        puntajepar = 3;
    }
}

function par6(obj){
	if(obj.checked){
        puntajepar = 4;
    }
}

var puntajemuro = 0;
function muro1(obj){
	if(obj.checked){
		puntajemuro = 3;
	}
}

function muro2(obj){
	if(obj.checked){
		puntajemuro = 0;
	}
}


var puntajeequipo = 0;
function equipo1(obj){
	if(obj.checked){
        puntajeequipo = 4;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo2(obj){
	if(obj.checked){
        puntajeequipo = 3;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo3(obj){
	if(obj.checked){
        puntajeequipo = 3;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo4(obj){
	if(obj.checked){
        puntajeequipo = 4;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo5(obj){
	if(obj.checked){
        puntajeequipo = 4;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo6(obj){
	if(obj.checked){
        puntajeequipo = 3;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo7(obj){
	if(obj.checked){
        puntajeequipo = 0;
		document.getElementById('equipo').style.display = 'none';
    }
}

function equipo8(obj){
	if(obj.checked){
        puntajeequipo = 0;
		document.getElementById('equipo').style.display = 'block';
    }
}

function checkbox(){
	$(document).ready(function(){
		var cantidadMaxima=2;
	// Evento que se ejecuta al soltar una tecla en el input
	$("#cantidad").keydown(function(){
		$("input[type=checkbox]").prop('checked', false);
		$("#seleccionados").html("0");
	});
	
	// Evento que se ejecuta al pulsar en un checkbox
	$("input[type=checkbox]").change(function(){
		// Cogemos el elemento actual
		var elemento=this;
		var contador=0;
		// Recorremos todos los checkbox para contar los que estan seleccionados
		$("input[type=checkbox]").each(function(){
			if($(this).is(":checked"))
				contador++;
		});
		// Comprovamos si supera la cantidad máxima indicada
		if(contador>cantidadMaxima)
		{
			alert("Has seleccionado un numero mayor de opciones permitidas");
			// Desmarcamos el ultimo elemento
			$(elemento).prop('checked', false);
			contador--;
		}
		$("#seleccionados").html(contador);
	});
	});
	}

function suma(a, b, c, e, f, g, h, i, j){
	var a=puntajeubi, b=puntajeele, c=puntajeactual, e=puntajeprimerpiso, f=puntajetotalp, g=puntajetotalu, h=puntajepar, i=puntajemuro, j=puntajeequipo;
	return a+b+c+e+f+g+h+i+j;
}

function resultadoexterior(){
	sumaexterior=suma(puntajeubi,puntajeele,puntajeactual,puntajeprimerpiso,puntajetotalp,puntajetotalu,puntajepar,puntajemuro,puntajeequipo);
	document.getElementById('result').value = sumaexterior;
	return sumaexterior;
}