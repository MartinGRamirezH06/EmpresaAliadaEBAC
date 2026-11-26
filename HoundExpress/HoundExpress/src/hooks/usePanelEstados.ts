import { useMemo} from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const usePanelEstados = () =>{
    const listaGuias = useSelector((state: RootState) => state.guides.guides);

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