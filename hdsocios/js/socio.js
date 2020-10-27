urlactual = window.location.pathname;

var socios = [
    'alex',
    'efren',
    'erika',
    'maria',
    'carlos',
    'sandra'
];

var textos = [
    'Socio con 25 años de experiencia en el Sistema Financiero, enfocado en liderar proyectos de manejo de economía saludable, con el objetivo de ayudar a convertir los riesgos en oportunidades. Ofrecemos asesoría en temas como: apertura de cuentas bancarias, Inversiones, créditos bancarios, personales e hipotecarios; seguros de vida, auto y hogar. Diseñando e implementando soluciones en la creación de negocios y empresas de cualquier índole, así como Manuales Organizacionales, de Procedimientos, Controles de Inventarios y Almacén.',
    'Licenciado en Derecho, cursando la Maestría en Derecho Procesal Penal, cuenta con dos especialidades en Juicios Orales. Brinda defensa y representación legal especializada en todo momento, como asesor jurídico privado o defensor privado, siempre procurando un debido proceso e impartición de justicia, en cualquier fase del procedimiento, así como incidentes, recursos, apelación y amparo. Con un equipo especializado en asesoría y servicios dentro de los ámbitos penal, familiar, civil, laboral, mercantil y administrativo.',
    'Licenciada en Contaduría, con más de 15 años de carrera profesional ha sido asesora en las áreas de contabilidad, tributación e impuestos, dirigidas a empresas privadas, públicas y particulares. Coadyuvó diferentes cuentas públicas e implementó el Sistema de Contabilidad Gubernamental en Metrobús. Experta en temas de diseño, reestructuración fiscal, proyectos de organización, reorganización de operaciones, auditorías presupuestales, financieras, realización de Estados Financieros, y en áreas administrativas, maximizando recursos materiales, humanos y financieros; disminuyendo el impacto fiscal.',
    'Con 20 años de experiencia en la elaboración de Avalúos inmobiliarios, comerciales, hipotecarios, y bancarios para la determinación de su valor y costo de arrendamiento. Consultora integral de trámites, regularizaciones, licencias, permisos, revalidación, dictámenes técnicos, opiniones para inmuebles que son Patrimonio Cultural, regularización territorial, así como gestoría ante autoridades y dependencias de Gobierno como son Delegaciones, Tesorería, Protección Civil, SEDUVI, entre otras.',
    'Arquitecto, miembro reconocido por el Colegio de Arquitectos de México por 35 años de trayectoria. Con amplia experiencia en cada uno de los procesos de arquitectura, construcción, trámites ante SEDUVI, Dictamen de Seguridad Estructural, Vistos Buenos de Seguridad y Operación, renovación y Dictámenes para las escuelas ante la SEP, cuenta con la certificación para ser Director Responsable de Obra (D.R.O.), realiza levantamientos topográficos, diseño y desarrollo de proyectos ecológicos vanguardistas con tecnologías sustentables.',
    'Licenciada en Contaduría con Especialidad en Contabilidad, Auditoría y Tributación Internacional, con más de 10 años de experiencia en el sector público. Damos soluciones a cualquier figura jurídica que ejerza, administre, maneje recursos públicos federales, auditados por el uso de recursos, el cumplimiento de metas y objetivos de los fondos y programas, cumpliendo en tiempo y forma cada una de las etapas, así como la realización de solventación para evitar sanciones administrativas, económicas y de índole penal.',
]
var nombre = [
    'Alejandro López Marín',
    'Carlos Efrén Hernández Díaz',
    'Erika Hernández Díaz',
    'Ma. Estanislada Díaz López',
    'Carlos Hernández Rivera',
    'Sandra Hernández Díaz'
]
var colores = [
    '#ce5b2d',
    '#385ca4',
    '#91aa3d',
    '#ce5b2d',
    '#385ca4',
    '#91aa3d'

]

var whatsn = [
    '525543464296',
    '525535619154',
    '525531206305‬',
    '525539332652',
    '525534889196',
    '525534888196'
]



for (i = 0; i < socios.length + 1; i++) {

    if (urlactual =='/hdsocios/'+socios[i]+'/') {

        console.log(socios[i]);

        window.onload = cargaImagen(socios[i]);
        cargarTexto(textos[i]);
        cargarNombre(nombre[i]);
        cargarColor(colores[i]);
        whats(whatsn[i]);
        
        
        
        
    }


}
 
function cargaImagen(socioCargar) {
    document.getElementById('imagen').src = '../img/HDyAsociados_' + socioCargar + '.jpg';
}

function cargarTexto(textoCargar) {
    document.getElementById('textoSocio').innerHTML = textoCargar;
}

function cargarNombre(nombreCargar) {
    document.getElementById('nombreSocio').innerHTML = nombreCargar;
    document.getElementById('nombreS').innerHTML = nombreCargar;
}

function cargarColor(colorCargar) {
    document.getElementById('marcoSocio').style.color = colorCargar;
    document.getElementById('marcoFoto').style.borderColor = colorCargar;
    document.getElementById('boton').style.borderColor = colorCargar;
    document.getElementById('botonWhats').style.backgroundColor = colorCargar;
}

function info(){
document.getElementById('formulario').style.display='block';
}

function cerrar(){
   document.getElementById('formulario').style.display='none'; 
}

    function cerrar2(){
     location.href='http://hdasociados.com';
}

function whats(numbers){

    document.getElementById('awhats').href='https://api.whatsapp.com/send?phone='+numbers+'';


}




//correo////////

$("#enviar").click(function (){
     

          var parametros = {
            "nombre" : $("#nombre").val(),
            "correo" : $("#correo").val(),
            "mensaje" : $("#mensaje").val()
          };

          console.log(parametros);
          
            $.ajax({
            url: '../email.php',
            type: 'POST',
            data: parametros,
            success: function(resp){
                 $('#form_c')[0].reset();
                 console.log(resp);
                 document.getElementById('gracias').style.display='block';
              }
            })
   

    });




