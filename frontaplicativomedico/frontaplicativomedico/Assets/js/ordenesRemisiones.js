let tableordenesremision;
const url_base='http://129.80.196.166:8089';
document.addEventListener('DOMContentLoaded', function () {
    $.fn.dataTable.ext.errMode = 'throw'; //ocultar error del datatable
    tableordenesremision = $('#tablaordenesremision').dataTable({
        "Processing": true,
        "ServerSide": true,
        "ajax": {
            "url": url_base+"/ordenesRemisiones",//ruta de la api
            "dataSrc": ""
        },
        "columns": [
            { "data": "orden_id_pk" },
            { "data": "fecha_procedimiento" },
            { "data": "lugar_procedimiento" },
            { "data": "tipo_examen" },
            { "data": "inv_idmedico_fk" },
            { "data": "orden_idpaciente_fk" }
        ], columnDefs: [
            { targets: 5, visible: true },
            { targets: -1,
                orderable: false,
                data: null,
                render: function (data, type, row, meta) {
                    let botones = `
                    <div class="btn-group">
                        <button onClick="ActualizarOrdenesRemisiones(`+ row.orden_id_pk + `,`+ 
                        row.fecha_procedimiento + `,`+ row.lugar_procedimiento + `,`+ row.tipo_examen + `,`+ 
                        row.inv_idmedico_fk + `,`+ row.orden_idpaciente_fk + `);" class="btn btn-danger">TipoExamen</button>
                    </div>`;
                    return botones;}}
        ],
        'dom': 'lBfrtip',
        "resonsieve": "true",
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [[0, "asc"]]
    });
}, false);

window.addEventListener('load', function () {
    setTimeout(() => {
        if (document.querySelector("#formOrdenesRemisiones")) { 
        var intIdOrden = getParameterByName('intIdOrden');
        var textFechaProcedimiento = getParameterByName('textFechaProcedimiento');
        var textLugarProcedimiento = getParameterByName('textLugarProcedimiento');
        var textTipoExamen = getParameterByName('textTipoExamen');
        var intIdMedico = getParameterByName('intIdMedico');
        var intIdPaciente = getParameterByName('intIdPaciente');
        if (intIdOrden != null ) {
            document.querySelector('#intIdOrden').value = intIdOrden;
            document.querySelector('#textFechaProcedimiento').value = textFechaProcedimiento;
            document.querySelector('#textLugarProcedimiento').value = textLugarProcedimiento;
            document.querySelector('#textTipoExamen').value = textTipoExamen;
            document.querySelector('#intIdMedico').value = intIdMedico;
            document.querySelector('#intIdPaciente').value = intIdPaciente;
        }
        Actualizar();
    }
    }, 500);
    GuardarOrdenesRemisiones();
}, false);

function GuardarOrdenesRemisiones() {
    if (document.querySelector("#formOrdenesRemisiones")) { //validamos que exista el formulario
        let formOrdenesRemisiones = document.querySelector("#formOrdenesRemisiones"); //seleccionamos el formulario
        formOrdenesRemisiones.onsubmit = function (e) {
            e.preventDefault(); //evitamos que recargue la pagina al precionar el boton
            let intIdOrden = document.querySelector('#intIdOrden').value;
            let textFechaProcedimiento = document.querySelector('#textFechaProcedimiento').value;
            let textLugarProcedimiento = document.querySelector('#textLugarProcedimiento').value;
            let textTipoExamen = document.querySelector('#textTipoExamen').value;
            let intIdMedico = document.querySelector('#intIdMedico').value;
            let intIdPaciente = document.querySelector('#intIdPaciente').value;
            if (intIdOrden == '' || textFechaProcedimiento == '' || textLugarProcedimiento == '' || textTipoExamen == '') {
                let error = document.getElementById('alertError');
                error.innerHTML = 'Todos los campos son obligatorios.'
                error.style.display = 'flex';
                return false;
            } let request = (window.XMLHttpRequest) ?
                new XMLHttpRequest() :
                new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = url_base+'/ordenesRemisiones'; //rutas api metodo post
            let json = JSON.stringify({paciente:{textIdPaciente: parseInt(textIdPaciente)}, 
                MedicoGeneral:{TextIdMedicoGeneral:parseInt(textIdMedicoGeneral)}, 
                textFechaProcedimiento:parseInt(textFechaProcedimiento), textLugarProcedimiento: parseInt(textLugarProcedimiento) }) //creamos un json
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Accept", "*/*");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(json);
            request.onreadystatechange = function () {
                if (request.status == 200) {
                    let exito = document.getElementById('alertSuccess');  //mensajes de exito
                    exito.innerHTML = 'Muy Bien, Se Guardo la Orden Correctamente.'
                    exito.style.display = 'flex';
                    window.location.href = "/Vista/ordenesRemisiones.html";
                } else {
                    let error = document.getElementById('alertError');  //mensajes de error
                    error.innerHTML = 'Error !! No se puedo Guardar la Orden'
                    error.style.display = 'flex';
                    return false;
                }
                return false;
            }
        }
    }
}


function ActualizarOrdenesRemisiones(intIdOrden,textTipoExamen) {
    window.location.href = "/Vista/actualizarOrdenesRemisiones.html?id="+intIdOrden+"&textTipoExamen="+textTipoExamen;
               
}
function Actualizar() {
    if (document.querySelector("#formOrdenesRemisiones")) { //validamos que exista el formulario
       let formOrdenesRemisiones = document.querySelector("#formOrdenesRemisiones"); //seleccionamos el formulario
       formOrdenesRemisiones.onsubmit = function (e) {
           e.preventDefault(); //evitamos que recargue la pagina al precionar el boton
           let intIdOrden= document.querySelector('#intIdOrden').value;
           let textFechaProcedimiento= document.querySelector('#textFechaProcedimiento').value;
           let textLugarProcedimiento= document.querySelector('#textLugarProcedimiento').value;
           let textTipoExamen= document.querySelector('#textTipoExamen').value;
           let intIdMedico= document.querySelector('#intIdMedico').value;
           let intIdPaciente = document.querySelector('#intIdPaciente').value;
           if (intIdOrden == '' ||  textTipoExamen == '') {
               let error = document.getElementById('alertError');
               error.innerHTML = 'Todos los campos son obligatorios.'
               error.style.display = 'flex';
               return false;
           }
           let request = (window.XMLHttpRequest) ?
               new XMLHttpRequest() :
               new ActiveXObject('Microsoft.XMLHTTP');
           let ajaxUrl = 'http://129.80.196.166:8089/ordenesRemisiones'; //rutas api metodo post
           let json = JSON.stringify({intIdOrden:intIdOrden, textFechaProcedimiento:textFechaProcedimiento, textLugarProcedimiento:textLugarProcedimiento, 
            textTipoExamen:textTipoExamen, intIdMedico:intIdMedico, intIdPaciente:intIdPaciente }) //creamos un json
           request.open("PUT", ajaxUrl, true);
           request.setRequestHeader("Content-Type", "application/json");
           request.send(json);
           request.onreadystatechange = function () {
               if (request.status == 200) {
                   let exito = document.getElementById('alertSuccess');  //mensajes de exito
                   exito.innerHTML = 'Muy Bien, Se Actualizo la Orden Correctamente.'
                   exito.style.display = 'flex';
                   window.location.href = "/Vista/ordenesRemisiones.html";
               } else {
                   let error = document.getElementById('alertError');  //mensajes de error
                   error.innerHTML = 'Error !! No se puedo Actualizar la Orden'
                   error.style.display = 'flex';
                   return false;
               }
               return false;
           }
       }
   }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}