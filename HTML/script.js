inicio ()

function inicio(){
    ocultarTodo()
    document.querySelector("#PantallaDeInicio").style.display="block"
}

function ocultarTodo(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="none"
    document.querySelector("#IngresarARegistro").style.display="none"
    document.querySelector("#RegistrarImportador").style.display="none"
    document.querySelector("#MenuImportador").style.display="none"
    document.querySelector("#CrearSolicitudCarga").style.display="none"
    document.querySelector("#ConsultarSolicitudesPendientes").style.display="none"
    document.querySelector("#CancelarSolicitudCarga").style.display="none"
    document.querySelector("#InformacionEstadistica").style.display="none"
    document.querySelector("#MenuEmpresa").style.display="none"
    document.querySelector("#CrearViajeDeUnBuque").style.display="none"
    document.querySelector("#AsignarBuque").style.display="none"
    document.querySelector("#RolloverDeCarga").style.display="none"
    document.querySelector("#BuquesAsignados").style.display="none"
    document.querySelector("#ManifiestoDeCarga").style.display="none"
    document.querySelector("#ListaDeCargaPeligrosa").style.display="none"
}

document.querySelector("#btnIngresarComoEmpresa").addEventListener("click", IngresarComoEmpresa);
document.querySelector("#btnIngresarComoImportador").addEventListener("click", IngresarComoImportador);
document.querySelector("#btnRegistrarImportadores").addEventListener("click", RegistrarImportadores);
document.querySelector("#btnIngresoGeneral").addEventListener("click", IngresoGeneral);
document.querySelector("#Registro").addEventListener("click", IngresoGeneral);
document.querySelector("#btnLogoutImportador").addEventListener("click", LogoutImportador);
document.querySelector("#btnRegistrarImportadores").addEventListener("click", RegistrarImportadores);
document.querySelector("#btnMenuImportadorToSolicitudCarga").addEventListener("click", MenuImportadorToSolicitudCarga);
document.querySelector("#btnMenuImportadorToSolicitudesPendientes").addEventListener("click", ImportadorToSolicitudesPendientes);
document.querySelector("#btnMenuImportadorToInformacionEstadistica").addEventListener("click", MenuImportadorToInformacionEstadistica);
document.querySelector("#btnSolicitudCargaToMenuImportador").addEventListener("click", SolicitudCargaToMenuImportador);
document.querySelector("#btnSolicitudesPendientesToMenuImportador").addEventListener("click", SolicitudesPendientesToMenuImportador);
document.querySelector("#btnInformacionEstadisticaToMenuImportador").addEventListener("click", InformacionEstadisticaToMenuImportador);
document.querySelector("#btnAccionarCargaImportador").addEventListener("click", AccionarCargaImportador);
document.querySelector("#btnConfirmarCancelacion").addEventListener("click", ConfirmarCancelacion);
document.querySelector("#btnCancelarCancelacion").addEventListener("click", CancelarCancelacion);
document.querySelector("#btnLogoutEmpresa").addEventListener("click", LogoutEmpresa);
document.querySelector("#btnMenuEmpresaToCrearViaje").addEventListener("click", MenuEmpresaToCrearViaje);
document.querySelector("#btnMenuEmpresaToAsignar").addEventListener("click", MenuEmpresaToAsignar);
document.querySelector("#btnMenuEmpresaToRollover").addEventListener("click", MenuEmpresaToRollover);
document.querySelector("#btnMenuEmpresaToVerBuques").addEventListener("click", MenuEmpresaToVerBuques);
document.querySelector("#btnCrearViajeToMenuEmpresa").addEventListener("click", CrearViajeToMenuEmpresa);
document.querySelector("#btnCrearViajeBuque").addEventListener("click", CrearViajeBuque);
document.querySelector("#btnAsignarToMenuEmpresa").addEventListener("click", AsignarToMenuEmpresa);
document.querySelector("#btnAsignarViajeBuque").addEventListener("click", AsignarViajeBuque);
document.querySelector("#btnRolloverToMenuEmpresa").addEventListener("click", RolloverToMenuEmpresa);
document.querySelector("#btnRollover").addEventListener("click", Rollover);
document.querySelector("#btnManifiesToMenuEmpresa").addEventListener("click", ManifiesToMenuEmpresa);
document.querySelector("#btnVerBuquesToMenuEmpresa").addEventListener("click", VerBuquesToMenuEmpresa);
document.querySelector("#btnVerificarCargasPeligrosas").addEventListener("click", VerificarCargasPeligrosas);
document.querySelector("#btnPeligrosaToManifiesto").addEventListener("click", PeligrosaToManifiesto);

let contadorImportadores=1
let listaEmpresas= new Array()
let listaImportadores= new Array()

class Empresa{constructor(unNombre,unUsuario,unaContraseña){
    this.nombreEmpresa=unNombre;
    this.usuarioEmpresa=unUsuario;
    this.contraseñaEmpresa=unaContraseña;
    }
}

class Importador{constructor(unNombre,unUsuario,unaContraseña,unaFoto){
    this.nombreImportador=unNombre;
    this.usuarioImportador=unUsuario;
    this.contraseñaimportador=unaContraseña;
    this.fotoImportador=unaFoto;
    contadorImportador++

    }
}

let empresa1= new Empresa("FahrmutCompany","Fahrmut","Ort22");
let empresa2= new Empresa("BooBooCompany","BooBoo","Ort22");
let empresa3= new Empresa("LicanCompany","Licantropiano","Ort22");
let empresa4= new Empresa("AlfitorexCompany","Alfitorex","Ort22");
listaEmpresas.push(empresa1)
listaEmpresas.push(empresa2)
listaEmpresas.push(empresa3)
listaEmpresas.push(empresa4)


