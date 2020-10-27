	
	var b1 = 0;
	var b1_2 = 0;
	var b1_3 = 0;

	var b2 = 0;
	var b2_2 = 0;
	var b2_3 = 0;
	var b2_4 = 0;
	var b2_5 = 0;
	var b2_6 = 0;

	var b3 = 0;
	var b3_2 = 0;
	var b3_3 = 0;
	var b3_4 = 0;
    
    var b4=0;

	$("#mas1").click(function(){
		b1++;
		b1_2 = 0;
	    b1_3 = 0;
		$("#mas1_3").after($("#oculto1").slideToggle("slow"));

		if(b1%2 != 0){
			$('#imagen1').hide('slow');
			$('#lineaTexto1').hide('slow');
			$('#oculto1_2').hide('slow');
			$('#oculto1_3').hide('slow');
			document.getElementById('conta').style.marginTop='0px';

		}
		else{
			$('#imagen1').show('slow');
			$('#lineaTexto1').show('slow');

			}
	})


	$("#mas1_2").click(function(){
		b1_2++;
		b1 = 0;
	    b1_3 = 0;
		$("#mas1_3").after($("#oculto1_2").slideToggle("slow"));
		if(b1_2%2 != 0){
			$('#imagen1').hide('slow');
			$('#lineaTexto1').hide('slow');
			$('#oculto1').hide('slow');
			$('#oculto1_3').hide('slow');
			document.getElementById('conta').style.marginTop='0px';

		}
		else{
			$('#imagen1').show('slow');
			$('#lineaTexto1').show('slow');

			}
	})

	$("#mas1_3").click(function(){
		b1_3++;
		b1 = 0;
	    b1_2 = 0;
		$("#mas1_3").after($("#oculto1_3").slideToggle("slow"));
		if(b1_3%2 != 0){

			$('#imagen1').hide('slow');
			$('#lineaTexto1').hide('slow');
			$('#oculto1').hide('slow');
			$('#oculto1_2').hide('slow');
			document.getElementById('conta').style.marginTop='0px';

		}
		else{
			$('#imagen1').show('slow');
			$('#lineaTexto1').show('slow');

			}

	})



	$("#mas2").click(function(){
		b2++;
		b2_2 = 0;
        b2_3 = 0;
        b2_4 = 0;
        b2_5 = 0;
        b2_6 = 0;

		$("#mas2_6").after($("#oculto2").slideToggle("slow"));

		if(b2%2 != 0){
			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2_2').hide('slow');
			$('#oculto2_3').hide('slow');
			$('#oculto2_4').hide('slow');
			$('#oculto2_5').hide('slow');
			$('#oculto2_6').hide('slow');
			document.getElementById('legall').style.marginTop='0px';
		

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');


			}
	})


	$("#mas2_2").click(function(){
		b2_2++;
		b2 = 0;
        b2_3 = 0;
        b2_4 = 0;
        b2_5 = 0;
        b2_6 = 0;

		$("#mas2_6").after($("#oculto2_2").slideToggle("slow"));
		if(b2_2%2 != 0){
			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_3').hide('slow');
			$('#oculto2_4').hide('slow');
			$('#oculto2_5').hide('slow');
			$('#oculto2_6').hide('slow');
			document.getElementById('legall').style.marginTop='0px';

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');

			}
	})

	$("#mas2_3").click(function(){
		b2_3++;
		b2 = 0;
        b2_2 = 0;
        b2_4 = 0;
        b2_5 = 0;
        b2_6 = 0;
		$("#mas2_6").after($("#oculto2_3").slideToggle("slow"));
		if(b2_3%2 != 0){

			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2_2').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_4').hide('slow');
			$('#oculto2_5').hide('slow');
			$('#oculto2_6').hide('slow');
			document.getElementById('legall').style.marginTop='0px';

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');

			}

	})

$("#mas2_4").click(function(){
		b2_4++;
		b2_2 = 0;
        b2_3 = 0;
        b2 = 0;
        b2_5 = 0;
        b2_6 = 0;

		$("#mas2_6").after($("#oculto2_4").slideToggle("slow"));

		if(b2_4%2 != 0){
			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2_2').hide('slow');
			$('#oculto2_3').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_5').hide('slow');
			$('#oculto2_6').hide('slow');
			document.getElementById('legall').style.marginTop='0px';
		

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');

			}
	})


	$("#mas2_5").click(function(){
		b2_5++;
		b2 = 0;
        b2_3 = 0;
        b2_4 = 0;
        b2 = 0;
        b2_6 = 0;

		$("#mas2_6").after($("#oculto2_5").slideToggle("slow"));
		if(b2_5%2 != 0){
			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_3').hide('slow');
			$('#oculto2_4').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_6').hide('slow');
			document.getElementById('legall').style.marginTop='0px';

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');

			}
	})

	$("#mas2_6").click(function(){
		b2_6++;
		b2 = 0;
        b2_2 = 0;
        b2_4 = 0;
        b2_5 = 0;
        b2 = 0;
		$("#mas2_6").after($("#oculto2_6").slideToggle("slow"));
		if(b2_6%2 != 0){

			$('#imagen2').hide('slow');
			$('#lineaTexto2').hide('slow');
			$('#oculto2_2').hide('slow');
			$('#oculto2').hide('slow');
			$('#oculto2_4').hide('slow');
			$('#oculto2_5').hide('slow');
			$('#oculto2').hide('slow');
			document.getElementById('legall').style.marginTop='0px';

		}
		else{
			$('#imagen2').show('slow');
			$('#lineaTexto2').show('slow');

			}

	})

