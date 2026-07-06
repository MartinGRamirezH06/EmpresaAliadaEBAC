import { useEffect, useState } from "react";
import type { Package } from "../types/Package";

export const useRegistroGuia = () => {
    //Estado para traer los elementos de la lista de guias leyendo el localStorage
    const [listaGuias,setListaGuias]=useState<Package[]>(() => {
        const guiasAlmacenadas = localStorage.getItem("listaGuias");
        return guiasAlmacenadas ? JSON.parse(guiasAlmacenadas) : [];
    });

    //Estados de inicio 
    const [numGuia, setNumGuia] = useState("");
    const [origen, setOrigen] = useState("");
    const [destino,setDestino] = useState("");
    const [fechaRegistro,setFechaRegistro] = useState("");
    const [estadoActual, setEstadoActual] = useState("");

    //funcion que verifica si ya existe esa guia en la lista
    const validacionGuias = (numGuia: number): boolean =>{
        return !listaGuias.some( paquete => paquete.numGuia === numGuia);
    }
    //Funcion para manejar el llenado del formulario
    const handleSubmit=( e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const numGuiaStringInt= parseInt(numGuia);

        //Validacion para verificar que no este vacio el campo
        if(isNaN(numGuiaStringInt)){
            alert("Por favor ingresa un numero de guia");
            return;
        }
        //Validacion de que ya existe el numero de guia en la lista
        if(!validacionGuias(numGuiaStringInt)){
            alert("Este numero de guia ya esta registrada,Por favor ingresa otra")
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
        //Se actualiza la lista crenado una copia del estado anterior de la lista
        //Y añadiendo el nuevo Paquete
        setListaGuias([...listaGuias,nuevoPaquete]);
        //Limpiamos el valor de los inputs
        setNumGuia("");
        setOrigen("");
        setDestino("");
        setFechaRegistro("");
        setEstadoActual("");
    };
    //Se actualiza la lista de localStorage cada que detecta un cambio en listaGuias 
    useEffect(() =>{
            localStorage.setItem("listaGuias",JSON.stringify(listaGuias));
            console.log("Cambio en las guias:" + {listaGuias})
    },[listaGuias])

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