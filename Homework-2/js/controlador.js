
var a=0;
var b=0;
var signo;

function escribir(numero){
    if(document.getElementById("numero").value == "0" || a==0){
        a = numero;
    }else{
        a += numero;
    }
        document.getElementById("numero").value = a;
}
function limpiar(){
	a = 0;
	b = 0;
	document.getElementById("numero").value="";
		history.go(0);
}

function operacion(valor){
	if (a == 0){
		resultado = parseInt(document.getElementById("numero").value);
	}
	b = parseInt(a);
	a= 0;
	signo = valor;
}

/**
Suma 1;
Resta 2;
Multiplicacion 3;
Division 4;
*/
function calcular(){
    a = parseInt(a);
	switch (signo){
		case 1:
			a += b;
		break;
		case 2:
			a = b - a;
		break;
		case 3:
			a *= b;
		break;
		case 4:
			a = b / a;
		break;
	}
	document.getElementById("numero").value = a;
	b = parseInt(a);
}