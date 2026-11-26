import { useEffect, useState } from "react";
import type { Package } from "../types/Package"
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { updatePackage } from "../store/guidesSlice";

export const useListaGuias=()=>{
    const listaGuias = useSelector((state: RootState) => state.guides.guides);
    const dispatch = useDispatch<AppDispatch>();

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
        const paquete = listaGuias.find((p) => p.numGuia === numGuia);
        if(!paquete) return;

        let nuevoEstado = "";
        if(paquete.estadoActual === "Pendiente"){
            nuevoEstado = "EnTransito";
        } else if(paquete.estadoActual === "EnTransito"){
            nuevoEstado = "Entregado";
        }else{
            console.log("El estado del paquete ya no se puede actualizar")
        }
        const fechaHoy = new Date();
        const fechaNueva = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getDate()}`;

        dispatch(updatePackage({
            numGuia,
            estadoActual:nuevoEstado,
            fechaRegistro: fechaNueva,
        }));

    }


    return{
        listaGuias,
        paqueteHistorial,
        abrirHistorial,
        cerrarHistorial,
        actualizarPaquete
    } 

}