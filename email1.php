<?php 


		$mail="hedez.diaz.sandra@gmail.com";
		$nombre = $_POST['nombre'];
		$correo = $_POST['correo'];
		$mensaje = $_POST['mensaje'];
		$numero = $_POST['numero'];
		$asunto = $_POST['asunto'];	
			
			

			$texto = "Correo:  ".$correo."\n"."Nombre:  ".$nombre."\n"."\n"."Mensaje:  ".$mensaje."\n"."\n"."Numero:  ".$numero."\n"."\n"."Asunto:  ".$asunto;
			
			if(mail($mail,'Cliente Nuevo', $texto))
			{
				echo "se mando";
			}
		

		
	
