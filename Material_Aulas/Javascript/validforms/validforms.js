
function validar(){

	var valor = document.getElementById("numero").value;
	var nomeValor = document.getElementById("nome").value;

	if(valor.length > 2){
		alert("Digite 2 numeros ou menos");
		document.formulario.numero.focus();
		return false;

	}else if(nomeValor.length < 3){
		alert("Digite um nome maior");
		document.formulario.nome.focus();
		return false;

	}else{
		alert("formulario enviado");
		return true;
	}

}