let tablamedico_general;
const url_base='http://129.80.196.166:8089';
document.addEventListener('DOMContentLoaded', function () {
    $.fn.dataTable.ext.errMode = 'throw'; //ocultar error del datatable
    tablamedico_general = $('#tablamedico_general').dataTable({
        "Processing": true,
        "ServerSide": true,
        "ajax": {
            "url": url_base+"/medicoGeneral",//ruta de la api
            "dataSrc": ""
        },
        "columns": [
            { "data": "IdMedico" },
            { "data": "Contraseña" },
            { "data": "apellidoMaterno" },
            { "data": "apellidoPaterno" },
            { "data": "areaMedico" },
            { "data": "generoMedico" },
            { "data": "nombreMedico" },
            { "data": "remision" },
            { "data": "telefonoMedico" },
            { "data": "usuarioMedico" },
            { "data": "accion" }
        ], columnDefs: [
            { targets: 10, visible: true },
            {
                targets: -1,
                orderable: false,
                data: null,
                render: function (data, type, row, meta) {
                    let botones = `
                    <div class="btn-group">
                    <button onClick="EditarMedicoGeneral(`+ row.IdMedico + `,'` + row.Contraseña + `','` +
                     row.apellidoMaterno + `','` + row.apellidoPaterno + `','` + row.areaMedico + `','` + 
                     row.generoMedico + `','` + row.nombreMedico + `','` + row.remision + `','` +
                     row.telefonoMedico + `','` + row.usuarioMedico + `');" class="btn btn-primary">Editar</button>
                    <button onClick="eliminarMedicoGeneral(`+ row.IdMedico + `);" class="btn btn-danger">Eliminar</button>
                    </div>`;
                    return botones; } }
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
        if (document.querySelector("#formMedicoGeneral")) { 
        var textIdMedico = getParameterByName('textIdMedico');
        var textContraseña = getParameterByName('textContraseña');
        var textapellidoMaterno = getParameterByName('textapellidoMaterno');
        var textapellidoPaterno = getParameterByName('textapellidoPaterno');
        var textareaMedico = getParameterByName('textareaMedico');
        var textgeneroMedico = getParameterByName('textgeneroMedico');
        var textnombreMedico = getParameterByName('textnombreMedico');
        var textremision = getParameterByName('textremision');
        var inttelefonoMedico = getParameterByName('intTelefonoMedico');
        var textusuarioMedico = getParameterByName('teltextusuarioMedico');
        if (textIdMedico != '' || textContraseña != '' || textapellidoMaterno != '' || textapellidoPaterno != ''
        || textareaMedico != '' || textgeneroMedico != '' || textnombreMedico != '' || textremision != '' 
        || inttelefonoMedico != '' || textusuarioMedico != '') {
            document.querySelector('#textIdMedico').value = textIdMedico;
            document.querySelector('#textContraseña').value = textContraseña;
            document.querySelector('#textapellidoMaterno').value = textapellidoMaterno;
            document.querySelector('#textapellidoPaterno').value = textapellidoPaterno;
            document.querySelector('#textareaMedico').value = textareaMedico;
            document.querySelector('#textageneroMedico').value = textgeneroMedico;
            document.querySelector('#textnombreMedico').value = textnombreMedico;
            document.querySelector('#textremision').value = textremision;
            document.querySelector('#inttelefonoMedico').value = inttelefonoMedico;
            document.querySelector('#textusuarioMedico').value = textusuarioMedico;
        }
    }
  
    }, 500);
    GuardarMedicoGeneral();
}, false);

function GuardarMedicoGeneral() {
    if (document.querySelector("#formMedicoGeneral")) { //validamos que exista el formulario
        let formMedicoGeneral = document.querySelector("#formMedicoGeneral"); //seleccionamos el formulario
        formMedicoGeneral.onsubmit = function (e) {
            e.preventDefault(); //evitamos que recargue la pagina al precionar el boton
            let textIdMedico = document.querySelector('#textIdMedico').value;
            let textContraseña = document.querySelector('#textContraseña').value;
            let textapellidoMaterno = document.querySelector('#textapellidoMaterno').value;
            let textapellidoPaterno = document.querySelector('#textapellidoPaterno').value;
            let textareaMedico = document.querySelector('#textareaMedico').value;
            let textgeneroMedico = document.querySelector('#textgeneroMedico').value;
            let textnombreMedico = document.querySelector('#textnombreMedico').value;
            let textremision = document.querySelector('#textremision').value;
            let inttelefonoMedico = document.querySelector('#inttelefonoMedico').value;
            let textusuarioMedico = document.querySelector('#textusuarioMedico').value;
            if (textContraseña == '' || textapellidoMaterno == '') {
                let error = document.getElementById('alertError');
                error.innerHTML = 'Todos los campos son obligatorios.'
                error.style.display = 'flex';
                return false; }
            let request = (window.XMLHttpRequest) ?
                new XMLHttpRequest() :
                new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = url_base+'/medicoGeneral'; //rutas api metodo post
            let json = JSON.stringify({ textIdMedico: textIdMedico, textContraseña: textContraseña,
                 textapellidoMaterno: textapellidoMaterno, textapellidoPaterno:textapellidoPaterno, textareaMedico:textareaMedico,
                 textgeneroMedico:textgeneroMedico, textnombreMedico:textnombreMedico,  textremision:textremision, 
                 inttelefonoMedico:inttelefonoMedico, textusuarioMedico:textusuarioMedico, }) //creamos un json
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(json);
            request.onreadystatechange = function () {
                if (request.status == 200) {
                    let exito = document.getElementById('alertSuccess');  //mensajes de exito
                    exito.innerHTML = 'Muy Bien, Se Guardo un Medico General Correctamente.'
                    exito.style.display = 'flex';
                    window.location.href = "/Vista/medicoGeneral.html";
                } else {
                    let error = document.getElementById('alertError');  //mensajes de error
                    error.innerHTML = 'Error !! No se pudo Guardar el Medico General'
                    error.style.display = 'flex';
                    return false;
                }
                return false;
            }
        }
    }
}

function EditarMedicoGeneral(textIdMedico,textContraseña,textapellidoMaterno,textapellidoPaterno,textareaMedico,
    textgeneroMedico,textnombreMedico,textremision,inttelefonoMedico,textusuarioMedico){
    window.location.href = "/Vista/nuevoMedicoGeneral.html?textIdMedico=" + textIdMedico + "&textContraseña=" + textContraseña +  
            "&textapellidoMaterno=" + textapellidoMaterno + "&textapellidoPaterno=" + textapellidoPaterno + 
            "&textareaMedico=" + textareaMedico + "&textgeneroMedico=" + textgeneroMedico + 
            "&textnombreMedico=" + textnombreMedico + "&textremision=" + textremision + 
            "&inttelefonoMedico=" + inttelefonoMedico + "&textusuarioMedico=" + textusuarioMedico;
}
function eliminarProv(textIdMedico){
        window.confirm("Esta seguro de Eliminar este Medico General?");
        let request = (window.XMLHttpRequest) ?
            new XMLHttpRequest() :
            new ActiveXObject('Microsoft.XMLHTTP');
        let ajaxUrl = 'http://localhost:8089/medicoGeneral/' + textIdMedico; //rutas api metodo post
        request.open("DELETE", ajaxUrl);
        request.setRequestHeader("Accept", "*/*");
        request.setRequestHeader("Content-Type", "application/json");
        request.send();
        request.onreadystatechange = function () {
            if (request.status === 200) {
                let error = document.getElementById('alertSuccessmenu');  //mensajes de error
                error.innerHTML = 'Muy Bien , Medico General Eliminado'
                error.style.display = 'flex';
                Window.confirm('Medico General Eliminado');
                window.location.reload();
            }else{
                let error = document.getElementById('alertErrormenu');  //mensajes de error
                error.innerHTML = 'Error !! No se pudo Eliminar el Medico General'
                error.style.display = 'flex';    
            }
            return false;  
       }
    
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}