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
document.querySelector("#btnCancelarSolicitudesDeCarga").addEventListener("click", CancelarSolicitudesDeCarga);
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
let cantidadDeViajes=1
let fecha=""

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

class solicitud {constructor (unaMercaderia,unaDescripcion,unPuertoOrigen,unaCantidadContenedores,unoIdSolicitud){
    this.id= cantidadDeSolicitudes
    this.tipoMercaderia=unaMercaderia
    this.descripcion=unaDescripcion
    this.puertoOrigen=unPuertoOrigen
    this.cantidadContenedores=unaCantidadContenedores
    this.idSoliImportador=unoIdSolicitud
    this.estadoSolicitud="PENDIENTE"
    this.idEmpresas=null
    this.idViaje=null
    cantidadDeSolicitudes++
    }
}

class viajes {constructor (unNombreBuque,unPuertoOrigen,losContenedoresDisponibles,fechaDeLlegada){
    this.idViaje= cantidadDeViajes
    this.nombreBuque=unNombreBuque
    this.puertoOrigen=unPuertoOrigen
    this.contenedoresDisponibles=losContenedoresDisponibles
    this.estado ="disponible"
    this.date=fechaDeLlegada
    this.idEmpViaje=null
    cantidadDeViajes++
    }
} 

let listaEmpresas= new Array()
let listaImportadores= new Array()
let listaSolicitudes= new Array()
let listaViajes= new Array()
let imagenesUsuario = ["ejemploimagenimg/sinfoto.jpg", "ejemploimagenimg/1.jpg", "ejemploimagenimg/2.jpg", "ejemploimagenimg/3.jpg", "ejemploimagenimg/4.jpg", "ejemploimagenimg/5.jpg", "ejemploimagenimg/6.jpg", "ejemploimagenimg/7.jpg", "ejemploimagenimg/8.jpg", "ejemploimagenimg/9.jpg", "ejemploimagenimg/10.jpg", "ejemploimagenimg/11.jpg"]
contadorImagenes=0


let empresa1= new Empresa("FahrmutCompany","fahrmut","Ort22");
let empresa2= new Empresa("BooBooCompany","booboo","Ort22");
let empresa3= new Empresa("LicanCompany","licantropiano","Ort22");
let empresa4= new Empresa("AlfitorexCompany","alfitorex","Ort22");
listaEmpresas.push(empresa1);
listaEmpresas.push(empresa2);
listaEmpresas.push(empresa3);
listaEmpresas.push(empresa4);

let importador1= new Importador("Matias","mati","Ort22","ejemploimagenimg/1.jpg");
let importador2= new Importador("Hatsujikan","criterio","Ort22","ejemploimagenimg/2.jpg");
let importador3= new Importador("Kuky","kira","Ort22","ejemploimagenimg/3.jpg");
let importador4= new Importador("DSonic","ludicolo","Ort22","ejemploimagenimg/4.jpg");
listaImportadores.push(importador1);
listaImportadores.push(importador2);
listaImportadores.push(importador3);
listaImportadores.push(importador4);

let solicitud1= new solicitud("Carga General","Arroz estilo japones","Puerto Osaka",3,cantidadDeSolicitudes)
let solicitud2= new solicitud("Carga General","Fideos estilo japones","Puerto Osaka",2,cantidadDeSolicitudes)
let solicitud3= new solicitud("Carga Refrigerada","Mochi japones","Puerto Osaka",1,cantidadDeSolicitudes)
let solicitud4= new solicitud("Carga Refrigerada","Dumpling japoneses","Puerto Osaka",5,cantidadDeSolicitudes)
let solicitud5= new solicitud("Carga General","Activos para cosmeticos","Puerto Amsterdam",2,cantidadDeSolicitudes)
let solicitud6= new solicitud("Carga General","Envases para cosmeticos","Puerto Maiami",4,cantidadDeSolicitudes)
let solicitud7= new solicitud("Carga Peligrosa","Dinamita","Puerto Shanghai",5,cantidadDeSolicitudes)
let solicitud8= new solicitud("Carga Peligrosa","Combustible","Puerto Guangzhou",1,cantidadDeSolicitudes)
let solicitud9= new solicitud("Carga Peligrosa","Fuegos Artificiales","Puerto Guangzhou",8,cantidadDeSolicitudes)
let solicitud10= new solicitud("Carga Peligrosa","Baterias","Puerto HongKong",3,cantidadDeSolicitudes)


