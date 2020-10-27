

$(document).ready(function(){
   var content = [];
   $.getJSON("http://hdasociados.com/HD/blog/noticia.json",function(data){ 
      
      var url = "http://hdasociados.com/HD/blog/img_noticia/"
      content = data['noticias'];
      //console.log(content);
      console.log(content.length);
      //alert(content[3].img_nombre);
      ultimo=(content.length)-1;
      $("#img_noticia").attr('src',url+content[ultimo].img_nombre);
      $("#titulo_noticia").html(content[ultimo].titulo);
      $("#autor_noticia").html(content[ultimo].autor);
      $("#fecha_noticia").html(content[ultimo].fecha);
      $("#texto_noticia").html(content[ultimo].texto);
      
      

    				
    				
    if(content.length==6){
        $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t1" id="titulo_npequeña1" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña1" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t2" id="titulo_npequeña2" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña2" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div> <div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t3" id="titulo_npequeña3" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña3" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t4" id="titulo_npequeña4" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña4" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t5" id="titulo_npequeña5" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña5" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
    }
    
    
        if(content.length==5){
            $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t1" id="titulo_npequeña1" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña1" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t2" id="titulo_npequeña2" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña2" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div> <div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t3" id="titulo_npequeña3" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña3" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t4" id="titulo_npequeña4" class="noticia_small"></p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña4" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
    }
    
            if(content.length==4){
                $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small">La recaudación del SAT sigue arrojando resultados positivos</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t1" id="titulo_npequeña1" class="noticia_small">Aduana del siglo 21, posible gracias a la labor de agentes aduanales. SAT</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña1" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t2" id="titulo_npequeña2" class="noticia_small">Inicia intercambio de información financiera para efectos fiscales</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña2" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div> <div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t3" id="titulo_npequeña3" class="noticia_small">Aduana del siglo 21, posible gracias a la labor de agentes aduanales. SAT</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña3" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
    }
    
                if(content.length==3){
                    $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small">La recaudación del SAT sigue arrojando resultados positivos</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t1" id="titulo_npequeña1" class="noticia_small">Aduana del siglo 21, posible gracias a la labor de agentes aduanales. SAT</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña1" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t2" id="titulo_npequeña2" class="noticia_small">Inicia intercambio de información financiera para efectos fiscales</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña2" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
    }
    
                    if(content.length==2){
                        $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small">La recaudación del SAT sigue arrojando resultados positivos</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div><div class="item"><div><a href="#" class="col-md-5 col-xs-12"><p name="t1" id="titulo_npequeña1" class="noticia_small">Aduana del siglo 21, posible gracias a la labor de agentes aduanales. SAT</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña1" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
    }
    
               if(content.length==1){
                   
            $("#myCarousel").removeClass( "hide" );
            $("#myCarousel").addClass( "show" );
            $(".carousel-inner").html('<div class="item active activo"><div><a href="#" class="col-md-5 col-xs-12"><p name="t0" id="titulo_npequeña0" class="noticia_small">La recaudación del SAT sigue arrojando resultados positivos</p></a><div class="div_img col-md-4 col-xs-12"><img id="img_npequeña0" src="img/barco1300x300.jpg" class="imgCarrusel"></div></div></div>');
        
         }
         
         
        if(content.length===0){
            $("#myCarousel").removeClass( "show" );
            $("#myCarousel").addClass( "hide" );
        
         }
    

      for (i = 0; i < (content.length); i++) { 
   
        tit="#titulo_npequeña"+i;
        img="#img_npequeña"+i;
        $(tit).html(content[i].titulo);
        $(img).attr('src',url+content[i].img_nombre);
        
    }



      /**
       * 
           for (i = 0; i < (content.length); i++) { 
   
        tit="#titulo_npequeña"+i;
        img="#img_npequeña"+i;
        $(tit).html(content[i].titulo);
        $(img).attr('src',url+content[i].img_nombre);
        
    }

       $("#titulo_npequeña0").html(content[0].titulo);
        $("#img_npequeña0").attr('src',url+content[0].img_nombre);


        $("#titulo_npequeña1").html(content[1].titulo);
        $("#img_npequeña1").attr('src',url+content[1].img_nombre);

        $("#titulo_npequeña2").html(content[2].titulo);
        $("#img_npequeña2").attr('src',url+content[2].img_nombre);

        $("#titulo_npequeña3").html(content[3].titulo);
        $("#img_npequeña3").attr('src',url+content[3].img_nombre);

        $("#titulo_npequeña4").html(content[4].titulo);
        $("#img_npequeña4").attr('src',url+content[4].img_nombre);

        $("#titulo_npequeña5").html(content[5].titulo);
        $("#img_npequeña5").attr('src',url+content[5].img_nombre);

      
    **/


      $(".noticia_small").click(function(){
        var numero = $(this).attr("name");
        var id = numero.substr(-1);
        var url = "http://hdasociados.com/HD/blog/img_noticia/";
        //alert(id);
        //alert(content[id].titulo)

        $("#img_noticia").attr('src',url+content[id].img_nombre);
        $("#titulo_noticia").html(content[id].titulo);
        $("#autor_noticia").html(content[id].autor);
        $("#fecha_noticia").html(content[id].fecha);
        $("#texto_noticia").html(content[id].texto);

 
        


      });





      


   })




   
});






