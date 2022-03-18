function creaCampos(){
	var objeto_campo=document.getElementById('contenedor_campo');
	var objeto_aviso=document.getElementById('contenedor_aviso');
	var objeto_input=document.createElement('input');		
	objeto_input.type="text";
	objeto_campo.appendChild(objeto_input);
	objeto_input.setAttribute("onblur","escuchaInput();");
	}
	function escuchaInput(){
	var objeto_aviso=document.getElementById('contenedor_aviso');
	var valor_input=document.getElementsByTagName('input')[0].value.length;
	var valor_div=document.createElement('div');
	if(valor_input<4){
		objeto_aviso.innerHTML="";
		valor_div.className="alert alert-danger"
		valor_div.innerHTML="<strong>INCORRECTO</strong> El campo debe ser de mas de 4 caracteres";
		objeto_aviso.appendChild(valor_div);

		}
	else {
		objeto_aviso.innerHTML="";
		valor_div.className="alert alert-success";
		valor_div.innerHTML="<strong>CORRECTO</strong> El campo cumple las condiciones";
		objeto_aviso.appendChild(valor_div);
	}
}
