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
document.querySelector("#btnVolverAlingreso").addEventListener("click", VolverAlIngreso);
document.querySelector("#btnIngresoGeneral").addEventListener("click", IngresoGeneral);
document.querySelector("#btnRegistroToIngreso").addEventListener("click", RegistroToIngreso);
document.querySelector("#Registro").addEventListener("click", Registro);
document.querySelector("#btnImagenAnterior").addEventListener("click", ImagenAnterior);
document.querySelector("#btnImagenSiguiente").addEventListener("click", ImagenSiguiente);
document.querySelector("#btnRegistrarImportadores").addEventListener("click", RegistroDeImportadores);
document.querySelector("#btnLogoutImportador").addEventListener("click", LogoutImportador);
document.querySelector("#btnMenuImportadorToSolicitudCarga").addEventListener("click", MenuImportadorToSolicitudCarga);
document.querySelector("#btnMenuImportadorToSolicitudesPendientes").addEventListener("click", ImportadorToSolicitudesPendientes);
document.querySelector("#btnMenuImportadorToInformacionEstadistica").addEventListener("click", MenuImportadorToInformacionEstadistica);
document.querySelector("#btnSolicitudCargaToMenuImportador").addEventListener("click", SolicitudCargaToMenuImportador);
document.querySelector("#btnAccionarCargaImportador").addEventListener("click", AccionarCargaToMenuImportador);
document.querySelector("#btnSolicitudesPendientesToMenuImportador").addEventListener("click", SolicitudesPendientesToMenuImportador);
document.querySelector("#btnInformacionEstadisticaToMenuImportador").addEventListener("click", InformacionEstadisticaToMenuImportador);
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
document.querySelector("#btnVerBuquesToMenuEmpresa").addEventListener("click", ManifiesToMenuEmpresa);
document.querySelector("#btnManifiesToMenuEmpresa").addEventListener("click", VerBuquesToMenuEmpresa);
document.querySelector("#btnVerificarCargasPeligrosas").addEventListener("click", VerificarCargasPeligrosas);
document.querySelector("#btnPeligrosaToManifiesto").addEventListener("click", PeligrosaToManifiesto);

let contadorImportador=0
let soyImportador=0
let cantidadDeSolicitudes=0
let cantidadDeEmpresas=0
let usuarioIngresado=""
let contadorImagenes=0

class Empresa{constructor(unNombre,unUsuario,unaContraseña){
    this.idEmpresa=cantidadDeEmpresas;
    this.nombreEmpresa=unNombre;
    this.usuarioEmpresa=unUsuario;
    this.contraseñaEmpresa=unaContraseña;
    cantidadDeEmpresas++
    }
}

class Importador{constructor(unNombre,unUsuario,unaContraseña,unaFoto){
    this.idImportadores=contadorImportador
    this.nombreImportador=unNombre;
    this.usuarioImportador=unUsuario;
    this.contraseñaimportador=unaContraseña;
    this.fotoImportador=unaFoto;
    this.estadoImportador="habilitado"
    contadorImportador++
    }
}

class solicitud {constructor (cantidadDeSolicitudes,unaMercaderia,unaDescripcion,unPuertoOrigen,unaCantidadContenedores){
    this.id= cantidadDeSolicitudes
    this.tipoMercaderia=unaMercaderia
    this.descripcion=unaDescripcion
    this.puertoOrigen=unPuertoOrigen
    this.cantidadContenedores=unaCantidadContenedores
    this.estado ="pendiente"
    this.idEmpresas=null
    this.idViaje=null
    cantidadDeSolicitudes++
    }
}

let listaEmpresas= new Array()
let listaImportadores= new Array()
let listaSolicitudes= new Array()
let imagenesUsuario = ["/HTML/ejemploimagenimg/sinfoto.jpg", "/HTML/ejemploimagenimg/1.jpg", "/HTML/ejemploimagenimg/2.jpg", "/HTML/ejemploimagenimg/3.jpg", "/HTML/ejemploimagenimg/4.jpg", "/HTML/ejemploimagenimg/5.jpg", "/HTML/ejemploimagenimg/6.jpg", "/HTML/ejemploimagenimg/7.jpg", "/HTML/ejemploimagenimg/8.jpg", "/HTML/ejemploimagenimg/9.jpg", "/HTML/ejemploimagenimg/10.jpg", "/HTML/ejemploimagenimg/11.jpg"]
contadorImagenes=0


let empresa1= new Empresa("FahrmutCompany","fahrmut","Ort22");
let empresa2= new Empresa("BooBooCompany","booboo","Ort22");
let empresa3= new Empresa("LicanCompany","licantropiano","Ort22");
let empresa4= new Empresa("AlfitorexCompany","alfitorex","Ort22");
listaEmpresas.push(empresa1);
listaEmpresas.push(empresa2);
listaEmpresas.push(empresa3);
listaEmpresas.push(empresa4);

