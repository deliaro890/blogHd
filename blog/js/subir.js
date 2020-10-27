$(document).ready(function(){
   
  
   
   
   $('#noticia_imagen').change(function(){
 	var filename = $(this).val().split('\\').pop();
 	$("#label_imagen").html(filename);
 	  alert(filename);
});
    
   
   $("#noticias_guardar").click(function(event) {

   		var parametros = {
   			"titulo": $("#noticia_titulo").val(),
   			"texto": $("#noticia_texto").val(),
        "autor": $("#noticia_autor").val(),
        "imagen": $("#noticia_imagen").val()
   		}
   		

      var datos = new FormData($("#form_noticia")[0]);
   		$.ajax({
            url: './guardar_noticia.php',
            type: 'POST',
            data: datos,
            contentType: false,
            processData: false,
            success: function(response){
                if(response=="si"){
                	$("#form_noticia")[0].reset();
                	$("#label_imagen").css("color","black");
                	$("#label_imagen").html("*Dimensiones mínimas de imagen: ancho 1300px por 866px de alto");
                	
                	
                }else{
                    console.log(response);
                	$("#label_imagen").css("color","red");
                	$("#label_imagen").html("La imagen no cumple con las medidas");
                	
                }
                	
                	
                
                
              }
            })

   		
   });
});