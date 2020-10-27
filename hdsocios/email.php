<?php 


		$mail="hedez.diaz.sandra@gmail.com";
		$nombre = $_POST['nombre'];
		$correo = $_POST['correo'];
		$mensaje = $_POST['mensaje'];
			
			
			

			$texto = "Correo:  ".$correo."\n"."Nombre:  ".$nombre."\n"."\n"."Mensaje:  ".$mensaje;
			
			if(mail($mail,'Cliente Nuevo', $texto))
			{
				echo "se mando";
			}
		

		
	
