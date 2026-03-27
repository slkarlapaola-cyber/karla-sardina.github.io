const loginForm = document.getElementById('loginForm'); //document(todo el html), getElementById(busca id), y lo guarda en la variable loginForm.

if (loginForm) { //si existe
    loginForm.addEventListener('submit', function(e) { //escucha cuando ocurre evento (aqui el submit)
        e.preventDefault(); //evitar que se recargue la pag

        const email = document.getElementById('userEmail').value; //value es el valor que escribio el usuario
        const pass = document.getElementById('userPass').value;

        //
        if (email === "enf.karla@ssa.gob.mx" && pass === "280598") { //=== condicion logica
            window.location.href = 'registro.html'; //window(ventana nav), location(ubicacion actual), refiere a
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Credenciales incorrectas',
                icon: 'error'
            });
        }
    });
}


//IMPRESIOOOON
function generarpdf() {

  //aqui van los dtos de que ingresa la enf
  const identificado = document.getElementById("identificado")?.value || "";//?(si el usuario escribe, usalo), ||""(si es valor es nulo usar "")
  const nombre = document.getElementById("nombre")?.value || "";
  const paterno = document.getElementById("apellidoP")?.value || "";
  const materno = document.getElementById("apellidoM")?.value || "";
  const alias = document.getElementById("alias")?.value || "";
  const curp = document.getElementById("curp")?.value || "";
  const sexo = document.getElementById("sexo")?.value || "";
  const nacimiento = document.getElementById("fechaNac")?.value || "";
  const edad = document.getElementById("edad")?.value || "";
  const nacionalidad = document.getElementById("nacionalidad")?.value || "";
  const estadoCivil = document.getElementById("estadoCivil")?.value || "";

  const conciencia = document.getElementById("conciencia")?.value || "";
  const orientacion = document.getElementById("orientacion")?.value || "";
  const condicion = document.getElementById("condicion")?.value || "";
  const dolor = document.getElementById("dolor")?.value || "";
  const movilidad = document.getElementById("movilidad")?.value || "";
  const piel = document.getElementById("piel")?.value || "";
  const hidratacion = document.getElementById("hidratacion")?.value || "";
  const glasgow = document.getElementById("glasgow")?.value || "";

  
  const peso = document.getElementById("peso")?.value || "";
  const glucosa = document.getElementById("glucosa")?.value || "";
  const fc = document.getElementById("fc")?.value || "";
  const fr = document.getElementById("fr")?.value || "";
  const temp = document.getElementById("temp")?.value || "";
  const spo2 = document.getElementById("spo2")?.value || "";
  const sangre = document.getElementById("sangre")?.value || "";

  const triage = document.getElementById("triage")?.value || "";
  const tiempoEspera = document.getElementById("tiempoEspera").value;
  const motivo = document.getElementById("motivo")?.value || "";
  const antecedentes = document.getElementById("antecedentes")?.value || "";

  
  const contacto = document.getElementById("contacto")?.value || "";
  const parentesco = document.getElementById("parentesco")?.value || "";
  const telefono = document.getElementById("telefono")?.value || "";
  const contactoEmergencia = document.getElementById("contactoEmergencia")?.value || "";
  const direccion = document.getElementById("direccion")?.value || "";

  const fecha = document.getElementById("fechaIngreso")?.value || "";
  const hora = document.getElementById("horaIngreso")?.value || "";
  const llegada = document.getElementById("llegada")?.value || "";
  const institucionAmbulancia = document.getElementById("institucionAmbulancia")?.value || "";
  const unidadAmbulancia = document.getElementById("unidadAmbulancia")?.value || "";
  const personalAmbulancia = document.getElementById("personalAmbulancia")?.value || "";
  const motivoTraslado = document.getElementById("motivoTraslado")?.value || "";
  const atencionAmbulancia = document.getElementById("atencionAmbulancia")?.value || "";
  const medicamentosAmbulancia = document.getElementById("medicamentosAmbulancia")?.value || "";
  const estadoTraslado = document.getElementById("estadoTraslado")?.value || "";

  const enfermero = document.getElementById("enfermero").value;
  const medico = document.getElementById("medico").value;

  const terminos = document.getElementById("terminos").checked;


  //validacion de campos obligatorios
if (
  identificado === "" ||
  alias === "" ||
  conciencia === "" ||
  orientacion === "" ||
  condicion === "" ||
  dolor === "" ||
  movilidad === "" ||
  piel === "" ||
  hidratacion === "" ||
  glasgow === "" ||
  ta === "" ||
  fc === "" ||
  fr === "" ||
  temp === "" ||
  spo2 === "" ||
  sangre === "" ||
  triage === "" ||
  tiempoEspera === "" ||
  motivo === "" ||
  fecha === "" ||
  hora === "" ||
  llegada === "" ||
  enfermero === "" ||
  medico === "" ||
  !terminos
) {

  Swal.fire({ //alerta si no se llenan los campo s con input
    title: 'Datos incompletos',
    text: 'Por favor complete todos los campos obligatorios antes de imprimir el expediente clínico.',
    icon: 'warning'
  });

  return;
}


  //este es el diseñito del pdf
  const docDefinition = { //comienza el objeto de conf de pdf
    pageMargins: [40, 60, 40, 60],

  ///////////////////diseño fondo
  background: function(currentPage, pageSize) { //curentPage(num.pag actual), pageSize(tamaño de pagina)
    return [

      //marca de agua
      {
        image: 'logo',
        width: 350,
        opacity: 0.06,
        absolutePosition: {
          x: (pageSize.width - 350) / 2, //centrar logo
          y: (pageSize.height - 350) / 2
        }
      },

      //linea marco hoja
      {
        canvas: [ //permite dibujar formas
          {
            type: 'rect', //rectangulo
            x: 20,
            y: 20,
            w: pageSize.width - 40, //el ancho de la pagina menos 40 (20 de cada lado)
            h: pageSize.height - 40,
            lineWidth: 1
          }
        ]
      }

    ];
  },

  content: [ //todo lo que aparece en pdf

    // logito mas titulo
    {
      stack: [
        {
          image: 'logo',
          width: 60,
          alignment: 'center'
        },
        {
          text: 'SSA - HOSPITAL GENERAL DE VALLE DE SANTIAGO',
          style: 'header',
          alignment: 'center',
          margin: [0, 5, 0, 0]
        },
        {
          text: 'EXPEDIENTE CLÍNICO',
          style: 'subheader',
          alignment: 'center',
          margin: [0, 2, 0, 10]
        }
      ]
    },

/////// fin diseñop2
    
      //datos del px
      { text: '\nDatos del paciente', style: 'subheader' },
      `Px identificado: ${identificado === 'identificado' ? 'Sí' : 'No'}`,
      `Nombre: ${nombre} ${paterno} ${materno}`,
      `Alias: ${alias}`,
      `CURP: ${curp}`,
      `Sexo: ${sexo}`,
      `Fecha nacimiento: ${nacimiento}`,
      `Edad: ${edad}`,
      `Nacionalidad: ${nacionalidad}`,
      `Estado civil: ${estadoCivil}`,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea entre clasificaciones, con sistema de coordenadas(punto inicial - puntop final)

      { text: '\nEstado general', style: 'subheader' },
      `Conciencia: ${conciencia}`,
      `Orientación: ${orientacion}`,
      `Nivel de conciencia: ${conciencia}`,
      `Orientación: ${orientacion}`,
      `Condición general: ${condicion}`,
      `Dolor (0-10): ${dolor}`,
      `Movilidad: ${movilidad}`,
      `Coloración de piel: ${piel}`,
      `Hidratación: ${hidratacion}`,
      `Escala de Glasgow: ${glasgow}`,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nSignos vitales', style: 'subheader' },
      `peso: ${peso}`,
      `glucosa: ${glucosa}`,
      `TA: ${ta}`,
      `FC: ${fc}`,
      `FR: ${fr}`,
      `Temp: ${temp}`,
      `SpO2: ${spo2}`,
      `Tipo de sangre: ${sangre}`,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nTriage', style: 'subheader' },
      `Nivel: ${triage}`,

      `Tiempo estimado de atención: ${tiempoEspera}`,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nMotivo', style: 'subheader' },
      motivo,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nAntecedentes', style: 'subheader' },
      antecedentes,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nContacto', style: 'subheader' },
      `Contacto: ${contacto}`,
      `Parentesco: ${parentesco}`,
      `Tel: ${telefono}`,
      `Teléfono de emergencia: ${contactoEmergencia}`,
      `Dirección: ${direccion}`,

      { canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1 }] }, //linea

      { text: '\nIngreso', style: 'subheader' },
      `Fecha: ${fecha}`,
      `Hora: ${hora}`,
      `Llegada: ${llegada}`,
      `Institución de ambulancia: ${institucionAmbulancia}`,
      `Unidad de ambulancia: ${unidadAmbulancia}`,
      `Personal que entrega al paciente: ${personalAmbulancia}`,
      `Motivo del traslado: ${motivoTraslado}`,
      `Atención brindada en ambulancia: ${atencionAmbulancia}`,
      `Medicamentos administrados: ${medicamentosAmbulancia || 'No referido'}`,
      `Estado del paciente durante traslado: ${estadoTraslado}`,

      {
  text: [
    `Enfermero responsable: ${enfermero}\n`,
    `Médico responsable: ${medico}\n`,
  ],
  margin: [0,10,0,0]
},

      { text: '', margin: [0, 60] }, //agrega espacio para bajar las firmas

      // espacio antes de firmas
//{ text: '\n\n' }, //agrega dos saltos de línea(enter, enter)

//firmitas
{
  columns: [ //crea columnas para las firmas
    {
      width: '*', //la columna ocupa espacio (se divide en tres)
      alignment: 'center',
      stack: [ //elementos uno debadjo del otro
        { text: '____________________________', margin: [0, 40, 0, 5] },
        { text: 'Encargado de Ambulancia', bold: true, fontSize: 10},
        { text: `Paramedico. ${personalAmbulancia}`}
      ]
    },
    {
      width: '*',
      alignment: 'center',
      stack: [
        { text: '____________________________', margin: [0, 40, 0, 5] },
        { text: 'Enfermero que recibe', bold: true, fontSize: 10 },
        { text: `Enf. ${enfermero}`}
      ]
    },
    {
      width: '*',
      alignment: 'center',
      stack: [
        { text: '____________________________', margin: [0, 40, 0, 5] },
        { text: 'Médico que valora', bold: true, fontSize: 10 },
        { text: `Med. ${medico}`}
      ]
    }
  ]
}
    ],

    

    // logito de pdf
    images: {
      logo: 'data:image/png;base64,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'
    },

    styles: {
      header: { fontSize: 18, bold: true },
      subheader: { fontSize: 14, bold: true }
    }
  };

  //se abre la ventana de impresion
 Swal.fire({
  title: 'Expediente registrado',
  text: `Enf. ${enfermero}, el expediente clínico fue generado correctamente`,
  icon: 'success',
  timer: 2000,        //dura 2 segundos
  showConfirmButton: false
}).then(() => {
  pdfMake.createPdf(docDefinition).print();
});
}
//objeto de librearia que contiene las funciones para crear y maniupular pdf
//create crea el documento
//docdefinition es la variable que use arriba