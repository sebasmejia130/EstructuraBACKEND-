/* $(document).ready( function () {
    $('#tablaProducto').DataTable();
} ); */

let tablepaciente;
const url_base='http://129.80.196.166:8089';
document.addEventListener('DOMContentLoaded', function () {
    $.fn.dataTable.ext.errMode = 'throw'; //ocultar error del datatable
    tableProducto = $('#tablapaciente').dataTable({
        "Processing": true,
        "ServerSide": true,
        "ajax": {
            "url": url_base+"/paciente",//ruta de la api
            "dataSrc": ""
        },
        "columns": [
            { "data": "textIdPaciente" },
            { "data": "textApellidoMaternoPaciente" },
            { "data": "textApellidoPaternoPaciente" },
            { "data": "textCiudadResidenciaPaciente" },
            { "data": "intCodigoAfiliacion" },
            { "data": "textContraseñaPaciente" },
            { "data": "textDireccionResidenciaPaciente" },
            { "data": "textEmailPaciente" },
            { "data": "textFechaNacimientoPaciente" },
            { "data": "textGeneroPaciente" },
            { "data": "textNombrePaciente" },
            { "data": "intTelefonoPaciente" },
            { "data": "textUsuarioPaciente" },
            { "data": "accion" }
        ],
        columnDefs: [
            { targets: 13, visible: true },
            {
                targets: -1,
                orderable: false,
                data: null,
                render: function (data, type, row, meta) {
                    let botones = `
                    <div class="btn-group">
                    <button onClick="EditarPaciente(`+ row.textIdPaciente + `,'` + row.textApellidoMaternoPaciente + `',` 
                    + row.textApellidoPaternoPaciente + `',` + row.textCiudadResidenciaPaciente + `',` + row.intCodigoAfiliacion + `',` + 
                    row.textContraseñaPaciente + `',` + row.textDireccionResidenciaPaciente + `',` + row.textEmailPaciente + `',` + 
                    row.textFechaNacimientoPaciente + `',` + row.textGeneroPaciente + `',` + 
                    row.textNombrePaciente + `',` + row.intTelefonoPaciente + `',` + row.textUsuarioPaciente + `);" class="btn btn-primary">Editar</button>
                    <button onClick="eliminarPaciente(`+ row.textIdPaciente + `);" class="btn btn-danger">Eliminar</button>
                    </div>`;
                    return botones;
                }
            }
        ],
        'dom': 'lBfrtip',
        "resonsieve": "true",
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [[0, "asc"]]
    });


}, false);

/* function EditarProdu() {
    alert("Editar Producto");
}

function eliminarProd() {
    alert("Eliminar Producto");
}
$("#tablaProducto").Database(); */



