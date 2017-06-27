$(document).ready(function(){
	$("input:button").click(function(){
		btn = $(this).val(); //btn guarda el valor del input tipo button que se ha presionado gracias a this
		pantalla = $("#resultado").val(); //pantalla guarda el valor que mostrará en la input que será nuestra calc
		if(btn=="C"){
			$("#resultado").val(""); //si el resultado es C la pantalla debe mostrarse en blanco
		}else{
			if(btn=="="){ //si el valor es igual a "="
				$("#resultado").val(eval(pantalla)); //evaluará el string que se encuentra guardado y resolverá la operación gracias a eval
			}else{
				$("#resultado").val(pantalla + btn);//en caso que sea  otro boton distinto a "=" ingresará en pantalla el valor del botón presionado, concatenándolo con el o los valores ya guardados en pantalla.
			}
		}
	})
});