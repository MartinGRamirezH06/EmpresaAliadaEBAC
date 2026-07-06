import { useEffect, useState } from "react";
import type { Package } from "../types/Package"

export const useListaGuias=()=>{
    const [listaGuias,setListaGuias] = useState<Package[]>(() => {
        const guiasAlmacenadas= localStorage.getItem("listaGuias");
        return guiasAlmacenadas ? JSON.parse(guiasAlmacenadas):[];
    });

    const [paqueteHistorial, setPaqueteHistorial] = useState<Package | null>(null); 

    const abrirHistorial = (numGuia: number) => {
        console.log("Entrando a la funcion de abrirHistorial: ")
        const encontrado = listaGuias.find( p => p.numGuia === numGuia);
        if(encontrado){
            setPaqueteHistorial(encontrado);
            console.log("Mostrar historial del paquete enconstrado: ", encontrado)
        }
    }
    
    const cerrarHistorial = () =>{
        setPaqueteHistorial(null);
    }

    const actualizarPaquete = (numGuia: number) =>{
        const fechaDia = new Date().getDate();
        const fechaMes = new Date().getMonth() + 1;
        const fechaAño = new Date().getFullYear();
        const fechaNueva = `${fechaAño}-${fechaMes}-${fechaDia}`;
        setListaGuias( listaAnterior => {
            return listaAnterior.map( paquete => {
                if(paquete.numGuia === numGuia){
                    if(paquete.estadoActual === "Pendiente"){
                        console.log("Cambio el estado del paquete de Pendiente a En transito");
                        return{
                            ...paquete,
                            estadoActual: "EnTransito",
                            fechaRegistro: fechaNueva,
                            historialEstados: [...paquete.historialEstados,"EnTransito",fechaNueva] 
                        };
                    }else if(paquete.estadoActual === "EnTransito"){
                        console.log("Cambio el estado del En Transito");
                        return{
                            ...paquete,
                            estadoActual:"Entregado",
                            fechaRegistro:fechaNueva,
                            historialEstados:[...paquete.historialEstados,"Entregado",fechaNueva]
                        };
                    }else{
                        console.log("El estado del paquete ya no se puede actualizar");
                        return paquete;
                    }
                }
                return paquete;
            });

        })
    }
    useEffect(() => {
        localStorage.setItem("listaGuias", JSON.stringify(listaGuias));
    
    },[listaGuias]);


    return{
        listaGuias,
        paqueteHistorial,
        abrirHistorial,
        cerrarHistorial,
        actualizarPaquete
    } 

}