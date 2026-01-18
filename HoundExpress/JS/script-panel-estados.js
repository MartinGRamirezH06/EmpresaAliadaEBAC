//Obteniendo lista de localStorage
let listaDeGuias;
const obtenerLista=()=>{
    listaDeGuias=JSON.parse(localStorage.getItem("listaGuias"));
    return listaDeGuias;
}
obtenerLista();

const listaPaquetesPendientes=[];
const listaPaquetesEnTransito=[];
const listaPaquetesEntregados=[];
const listaDelContador=[]


let contadorPaquetesActivos=0;
//---------Funcion para filtrar paquetes por estados------------------
function filtarEstados(listaAFiltrar){
    listaAFiltrar=listaDeGuias.slice()
    listaAFiltrar.forEach(paquete => {
        if(paquete.estadoActual==="Pendiente"){
            contadorPaquetesActivos++;
            listaPaquetesPendientes.push(paquete);
            console.log(listaPaquetesPendientes);
            console.log(contadorPaquetesActivos);
        }else if(paquete.estadoActual==="En Transito"){
            contadorPaquetesActivos++;
            listaPaquetesEnTransito.push(paquete);
            console.log(listaPaquetesEnTransito);
            console.log(contadorPaquetesActivos);
        }else if(paquete.estadoActual==="Entregado"){
            listaPaquetesEntregados.push(paquete);
            console.log(listaPaquetesEntregados);
        }
    });
    
    listaDelContador.push(contadorPaquetesActivos);
    return listaDelContador;
}
filtarEstados();
//----------------------------------

//Funcion para renderizar en vista------

function mostrarEnVista(){
    const tablaPanel=document.getElementById("PanelEstados");
    if(!tablaPanel)return;
    const bodyTable=tablaPanel.lastElementChild;
    bodyTable.innerHTML="";
    
//Obtendo la lista con mayor numero de elemento para crear las filas
    const obtenerFilas=Math.max(listaPaquetesPendientes.length,listaPaquetesEnTransito.length,listaPaquetesEntregados.length);
    let nuevaFila;
    for(let item=0;item<obtenerFilas;item++){
        //Crea la contidad de filas
        nuevaFila=document.createElement("tr");
        bodyTable.append(nuevaFila);
        const tdPaquete=document.createElement("td");
        tdPaquete.setAttribute("data-label","Pendiente");
        tdPaquete.classList.add("showPendiente");
        if(item<listaPaquetesPendientes.length){    
            tdPaquete.textContent=listaPaquetesPendientes[item].numGuia;
        }
        nuevaFila.append(tdPaquete);
        const tdPaqueteEnTransito=document.createElement("td");
        tdPaqueteEnTransito.setAttribute("data-label","En transito");
        tdPaqueteEnTransito.classList.add("showEnTransito");
        if(item<listaPaquetesEnTransito.length){
            tdPaqueteEnTransito.textContent=listaPaquetesEnTransito[item].numGuia;
        }
        nuevaFila.append(tdPaqueteEnTransito);
        const tdPaqueteEntregado=document.createElement("td");
        tdPaqueteEntregado.setAttribute("data-label","Entregado");
        tdPaqueteEntregado.classList.add("showEntregado");
        if(item<listaPaquetesEntregados.length){
            tdPaqueteEntregado.textContent=listaPaquetesEntregados[item].numGuia;
        }
        nuevaFila.append(tdPaqueteEntregado);
    }
    const primeraFila=bodyTable.firstElementChild;
    console.log(primeraFila)
    const tdNumGuiasActivas=document.createElement("td");
    tdNumGuiasActivas.setAttribute("data-label","Guias activas");
    tdNumGuiasActivas.textContent=contadorPaquetesActivos;
    primeraFila.append(tdNumGuiasActivas);
    
    
}
mostrarEnVista();
//-----------
//FUncion para actualizar con cada actualizacion
const actualizarDomEstadoGeneral=()=>{
    obtenerLista();
    listaPaquetesPendientes.splice(0,listaPaquetesPendientes.length);
    listaPaquetesEnTransito.splice(0,listaPaquetesEnTransito.length);
    listaPaquetesEntregados.splice(0,listaPaquetesEntregados.length);
    listaDelContador.splice(0,listaDelContador.length);
    contadorPaquetesActivos=0;
    filtarEstados(listaDeGuias);
    mostrarEnVista();
}