listaSolicitudes.push(solicitud1,solicitud2,solicitud3,solicitud4,solicitud5,solicitud6,solicitud7,solicitud8,solicitud9,solicitud10)
listaSolicitudes[0].idEmpresas=listaEmpresas[0].idEmpresa
listaSolicitudes[1].idEmpresas=listaEmpresas[1].idEmpresa
listaSolicitudes[2].idEmpresas=listaEmpresas[2].idEmpresa
listaSolicitudes[3].idEmpresas=listaEmpresas[3].idEmpresa
listaSolicitudes[4].idEmpresas=listaEmpresas[0].idEmpresa
listaSolicitudes[5].idEmpresas=listaEmpresas[1].idEmpresa
listaSolicitudes[6].idEmpresas=listaEmpresas[2].idEmpresa
listaSolicitudes[7].idEmpresas=listaEmpresas[3].idEmpresa
listaSolicitudes[8].idEmpresas=listaEmpresas[0].idEmpresa
listaSolicitudes[9].idEmpresas=listaEmpresas[1].idEmpresa


listaSolicitudes[0].idSoliImportador=listaImportadores[0].idImportadores
listaSolicitudes[1].idSoliImportador=listaImportadores[1].idImportadores
listaSolicitudes[2].idSoliImportador=listaImportadores[2].idImportadores
listaSolicitudes[3].idSoliImportador=listaImportadores[3].idImportadores
listaSolicitudes[4].idSoliImportador=listaImportadores[0].idImportadores
listaSolicitudes[5].idSoliImportador=listaImportadores[1].idImportadores
listaSolicitudes[6].idSoliImportador=listaImportadores[2].idImportadores
listaSolicitudes[7].idSoliImportador=listaImportadores[3].idImportadores
listaSolicitudes[8].idSoliImportador=listaImportadores[0].idImportadores
listaSolicitudes[9].idSoliImportador=listaImportadores[1].idImportadores



let viaje1= new viajes("Pinta","Puerto Osaka",12,"Fecha")
let viaje2= new viajes("Niña","Santa Cruz",7,"Fecha")
let viaje3= new viajes("Santa Maria","Toledo",15,"Fecha")
let viaje4= new viajes("Perla Negra","Nueva Inglaterra",24,"Fecha")
listaViajes.push(viaje1,viaje2,viaje3,viaje4)

function cargarFecha(){
    fecha=document.querySelector("#txtFecha").value
    fecha=fecha.replace("-","")
    fecha=fecha.replace("-","")
}

function mostrarFechaHoy(){
let fecha= new Date()
let anio=fecha.getFullYear()
let mes=fecha.getMonth()+1
if (mes<10) mes=`0${mes}`
let dia=fecha.getDate()
if (dia<10) dia=`0${dia}`
let mifecha=`${anio}${mes}${dia}`
return mifecha 

}

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
    let foto=document.querySelector("#imgImagenImportador").src;
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
    let seleccionarEmpresa= document.querySelector("#slcCargaIDEmpresa");
    for(let unaEmpresa of listaEmpresas){
         
        seleccionarEmpresa.innerHTML+=`<option value=${unaEmpresa.idEmpresa}> ${unaEmpresa.idEmpresa} // ${unaEmpresa.nombreEmpresa} </option>`
       
    }
}

function crearTablaSoliPendientes(){

  
    miTabla=
    `<table border="1">
        <tr>
            <th>Númmero de Viaje</th>
            <th>Tipo de Mercaderia</th>
            <th>Cantidad de Contenedores</th>
            <th>Puerto de Origen</th>
            <th>ID de la Empresa</th>
            <th>Descripción</th>
            <th>Estado</th>
        </tr>`
    
    for(let i in listaSolicitudes){
        miTabla+=
        `<tr>
        <td>${listaSolicitudes[i].id}</td>
        <td>${listaSolicitudes[i].tipoMercaderia}</td>
        <td>${listaSolicitudes[i].cantidadContenedores}</td>
        <td>${listaSolicitudes[i].puertoOrigen}</td>
        <td>${listaSolicitudes[i].idEmpresas}</td>
        <td>${listaSolicitudes[i].descripcion}</td>
        <td>${listaSolicitudes[i].estadoSolicitud}</td>
        </tr>`
    }
    
    miTabla+=`</table>`
    document.querySelector("#msgSolicitudesPendientes").innerHTML=miTabla
}

