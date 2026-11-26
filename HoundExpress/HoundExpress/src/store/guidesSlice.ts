import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Package } from "../types/Package";


interface guidesState{
    guides: Package[]
}


export const cargarGuias =(): Package[] => {
    const guiasEnLocalStorage = localStorage.getItem("listaGuias");
    return guiasEnLocalStorage ? JSON.parse(guiasEnLocalStorage) : [];
}

const initialState: guidesState = {
    guides: cargarGuias(),
}

export const guidesSlice = createSlice({
    name: "guides",
    initialState,
    reducers:{
        addGuide:(state, action: PayloadAction<Package>) =>{
            const guideExist = state.guides.some(
                guide => String(guide.numGuia) === String(action.payload.numGuia)
            )

            if(!guideExist){
                state.guides.push(action.payload);
                localStorage.setItem("listaGuias", JSON.stringify(state.guides));
            }
        },
        updatePackage:(state, action: PayloadAction<{numGuia:number, estadoActual:string, fechaRegistro: string}>)=>{
            const paqueteEncontrado = state.guides.find(
                (guide) => String(guide.numGuia) === String(action.payload.numGuia)
            );

            if(paqueteEncontrado){
                paqueteEncontrado.estadoActual = action.payload.estadoActual;
                paqueteEncontrado.fechaRegistro = action.payload.fechaRegistro;
                paqueteEncontrado.historialEstados.push(
                    action.payload.estadoActual,
                    action.payload.fechaRegistro
                );
                localStorage.setItem("listaGuias", JSON.stringify(state.guides));
            }
        }
    }
});

export const { addGuide, updatePackage} = guidesSlice.actions;
const { reducer: guideReducers} = guidesSlice;
export default guideReducers;