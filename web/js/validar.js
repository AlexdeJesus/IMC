function calcularIMC(){
var formulario = document.getElementById("formulario");
alert(typeof(formulario));
var kilos = formulario.kilos.value;;//recupera campo, valor, o oper unario converte a string em numero, posso converter tmb usando o parse
var metros = formulario.metros.value;
var centimetros = formulario.centimetros.value;
var msg = document.getElementById("msg");
alert(kilos);
alert(metros);
alert(centimetros);
}

function limpar(){
	
	var formulario = document.getElementById("formulario");
	var msg = document.getElementById("msg");
	formulario.kilos.value = "";
	formulario.metros.value = "";
	formulario.centimetros.value = "";
	formulario.imc.value = "";
	document.getElementById("msg").innerHTML="";
}