let importador1= new Importador("Matias","mati","Ort22","/HTML/ejemploimagenimg/1.jpg");
let importador2= new Importador("Hatsujikan","criterio","Ort22","/HTML/ejemploimagenimg/2.jpg");
let importador3= new Importador("Kuky","kira","Ort22","/HTML/ejemploimagenimg/3.jpg");
let importador4= new Importador("DSonic","ludicolo","Ort22","/HTML/ejemploimagenimg/4.jpg");
listaImportadores.push(importador1);
listaImportadores.push(importador2);
listaImportadores.push(importador3);
listaImportadores.push(importador4);

let solicitud1= new solicitud(cantidadDeSolicitudes,"Arroz","Arroz estilo japones","Puerto Osaka",3)
let solicitud2= new solicitud(cantidadDeSolicitudes,"Fideos","Fideos estilo japones","Puerto Osaka",2)
let solicitud3= new solicitud(cantidadDeSolicitudes,"Mochi","Mochi japones","Puerto Osaka",1)
let solicitud4= new solicitud(cantidadDeSolicitudes,"Dumplings","Dumpling japoneses","Puerto Osaka",5)
listaSolicitudes.push(solicitud1,solicitud2,solicitud3,solicitud4)
listaSolicitudes[0].idEmpresas=listaEmpresas[0].idEmpresa
listaSolicitudes[1].idEmpresas=listaEmpresas[1].idEmpresa
listaSolicitudes[2].idEmpresas=listaEmpresas[2].idEmpresa
listaSolicitudes[3].idEmpresas=listaEmpresas[3].idEmpresa




function validarClave(unaClave){
    let valida= true;
    if (unaClave.length<5){
        alert ("La clave debe tener al menos 5 caracteres") 
        valida= false}
    if (contarMayusculas(unaClave)<1){
        alert ("La clave debe tener al menos una Mayúsucula")
        valida= false
    }
    if (contarMinusculas(unaClave)<1){
        alert ("La clave debe tener al menos una Minúsucula")
        valida= false
    }
    if (contarNumeros(unaClave)<1){
        alert ("La clave debe tener al menos un Número")
        valida= false}
    return valida
}

function validarContraseña(contraseña,unUsuario){
        if(soyImportador==0){
            for(let i in listaEmpresas){
                if (listaEmpresas[i].usuarioEmpresa==unUsuario){
                    let empresaIngresada=listaEmpresas[i].contraseñaEmpresa
                    if(empresaIngresada==contraseña){return true}
                }
            }
        }
        else{
            for(let i in listaImportadores){
                if (listaImportadores[i].usuarioImportador==unUsuario){
                    let importadorIngresado=listaImportadores[i].contraseñaimportador
                    if(importadorIngresado==contraseña){return true}
                }
            }
        }
    }

function VerificarUsuario(unUsuario){
    for(let i in listaEmpresas){
        let empresaIngresada=listaEmpresas[i].usuarioEmpresa
        if(empresaIngresada==unUsuario){return true}
    }
    for(let i in listaImportadores){
        let importadorIngresado=listaImportadores[i].usuarioImportador
        if(importadorIngresado==unUsuario){return true}
    }
}

function contarMayusculas(texto){
    let cantidadMayusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toUpperCase())
         && (isNaN(texto.charAt(i)))) {
            cantidadMayusculas++
        }
    }
    return cantidadMayusculas 
}

function contarMinusculas(texto){
    let cantidadMinusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toLowerCase()) 
        && (isNaN(texto.charAt(i)))){
            cantidadMinusculas++ 
        }
    }
    return cantidadMinusculas
}
function contarNumeros(texto){
    let cantidadNumeros=0
    for (let i=0;i<texto.length;i++){
        if (!isNaN(texto.charAt(i))){
            cantidadNumeros++
        }
    }
    return cantidadNumeros 
}

function IngresarComoEmpresa(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="block"
}

function IngresarComoImportador(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="block"
    document.querySelector("#IngresarARegistro").style.display="block"
    soyImportador=1
}

function VolverAlIngreso(){
    inicio()
}

function IngresoGeneral(){
    ocultarTodo()
    let name=document.querySelector("#txtNombreDeUsuario").value
    name=name.toLowerCase()
    let password=document.querySelector("#txtContraseñaIngreso").value

    unaContra=validarContraseña(password,name)

    if((unaContra==true)&&(soyImportador==0)){
        for(let i in listaEmpresas){
            let empresaIngresada=listaEmpresas[i].usuarioEmpresa
            console.log(name)
            if(empresaIngresada==name){
                usuarioIngresado=listaEmpresas[i]
                ocultarTodo()
                document.querySelector("#MenuEmpresa").style.display="block"
                document.querySelector("#msgIdImportadorlogueado").innerHTML=listaImportadores[i].nombreEmpresa}
        }
    }
    else {if ((unaContra==true)&&(soyImportador==1)){
            for(let i in listaImportadores){
            let importadorIngresado=listaImportadores[i].usuarioImportador
                if(importadorIngresado==name){
                    usuarioIngresado=listaImportadores[i]
                    ocultarTodo()
                    document.querySelector("#MenuImportador").style.display="block"
                    document.querySelector("#msgIdImportadorlogueado").innerHTML=listaImportadores[i].nombreImportador
                    document.querySelector("#imgActual").src=listaImportadores[i].fotoImportador
                    document.querySelector("#msgEstadoImportador").innerHTML=listaImportadores[i].estadoImportador}
            }
        }
            
            else {alert("Datos invalidos")
                document.querySelector("#txtNombreDeUsuario").value=""
                document.querySelector("#txtContraseñaIngreso").value=""
                inicio()
                soyImportador=0}}
}
        

