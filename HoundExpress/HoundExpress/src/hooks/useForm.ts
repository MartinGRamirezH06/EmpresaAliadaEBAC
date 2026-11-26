import { useEffect, useState } from "react";
import type { Package } from "../types/Package";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addGuide } from "../store/guidesSlice";

export const useRegistroGuia = () => {

    //Estados de inicio 
    const [numGuia, setNumGuia] = useState("");
    const [origen, setOrigen] = useState("");
    const [destino,setDestino] = useState("");
    const [fechaRegistro,setFechaRegistro] = useState("");
    const [estadoActual, setEstadoActual] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const listaGuias = useSelector((state: RootState) => state.guides.guides);

    //Funcion para manejar el llenado del formulario
    const handleSubmit=( e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const numGuiaStringInt= parseInt(numGuia);

        //Validacion para verificar que no este vacio el campo
        if(isNaN(numGuiaStringInt)){
            alert("Por favor ingresa un numero de guia");
            return;
        }

        const existeGuia = listaGuias.some((g) => g.numGuia === numGuiaStringInt);
        if(existeGuia){
            alert(`El número de guia ${numGuiaStringInt} ya esta registrado.`);
            return;
        }

        //Se crea el nuevo Paquete
        const nuevoPaquete: Package={
            numGuia:numGuiaStringInt,
            origen,
            destino,
            fechaRegistro,
            estadoActual,
            historialEstados:[estadoActual,fechaRegistro],
        }
        dispatch(addGuide(nuevoPaquete));
        //Limpiamos el valor de los inputs
        setNumGuia("");
        setOrigen("");
        setDestino("");
        setFechaRegistro("");
        setEstadoActual("");
    };
    return{
        numGuia,
        origen,
        destino,
        fechaRegistro,
        estadoActual,
        setNumGuia,
        setOrigen,
        setDestino,
        setFechaRegistro,
        setEstadoActual,
        handleSubmit
    };
}