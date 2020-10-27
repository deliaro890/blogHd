<?php 

	$titulo=$_POST['titulo'];
	$texto = $_POST['texto'];
	$imagen = $_FILES['img_up'];
	$autor = $_POST['autor'];
	$fecha = $_POST['fecha'];

	$data = file_get_contents("./noticia.json");
	$notas = json_decode($data,true);
	
	list( $anchoImgOriginal, $altoImgOriginal ) = getimagesize( $imagen[ 'tmp_name' ] ) ;
 	
 	
	//echo $_SERVER['DOCUMENT_ROOT'];
	//echo $imagen['tmp_name'];
	//echo $titulo;
	//echo $imagen['name'];
	//echo count($notas["noticias"]);
	//echo $anchoImgOriginal;
	
	if($altoImgOriginal<260 && $anchoImgOriginal<600){
		echo ("no cumple");
	}else if($altoImgOriginal>=260 && $anchoImgOriginal>=600){

		$nueva_nota= array('titulo'=>$titulo,'texto'=>$texto, 'autor' =>$autor, 'img_nombre' => $imagen['name'], 'extension'=>$imagen['type'], 'fecha'=>$fecha);
		if(count($notas["noticias"])>=6){
			echo ("si");
			array_shift($notas["noticias"]);

			array_push($notas["noticias"],$nueva_nota);

			file_put_contents("./noticia.json",json_encode($notas));
			
			
			move_uploaded_file($imagen['tmp_name'],$_SERVER['DOCUMENT_ROOT'].'/HD/blog/img_noticia/'.$imagen['name']);
			

		}else if(count($notas["noticias"])<6){
			echo ("si");
			array_push($notas["noticias"],$nueva_nota);

			file_put_contents("./noticia.json",json_encode($notas));
			move_uploaded_file($imagen['tmp_name'],$_SERVER['DOCUMENT_ROOT'].'/HD/blog/img_noticia/'.$imagen['name']);
			
		}


	}





 ?>