function RegistroToIngreso(){
    inicio()
}

function existeUsuario(unUsuario){
    for (let i in listaImportadores){
        if (listaImportadores[i].usuarioImportador==unUsuario){
            return true
        }
    }
    for (let i in listaEmpresas){
        if (listaEmpresas[i].usuarioEmpresa==unUsuario){
            return true
        }
    }
    return false
}

function Registro(){
   ocultarTodo()
   document.querySelector("#RegistrarImportador").style.display="block"
}

function ImagenAnterior(){
    if (contadorImagenes > 0) {
        contadorImagenes--
        ruta=imagenesUsuario[contadorImagenes]
        document.querySelector("#imgImagenImportador").src = ruta
    } else {
        contadorImagenes = 11
        document.querySelectorAll("#flechaizq").disable = true
    }
}

function ImagenSiguiente(){
    
    if (contadorImagenes < 11) {
        contadorImagenes++
        ruta=imagenesUsuario[contadorImagenes]
        document.querySelector("#imgImagenImportador").src =ruta
    } else {
        contadorImagenes = 0
        document.querySelectorAll("#flechader").disable = true
    }
}

function RegistroDeImportadores(){
    let nombre=document.querySelector("#txtNombreImportador").value;
    let usuario=document.querySelector("#txtIDImportador").value;
    let contraseña=document.querySelector("#txtContraseñaImportador").value;
    let confirmarContraseña=document.querySelector("#txtconfirmarContraseña").value;
    let foto=document.querySelector("#imgImagenImportador").value;
    if(existeUsuario(usuario)==false){
        if(validarClave(contraseña)==true){
            if (contraseña==confirmarContraseña){
                let  importadorNuevo= new Importador(nombre,usuario,contraseña,foto);
                listaImportadores.push(importadorNuevo);
                alert("Usuario registrado exitosamente")
                inicio()}

            else{alert("Las contraseñas deben coicidir")}
        }
    }
    else{alert ("Nombre de usuario ya utilizado")}

}

function LogoutImportador(){
    inicio()
    document.querySelector("#txtNombreDeUsuario").value=""
    document.querySelector("#txtContraseñaIngreso").value=""
    usuarioIngresado=""
    contadorImagenes=0
}

function MenuImportadorToSolicitudCarga(){
    ocultarTodo()
    document.querySelector("#CrearSolicitudCarga").style.display="block"
}

function ImportadorToSolicitudesPendientes(){
    ocultarTodo()
    document.querySelector("#ConsultarSolicitudesPendientes").style.display="block"
}

function MenuImportadorToInformacionEstadistica(){
    ocultarTodo()
    document.querySelector("#InformacionEstadistica").style.display="block"
}

function SolicitudCargaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function SolicitudesPendientesToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function AccionarCargaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function InformacionEstadisticaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function ConfirmarCancelacion(){
    ocultarTodo()
    ImportadorToSolicitudesPendientes()
}

function CancelarCancelacion(){
    ocultarTodo()
    ImportadorToSolicitudesPendientes()
}

function LogoutEmpresa(){
    inicio()
    document.querySelector("#txtNombreDeUsuario").value=""
    document.querySelector("#txtContraseñaIngreso").value=""
    usuarioIngresado=""
}

function MenuEmpresaToCrearViaje(){
    ocultarTodo()
    document.querySelector("#CrearViajeDeUnBuque").style.display="block"
}

function MenuEmpresaToAsignar(){
    ocultarTodo()
    document.querySelector("#AsignarBuque").style.display="block"
}

function MenuEmpresaToRollover(){
    ocultarTodo()
    document.querySelector("#RolloverDeCarga").style.display="block"
}

function MenuEmpresaToVerBuques(){
    ocultarTodo()
    document.querySelector("#BuquesAsignados").style.display="block"
}

function CrearViajeToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function AsignarToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function RolloverToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function ManifiesToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function VerBuquesToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function CrearViajeBuque(){

}

function AsignarViajeBuque(){

}

function Rollover(){

}

function VerificarCargasPeligrosas(){

}

function PeligrosaToManifiesto(){

}
