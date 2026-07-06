import { useMemo, useState } from "react";
import type { Package } from "../types/Package";

export const usePanelEstados = () =>{
    //Estado para traer los elementos de la lista de guias leyendo el localStorage
    const [listaGuias,setListaGuias]=useState<Package[]>(() => {
       const guiasAlmacenadas = localStorage.getItem("listaGuias");
        return guiasAlmacenadas ? JSON.parse(guiasAlmacenadas) : [];
    }); 

    //Uso useMemo para filtrar las listas automaticamente
    const { Pendiente, EnTransito, Entregado, contadorPaquetesActivos, maxFilas} = useMemo(()=>{
        const p = listaGuias.filter((paquete) => paquete.estadoActual === "Pendiente");
        const t = listaGuias.filter((paquete) => paquete.estadoActual === "EnTransito");
        const e = listaGuias.filter((paquete) => paquete.estadoActual === "Entregado");

        return{
            Pendiente: p,
            EnTransito: t,
            Entregado: e,
            contadorPaquetesActivos: p.length + t.length,
            maxFilas: Math.max(p.length, t.length, e.length)
        };
    },[listaGuias]);

    return{
        Pendiente,
        EnTransito,
        Entregado,
        contadorPaquetesActivos,
        maxFilas
    }
}