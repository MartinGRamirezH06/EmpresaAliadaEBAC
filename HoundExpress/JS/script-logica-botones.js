let listaGuias;
let valorNumGuia;
listaGuias=JSON.parse(localStorage.getItem("listaGuias"));
console.log(listaGuias);
//Logica que escucha los botones
const logicaBotones=()=>{
    const tabla=document.getElementById("vistaGuias");
    if (!tabla) return;
    tabla.addEventListener("click",(evento)=>{
        if(evento.target.className.includes("botonActualizar")){
            buscarGuia(evento.target);
            cambiarEstado(valorNumGuia);
            guardandoEnLocalStorage();
            cambiarDOM(listaGuias);
            cambiarDomHistorial(valorNumGuia);
            actualizarDomEstadoGeneral();
        }
        if(evento.target.className.includes("botonHistorial")){
            console.log("Se presiono boton Historial");
            buscarGuia(evento.target);
            mostrarHistorial();
            renderHistorial(valorNumGuia);
        }
    })
}
//------------------
//Funcion para buscar el paquete a actualizar
const buscarGuia=(botonAEschuchar)=>{
    const fila=botonAEschuchar.closest(".filaPaquete");
    console.log(fila);
    const NumGuia=fila.firstElementChild;
    valorNumGuia=NumGuia.textContent;
    valorNumGuia=parseInt(valorNumGuia);
    console.log(valorNumGuia);
    return valorNumGuia;
}
//-------------------------
//Funcion para de estado 
const cambiarEstado=(numeroGuia)=>{
    const fechaNueva=new Date;
    listaGuias.forEach(paquete=>{
        if(paquete.numGuia===numeroGuia){
            if(paquete.estadoActual=="Pendiente"){
                paquete.estadoActual="En Transito";
                console.log("Cambio el estado del paquete de Pendiente a En transito");
                paquete.fechaRegistro=fechaNueva.toLocaleDateString();
                paquete.historialEstados.push(paquete.estadoActual,paquete.fechaRegistro); 
            }else if(paquete.estadoActual=="En Transito"){
                paquete.estadoActual="Entregado";
                paquete.fechaRegistro=fechaNueva.toLocaleDateString();
                paquete.historialEstados.push(paquete.estadoActual,paquete.fechaRegistro);
                console.log("Cambio el estado del paquete de En transito a Entregado");
            }else{
                console.log("El estado del paquete ya no se puede modificar");
            }

        }    
    });
}
//Funcion para que se guarde en localStorage
const guardandoEnLocalStorage=()=>{
    localStorage.setItem("listaGuias",JSON.stringify(listaGuias));
    let listaAlmacenada=JSON.parse(localStorage.getItem("listaGuias"));
    console.log(listaAlmacenada);
}
//------------------




logicaBotones();