$("#mas3").click(function(){
		b3++;
		b3_2 = 0;
        b3_3 = 0;
        b3_4 = 0;

		$("#mas3_4").after($("#oculto3").slideToggle("slow"));

		if(b3%2 != 0){
			$('#imagen3').hide('slow');
			$('#lineaTexto3').hide('slow');
			$('#oculto3_2').hide('slow');
			$('#oculto3_3').hide('slow');
			$('#oculto3_4').hide('slow');
			document.getElementById('audi').style.marginTop='0px';
		}
		else{
			$('#imagen3').show('slow');
			$('#lineaTexto3').show('slow');

			}
	})


	$("#mas3_2").click(function(){
		b3_2++;
		b3 = 0;
        b3_3 = 0;
        b3_4 = 0;

		$("#mas3_4").after($("#oculto3_2").slideToggle("slow"));

		if(b3_2%2 != 0){
			$('#imagen3').hide('slow');
			$('#lineaTexto3').hide('slow');
			$('#oculto3').hide('slow');
			$('#oculto3_3').hide('slow');
			$('#oculto3_4').hide('slow');
			document.getElementById('audi').style.marginTop='0px';
		}
		else{
			$('#imagen3').show('slow');
			$('#lineaTexto3').show('slow');

			}
	})

	$("#mas3_3").click(function(){
		b3_3++;
		b3_2 = 0;
        b3 = 0;
        b3_4 = 0;

		$("#mas3_4").after($("#oculto3_3").slideToggle("slow"));

		if(b3_3%2 != 0){
			$('#imagen3').hide('slow');
			$('#lineaTexto3').hide('slow');
			$('#oculto3_2').hide('slow');
			$('#oculto3').hide('slow');
			$('#oculto3_4').hide('slow');
			document.getElementById('audi').style.marginTop='0px';
		}
		else{
			$('#imagen3').show('slow');
			$('#lineaTexto3').show('slow');

			}
	})

$("#mas3_4").click(function(){
		b3_4++;
		b3_2 = 0;
        b3_3 = 0;
        b3 = 0;

		$("#mas3_4").after($("#oculto3_4").slideToggle("slow"));

		if(b3_4%2 != 0){
			$('#imagen3').hide('slow');
			$('#lineaTexto3').hide('slow');
			$('#oculto3_2').hide('slow');
			$('#oculto3_3').hide('slow');
			$('#oculto3').hide('slow');
			document.getElementById('audi').style.marginTop='0px';
		}
		else{
			$('#imagen3').show('slow');
			$('#lineaTexto3').show('slow');

			}
	})


	$("#mas4").click(function(){
		b4++;
		
		$("#mas4").after($("#oculto4").slideToggle("slow"));

		if(b4%2 != 0){
			$('#imagen4').hide('slow');
			$('#lineaTexto4').hide('slow');
			document.getElementById('arqui').style.marginTop='0px';

		}
		else{
			$('#imagen4').show('slow');
			$('#lineaTexto4').show('slow');

			}
	})

	////////////////

	var indice=1;/////variable global para las dos funciones siguientes
	function siguiente(){
		if(indice==1){ //si en indice es 1, se pone en dos y aparece solo el article 2
			indice=2;
			document.getElementById('s1').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s2').style.display='block';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';

		
		}

		else if(indice==2){//si da click en siguiente y el indice es 2, va al article 3
			indice=3;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='block';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';

			
			

		}

		else if(indice==3){
			
			indice=4;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='block';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
			

		}

		else if(indice==4){
			
			indice=5;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='block';
			document.getElementById('s6').style.display='none';
			

		}

		else if(indice==5){//si está en el 3 regresa al 1
			
			indice=6;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='block';
			

		}


		else if(indice==6){//si está en el 6 regresa al 1
			
			indice=1;
			document.getElementById('s1').style.display='block';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
			

		}

	
	}

	//tiene que ser un solo if con dos else if..

	function anterior(){
		if(indice==6){
			indice=5;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='block';
			document.getElementById('s6').style.display='none';
		
		}
		else if(indice==5){
			indice=4;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='block';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
		}

		else if(indice==4){
			indice=3;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='block';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
		}
		else if(indice==3){
			indice=2;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='block';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
		}

		else if(indice==2){
			indice=1;
			document.getElementById('s1').style.display='block';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='none';
		}

		else if(indice==1){
			
			indice=6;
			document.getElementById('s1').style.display='none';
			document.getElementById('s2').style.display='none';
			document.getElementById('s3').style.display='none';
			document.getElementById('s4').style.display='none';
			document.getElementById('s5').style.display='none';
			document.getElementById('s6').style.display='block';
			

		}
	}

	function landing(socio){

		location.href='http://hdasociados.com/hdsocios/'+socio+'/';
	}
	
	
	function jeje(){
	    alert('jeje');
	}



	