window.addEventListener('load', function () {
    setTimeout(() => {
        if (document.querySelector("#formPaciente")) { 
        var textIdPaciente = getParameterByName('textIdPaciente');
        var textApellidoMaternoPaciente = getParameterByName('textApellidoMaternoPaciente');
        var textApellidoPaternoPaciente = getParameterByName('textApellidoPaternoPaciente');
        var textCiudadResidenciaPaciente = getParameterByName('textCiudadResidenciaPaciente');
        var intCodigoAfiliacion = getParameterByName('intCodigoAfiliacion');
        var textContraseñaPaciente = getParameterByName('textContraseñaPaciente');
        var textDireccionResidenciaPaciente = getParameterByName('textDireccionResidenciaPaciente');
        var textEmailPaciente = getParameterByName('textEmailPaciente');
        var textFechaNacimientoPaciente = getParameterByName('textFechaNacimientoPaciente');
        var textGeneroPaciente = getParameterByName('textGeneroPaciente');
        var textNombrePaciente = getParameterByName('textNombrePaciente');
        var intTelefonoPaciente = getParameterByName('intTelefonoPaciente');
        var textUsuarioPaciente = getParameterByName('textUsuarioPaciente');
        if (textIdPaciente != null || textIdPaciente != '' || textApellidoMaternoPaciente != '') {
            document.querySelector('#textIdPaciente').value = textIdPaciente;
            document.querySelector('#textApellidoMaternoPaciente').value = textApellidoMaternoPaciente;
            document.querySelector('#textApellidoPaternoPaciente').value = textApellidoPaternoPaciente;
            document.querySelector('#textCiudadResidenciaPaciente').value = textCiudadResidenciaPaciente;
            document.querySelector('#intCodigoAfiliacion').value = intCodigoAfiliacion;
            document.querySelector('#textContraseñaPaciente').value = textContraseñaPaciente;
            document.querySelector('#textDireccionResidenciaPaciente').value = textDireccionResidenciaPaciente;
            document.querySelector('#textEmailPaciente').value = textEmailPaciente;
            document.querySelector('#textFechaNacimientoPaciente').value = textFechaNacimientoPaciente;
            document.querySelector('#textGeneroPaciente').value = textGeneroPaciente;
            document.querySelector('#textNombrePaciente').value = textNombrePaciente;
            document.querySelector('#intTelefonoPaciente').value = intTelefonoPaciente;
            document.querySelector('#textUsuarioPaciente').value = textUsuarioPaciente;
        }
    }
        GuardarPaciente();
    }, 500);
}, false);
function GuardarPaciente() {
    if (document.querySelector("#formPaciente")) { //validamos que exista el formulario
        let formPaciente = document.querySelector("#formPaciente"); //seleccionamos el formulario
        formPaciente.onsubmit = function (e) {
            e.preventDefault(); //evitamos que recargue la pagina al precionar el boton
            let textIdPaciente = document.querySelector('#textIdPaciente').value;
            let textApellidoMaternoPaciente = document.querySelector('#textApellidoMaternoPaciente').value;
            let textApellidoPaternoPaciente = document.querySelector('#textApellidoPaternoPaciente').value;
            let textCiudadResidenciaPaciente = document.querySelector('#textCiudadResidenciaPaciente').value;
            let intCodigoAfiliacion = document.querySelector('#intCodigoAfiliacion').value;
            let textContraseñaPaciente = document.querySelector('#textContraseñaPaciente').value;
            let textDireccionResidenciaPaciente = document.querySelector('#textDireccionResidenciaPaciente').value;
            let textEmailPaciente = document.querySelector('#textEmailPaciente').value;
            let textFechaNacimientoPaciente = document.querySelector('#textFechaNacimientoPaciente').value;
            let textGeneroPaciente = document.querySelector('#textGeneroPaciente').value;
            let textNombrePaciente = document.querySelector('#textNombrePaciente').value;
            let intTelefonoPaciente = document.querySelector('#intTelefonoPaciente').value;
            let textUsuarioPaciente = document.querySelector('textUsuarioPaciente').value;

            if (textApellidoMaternoPaciente == '' || textApellidoPaternoPaciente == '') {
                let error = document.getElementById('alertError');
                error.innerHTML = 'Todos los campos son obligatorios.'
                error.style.display = 'flex';
                return false;
            }
            let request = (window.XMLHttpRequest) ?
                new XMLHttpRequest() :
                new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = url_base+'/paciente'; //rutas api metodo post
            let json = JSON.stringify({ textIdPaciente: textIdPaciente, textApellidoMaternoPaciente: textApellidoMaternoPaciente, 
                textApellidoPaternoPaciente: textApellidoPaternoPaciente, textCiudadResidenciaPaciente: textCiudadResidenciaPaciente, 
                intCodigoAfiliacion: intCodigoAfiliacion, textContraseñaPaciente: textContraseñaPaciente, 
                textDireccionResidenciaPaciente: textDireccionResidenciaPaciente, textEmailPaciente: textEmailPaciente, 
                textFechaNacimientoPaciente: textFechaNacimientoPaciente, textGeneroPaciente: textGeneroPaciente, textNombrePaciente: textNombrePaciente, 
                intTelefonoPaciente: intTelefonoPaciente, textUsuarioPaciente: textUsuarioPaciente }) //creamos un json
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(json);
            request.onreadystatechange = function () {
                if (request.status == 200) {
                    let exito = document.getElementById('alertSuccess');  //mensajes de exito
                    exito.innerHTML = 'Muy Bien, Se Guardo un Paciente Correctamente.'
                    exito.style.display = 'flex';
                    window.location.href = "/Vista/paciente.html";
                } else {
                    let error = document.getElementById('alertError');  //mensajes de error
                    error.innerHTML = 'Error !! No se puedo Guardar el Paciente'
                    error.style.display = 'flex';
                    return false;
                }
                return false;
            }
        }
    }
}
function EditarPaciente(textIdPaciente, textApellidoMaternoPaciente, textApellidoPaternoPaciente, textCiudadResidenciaPaciente, 
    intCodigoAfiliacion, textContraseñaPaciente, textDireccionResidenciaPaciente, textEmailPaciente, 
    textFechaNacimientoPaciente, textGeneroPaciente, textNombrePaciente, intTelefonoPaciente, textUsuarioPaciente) {
    window.location.href = "/Vista/nuevoPaciente.html?textIdPaciente=" + textIdPaciente + "&textApellidoMaternoPaciente=" + textApellidoMaternoPaciente + "&textApellidoPaternoPaciente=" + textApellidoPaternoPaciente + 
    "&textCiudadResidenciaPaciente=" + textCiudadResidenciaPaciente + "&intCodigoAfiliacion=" + intCodigoAfiliacion + "&textContraseñaPaciente=" + textContraseñaPaciente + "&textDireccionResidenciaPaciente=" + textDireccionResidenciaPaciente + 
    "&textEmailPaciente=" + textEmailPaciente + "&textFechaNacimientoPaciente=" + textFechaNacimientoPaciente + "&textGeneroPaciente=" + textGeneroPaciente + "&textNombrePaciente=" + textNombrePaciente + 
    "&intTelefonoPaciente=" + intTelefonoPaciente + "&textUsuarioPaciente=" + textUsuarioPaciente;
}
function eliminarProd(textIdPaciente) {
    window.confirm("Esta seguro de Eliminar este Paciente");
    let request = (window.XMLHttpRequest) ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    let ajaxUrl = 'http://129.80.196.166:8089/paciente/' + textIdPaciente; //rutas api metodo post
    request.open("DELETE", ajaxUrl);
    request.setRequestHeader("Accept", "*/*");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    request.onreadystatechange = function () {
        if (request.status === 4) {
            let error = document.getElementById('alertSuccessmenu');  //mensajes de error
            error.innerHTML = 'Muy Bien , Paciente Eliminado'
            error.style.display = 'flex';
            window.location.reload();
        }else{
            let error = document.getElementById('alertErrormenu');  //mensajes de error
            error.innerHTML = 'Error !! No se puedo Eliminar el Paciente'
            error.style.display = 'flex';
            window.location.reload();
        }
        return false;  
   }
}

$("#tablapaciente").DataTable();
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}