function CancelarSolicitudesDeCarga(){

    document.querySelector("#CancelarSolicitudCarga").style.display="block"
    let cancelarSolicitudPendiente= document.querySelector("#slcCancelarSolicitud");
    cancelarSolicitudPendiente.innerHTML=""
    cancelarSolicitudPendiente.innerHTML= `<option value="CancelarSolicitudSelect">Seleccionar solicitud a cancelar</option>`
    for(let i in listaSolicitudes){
        if(listaSolicitudes[i].idSoliImportador===usuarioIngresado.idImportadores){
            if(listaSolicitudes[i].estadoSolicitud==="PENDIENTE"){
                cancelarSolicitudPendiente.innerHTML+=`<option value=${listaSolicitudes[i].id}> ${listaSolicitudes[i].id} // ${listaSolicitudes[i].descripcion} </option>`}
        }
    }
}

function ImportadorToSolicitudesPendientes(){
    ocultarTodo()
    document.querySelector("#ConsultarSolicitudesPendientes").style.display="block"
    crearTablaSoliPendientes()

}

function informacionEstadisticaTabla(){
    mitablaEstadistica=
            `<table border="1">
            <tr>
                <th>Próximas llegadas</th>
                <th>Línea de carga</th>
                <th>Participación</th>
            </tr>`
    for(let i in listaViajes){
            mitablaEstadistica+= 
            `<tr>
            <td>${listaViajes[i].date}</td>
            <td>${listaViajes[i].nombreBuque}</td>
            <td>${listaViajes[i].idEmpViaje}</td>
            </tr>`
    }
    document.querySelector("#msgTablaEstadistica").innerHTML=mitablaEstadistica
}

function MenuImportadorToInformacionEstadistica(){
    ocultarTodo()
    document.querySelector("#InformacionEstadistica").style.display="block"
    let total=0
    let cancelacion=0
    for(let i in listaSolicitudes){
        if(listaSolicitudes[i].idSoliImportador===usuarioIngresado.idImportadores){
        total++
        if(listaSolicitudes[i].estadoSolicitud==="CANCELADO"){cancelacion++}}
    }
    informacionEstadisticaTabla()
    document.querySelector("#msgTotalDeCargas").innerHTML+=total
    document.querySelector("#msgPorcentajeDeCancelaciones").innerHTML+=(cancelacion*100)/total
    

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
    let mercaderia=document.querySelector("#slcCargaMercaderia").value;
    let origen=document.querySelector("#txtCargaPuerto").value;
    let cantidad=document.querySelector("#txtCargaContenedores").value;
    let idEmpr=document.querySelector("#slcCargaIDEmpresa").value;
    let descrip=parseInt(document.querySelector("#txtCargaDescripcion").value);


    let nuevaSolicitud= new solicitud(mercaderia,origen,cantidad,idEmpr,descrip,cantidadDeSolicitudes);
    listaSolicitudes.push(nuevaSolicitud);
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
    document.querySelector("#txtCargaMercaderia").value=""
    document.querySelector("#txtCargaPuerto").value=""
    document.querySelector("#txtCargaContenedores").value=""
    document.querySelector("#slcCargaIDEmpresa").value=""
    document.querySelector("#txtCargaDescripcion").value=""
}

function InformacionEstadisticaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
    document.querySelector("#msgPorcentajeDeCancelaciones").innerHTML="Porcentaje de cancelaciones: "
    document.querySelector("#msgTotalDeCargas").innerHTML="Total de Cargas: "
}

function ConfirmarCancelacion(){
    ocultarTodo()
    cancelarSolicitud=document.querySelector("#slcCancelarSolicitud").value;
    listaSolicitudes[cancelarSolicitud].estadoSolicitud="CANCELADO"
    alert("Solicitud cancelada con exito")
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
    document.querySelector("#txtNombreBuque").value=""
    document.querySelector("#txtPuertoDeOrigenNuevo").value=""
    document.querySelector("#txtCapacidadMaxima").value=""
}

function MenuEmpresaToAsignar(){
    ocultarTodo()
    document.querySelector("#AsignarBuque").style.display="block"
    let miSolicitud= document.querySelector("#slcSolicitudesPendientes");
    let misBuques= document.querySelector("#slcBuquesDisponibles");
    miSolicitud.innerHTML=`<option value="PorDefecto1">Buscar entre las solicitudes pendientes</option>`
    misBuques.innerHTML=`<option value="PorDefecto2">Buscar entre los viajes disponibles</option>`
    for(let i in listaSolicitudes){

        if(listaSolicitudes[i].estadoSolicitud==="PENDIENTE"){
            miSolicitud.innerHTML+=`<option value="${listaSolicitudes[i].id}">${listaSolicitudes[i].id} // ${listaSolicitudes[i].descripcion}</option>`
        }
    }
    for(let w in listaViajes){
        if(listaViajes[w].contenedoresDisponibles>0){
        misBuques.innerHTML+=`<option value="${listaViajes[w].idViaje}">${listaViajes[w].nombreBuque}</option>`}
        
    }
}

