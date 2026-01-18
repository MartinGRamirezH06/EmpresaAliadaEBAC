
let listaDeGuias=[]
//Aqui valido si la lista ya existe en localStorage, si existe entonces la mando a llamar de su formato JSON 
//Para que no se repita el numero de Guia
if(localStorage.getItem("listaGuias")){
    console.log("Ya existe la lista");
    listaDeGuias=JSON.parse(localStorage.getItem("listaGuias"))
}

class Package{
    constructor(NumeroDeGuia,Origen,Destino,FechaDeRegistro,EstadoActual,Historial){
        this.numGuia=NumeroDeGuia;
        this.origen=Origen;
        this.destino=Destino;
        this.fechaRegistro=FechaDeRegistro;
        this.estadoActual=EstadoActual;
        this.historialEstados=Historial;

    }
    agregarALista(){
        listaDeGuias.push(this);
        listaDeGuias.forEach(element => {
            console.dir(element);
        });


    }
}

const nodoPadreFormulario=document.querySelector(".FormRegistrer");
const formulario=nodoPadreFormulario.firstElementChild;

console.log(formulario);
//Metodo que escucha el submit del formulario
formulario.addEventListener("submit",(respuestasForm)=>{
    respuestasForm.preventDefault();
    controladorCentral();
});
//Funcion para cambiar de tipo de string a numerico el Numero de Guia
const numGUiaStringAInt=(GuiaACambiar)=>{
    let numGuiaInt=parseInt(GuiaACambiar);
    return numGuiaInt;
}
//--------------------------------------------
//Funcion para validar las repeticiones en los numeros de guias
const validacionGuias=(numAValidar)=>{
    let contador=0;
    listaDeGuias.forEach(paquete=>{
        if(numAValidar==paquete.numGuia){
            contador++;
        }
    });
    if(contador>=1){
        return false;
    }else{
        return true;
    }
}
//----------------

//--------------Funcion central------------
function controladorCentral(){
    const numeroGuiaForm=document.getElementById("inputNumGuia");
    const origenFormulario=document.getElementById("inputOrigen");
    const destinoFormulario=document.getElementById("inputDest");
    const fechaRegistroFormulario=document.getElementById("fechaRegistro");
    const estadoActualFormulario=document.getElementById("inputEstadoIncial");
    let validacion=validacionGuias(numGUiaStringAInt(numeroGuiaForm.value));
    if(validacion==false){
        alert("Este numero de guia ya esta registrada, ingresa otra");
    }
    else if(validacion==true){
        const paqueteNuevo=new Package(numGUiaStringAInt(numeroGuiaForm.value),origenFormulario.value,destinoFormulario.value,fechaRegistroFormulario.value,estadoActualFormulario.value,historialPaquete=[]);
        paqueteNuevo.historialEstados.push(paqueteNuevo.estadoActual,paqueteNuevo.fechaRegistro);        
        paqueteNuevo.agregarALista();
        formulario.reset();
        guardarLocalStorage();

    }
}
//---------------------
//-----Funcion para guardar en localStorage
function guardarLocalStorage(){
    if(typeof(Storage!="undefined")){
        //asigno elementos de la lista
        localStorage.setItem("listaGuias",JSON.stringify(listaDeGuias));
        //Recuperar elementos del JSON y verlo en consola 
        let listaAlmacenada=JSON.parse(localStorage.getItem("listaGuias"));
        console.log(listaAlmacenada);
    }else{
        console.log("No es posible guardar en locar storage con este navegador");
    }
}
//---------------------






