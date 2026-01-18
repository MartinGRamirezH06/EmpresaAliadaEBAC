//Funcion para obtener la lista del formulario
let verLista;
const obteniendoListaDeLocalStorage=()=>{
    verLista=JSON.parse(localStorage.getItem("listaGuias"));
    console.log(verLista);
}
obteniendoListaDeLocalStorage();
//--------------
//Funcion para renderizar los elementos
function creandoListaVista(){
    const vistaLista=document.getElementById("vistaGuias");
    console.log(vistaLista);
    const tbody=vistaLista.lastElementChild;
    console.log(tbody);
    tbody.innerHTML="";

    verLista.forEach(paquete => {
        const nuevaFila=document.createElement("tr");
        nuevaFila.setAttribute("class","filaPaquete");
        tbody.append(nuevaFila);
        const tdNumeroGuia=document.createElement("td");
        tdNumeroGuia.setAttribute("data-label","Numero de Guia");
        tdNumeroGuia.setAttribute("scope","row");
        tdNumeroGuia.textContent=paquete.numGuia;
        nuevaFila.append(tdNumeroGuia);
        const tdEstado=document.createElement("td");
        tdEstado.setAttribute("data-label","Estado Actual");
        tdEstado.setAttribute("scope","row");
        tdEstado.textContent=paquete.estadoActual;
        nuevaFila.append(tdEstado);
        const tdOrigen=document.createElement("td");
        tdOrigen.setAttribute("data-label","Origen");
        tdOrigen.setAttribute("scope","row");
        tdOrigen.textContent=paquete.origen;
        nuevaFila.append(tdOrigen);
        const tdDestino=document.createElement("td");
        tdDestino.setAttribute("data-label","Destino");
        tdDestino.setAttribute("scope","row");
        tdDestino.textContent=paquete.destino;
        nuevaFila.append(tdDestino);
        const tdUltimaFechaActualizacion=document.createElement("td");
        tdUltimaFechaActualizacion.setAttribute("data-label","Ultima fecha de actualizacion");
        tdUltimaFechaActualizacion.setAttribute("scope","row");
        tdUltimaFechaActualizacion.textContent=paquete.fechaRegistro;
        nuevaFila.append(tdUltimaFechaActualizacion);
        const tdBotones=document.createElement("td");
        tdBotones.setAttribute("class","tdBotones");
        const BotoneActualizar=document.createElement("button");
        BotoneActualizar.textContent="Actualizar Registro";
        BotoneActualizar.setAttribute("class","botonActualizar");
        const BotonHistorialPaquete=document.createElement("button");
        BotonHistorialPaquete.setAttribute("class","botonHistorial");
        BotonHistorialPaquete.textContent="Historial Paquete";
        tdBotones.append(BotoneActualizar);
        tdBotones.append(BotonHistorialPaquete);
        nuevaFila.append(tdBotones);
    });
}
creandoListaVista();
//Funcion para volver a renderizar despues de un cambio
const cambiarDOM=(nuevaLista)=>{
    const vistaLista=document.getElementById("vistaGuias");
    let tbody=vistaLista.lastElementChild;
    tbody.remove();
    tbody=document.createElement("tbody");
    vistaLista.append(tbody);
    nuevaLista=JSON.parse(localStorage.getItem("listaGuias"));
    nuevaLista.forEach(paquete=>{
        const nuevaFila=document.createElement("tr");
        nuevaFila.setAttribute("class","filaPaquete");
        tbody.append(nuevaFila);
        const tdNumeroGuia=document.createElement("td");
        tdNumeroGuia.setAttribute("data-label","Numero de Guia");
        tdNumeroGuia.setAttribute("scope","row");
        tdNumeroGuia.textContent=paquete.numGuia;
        nuevaFila.append(tdNumeroGuia);
        const tdEstado=document.createElement("td");
        tdEstado.setAttribute("data-label","Estado Actual");
        tdEstado.setAttribute("scope","row");
        tdEstado.textContent=paquete.estadoActual;
        nuevaFila.append(tdEstado);
        const tdOrigen=document.createElement("td");
        tdOrigen.setAttribute("data-label","Origen");
        tdOrigen.setAttribute("scope","row");
        tdOrigen.textContent=paquete.origen;
        nuevaFila.append(tdOrigen);
        const tdDestino=document.createElement("td");
        tdDestino.setAttribute("data-label","Destino");
        tdDestino.setAttribute("scope","row");
        tdDestino.textContent=paquete.destino;
        nuevaFila.append(tdDestino);
        const tdUltimaFechaActualizacion=document.createElement("td");
        tdUltimaFechaActualizacion.setAttribute("data-label","Ultima fecha de actualizacion");
        tdUltimaFechaActualizacion.setAttribute("scope","row");
        tdUltimaFechaActualizacion.textContent=paquete.fechaRegistro;
        nuevaFila.append(tdUltimaFechaActualizacion);
        const tdBotones=document.createElement("td");
        tdBotones.setAttribute("class","tdBotones");
        const BotoneActualizar=document.createElement("button");
        BotoneActualizar.textContent="Actualizar Registro";
        BotoneActualizar.setAttribute("class","botonActualizar");
        const BotonHistorialPaquete=document.createElement("button");
        BotonHistorialPaquete.setAttribute("class","botonHistorial");
        BotonHistorialPaquete.textContent="Historial Paquete";
        tdBotones.append(BotoneActualizar);
        tdBotones.append(BotonHistorialPaquete);
        nuevaFila.append(tdBotones);
    });
} 
//--------Funcion para mostrar DOM Historial-----
const mostrarHistorial=()=>{
    const contenedorHistorial=document.querySelector(".main-container4__historial-container");
    contenedorHistorial.classList.add("showHistorial");
}
//------
//--------FUncion para cerrar el historial
const cerrarHistorial=()=>{
    const contenedorHistorial=document.querySelector(".main-container4__historial-container");    
    const iconClose=contenedorHistorial.querySelector(".iconClose");
    iconClose.addEventListener("click",()=>{
        contenedorHistorial.classList.replace("showHistorial","closeHistorial");
        contenedorHistorial.classList.remove("closeHistorial");
    })
}
cerrarHistorial()
//---------------
//FUncion para renderizar historial
function renderHistorial(guiaPaquete){
    //Limpio el DOM
    const contenedorHistorial=document.querySelector(".main-container4__historial-container")
    const articleRegistros=contenedorHistorial.querySelectorAll(".historial-container-Registro");
    articleRegistros.forEach(elementosHTML=>{
        elementosHTML.remove();
    });

    //Busco paquete
    const paqueteEncontrado=verLista.find(paquete=>paquete.numGuia==guiaPaquete);

    console.log(paqueteEncontrado)
    const historial=paqueteEncontrado.historialEstados.slice();
    console.log(historial);

    for(let grupo=0;grupo<historial.length;grupo+=2){
        const articleHistorial=document.createElement("article");
        articleHistorial.setAttribute("class","historial-container-Registro");
        contenedorHistorial.append(articleHistorial);

        const pEstado=document.createElement("p");
        pEstado.textContent=historial[grupo];
        articleHistorial.append(pEstado);
        const pFecha=document.createElement("p");
        pFecha.textContent=historial[grupo+1];
        articleHistorial.append(pFecha);
    }
}
//-------------
//-------Funcion para actualizar DOM Historial------
const cambiarDomHistorial=(guiaPaquete)=>{
    obteniendoListaDeLocalStorage();
    renderHistorial(guiaPaquete);
}