function MenuEmpresaToRollover(){
    ocultarTodo()
    document.querySelector("#RolloverDeCarga").style.display="block"
    let miSolicitud= document.querySelector("#slcSolicitudRollover");
    let misBuques= document.querySelector("#slcBuquesDisponibles2");
    miSolicitud.innerHTML=`<option value="PorDefecto1">Buscar entre las solicitudes confirmadas</option>`
    misBuques.innerHTML=`<option value="PorDefecto2">Buscar entre los viajes disponibles</option>`
    for(let i in listaSolicitudes){

        if((listaSolicitudes[i].estadoSolicitud==="ACEPTADA")&&(listaSolicitudes[i].idViaje!==null)){
            miSolicitud.innerHTML+=`<option value="${listaSolicitudes[i].id}">${listaSolicitudes[i].id} // ${listaSolicitudes[i].descripcion}</option>`
        }
    }
    for(let w in listaViajes){
        if(listaViajes[w].contenedoresDisponibles>0){
        misBuques.innerHTML+=`<option value="${listaViajes[w].idViaje}">${listaViajes[w].nombreBuque}</option>`}
        
    }
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
    let nombreBuqueCreado=document.querySelector("#txtNombreBuque").value
    let puertoOrigenNuevo=document.querySelector("#txtPuertoDeOrigenNuevo").value
    let cantMaxContenedores=parseInt(document.querySelector("#txtCapacidadMaxima").value)

    if (nombreBuqueCreado===""){alert("Ingrese Nombre de Buque")}
    else{ if(puertoOrigenNuevo===""){alert("Ingrese Puerto de Origen")}
            else{ if((cantMaxContenedores==="")||(cantMaxContenedores<1)){ alert("Ingrese cantidad de contenedores")}
                else{
                    cargarFecha()
                    let nuevoViaje= new viajes(nombreBuqueCreado,puertoOrigenNuevo,cantMaxContenedores,fecha)
                listaViajes.push(nuevoViaje)
                alert("Viaje cargado correctamente")
                    }
            }
    }
}  

function AsignarViajeBuque(){
    let miSolicitud=parseInt(document.querySelector("#slcSolicitudesPendientes").value);
    let misBuques=parseInt(document.querySelector("#slcBuquesDisponibles").value);

    for(let i in listaSolicitudes){
        if(listaSolicitudes[i].id===miSolicitud){
            for(let w in listaViajes){
                if(listaViajes[w].idViaje===misBuques){
                    let cargaPosible= listaViajes[w].contenedoresDisponibles-listaSolicitudes[i].cantidadContenedores
                    if(cargaPosible>=0){
                        listaSolicitudes[i].idViaje=misBuques
                        listaViajes[w].contenedoresDisponibles=listaViajes[w].contenedoresDisponibles-listaSolicitudes[i].cantidadContenedores
                        listaSolicitudes[i].estadoSolicitud="ACEPTADA"
                        alert("Carga realizada con exito")
                        MenuEmpresaToAsignar()
                    }
                    else{alert("El buque no cuenta con suficiente espacio")}
                }
            }
        }
    }
}

function Rollover(){
    let miSolicitud=parseInt(document.querySelector("#slcSolicitudRollover").value);
    let misBuques=parseInt(document.querySelector("#slcBuquesDisponibles2").value);

    for(let i in listaSolicitudes){
        if(listaSolicitudes[i].id===miSolicitud){
            for(let w in listaViajes){
                let soliAntigua= listaSolicitudes[i].idViaje
                if(listaViajes[w].idViaje===soliAntigua){listaViajes[w].contenedoresDisponibles=listaViajes[w].contenedoresDisponibles+listaSolicitudes[i].cantidadContenedores}}}}

    for(let i in listaSolicitudes){
        if(listaSolicitudes[i].id===miSolicitud){
            for(let w in listaViajes){
                if(listaViajes[w].idViaje===misBuques){
                    let cargaPosible= listaViajes[w].contenedoresDisponibles-listaSolicitudes[i].cantidadContenedores
                    if(cargaPosible>=0){
                        listaSolicitudes[i].idViaje=misBuques
                        listaViajes[w].contenedoresDisponibles=listaViajes[w].contenedoresDisponibles-listaSolicitudes[i].cantidadContenedores
                        listaSolicitudes[i].estadoSolicitud="ACEPTADA"
                        alert("Rollover realizado con exito")
                        MenuEmpresaToRollover()
                    }
                    else{alert("El buque no cuenta con suficiente espacio")}
                }
            }
        }
    }
}

function VerificarCargasPeligrosas(){

}

function PeligrosaToManifiesto(){

}







