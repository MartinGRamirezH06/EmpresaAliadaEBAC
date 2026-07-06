import { useRegistroGuia } from "../../hooks/useForm";
import ButtonForm from "../Button/ButtonForm";
import { ContainerFormImg, FormRegistro, MainContainer } from "./styles"



const MainRegistros =() =>{
    const{
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
    
    }=useRegistroGuia();
    return(
        <>
            <MainContainer>
                <ContainerFormImg>
                        <FormRegistro onSubmit={handleSubmit}>
                            <div>    
                                <h2>Registra tu paquete</h2>
                            </div>
                            <div>    
                                <label htmlFor="inputNumGuia">Ingresa tu numero de guia:</label>
                                <input 
                                    type="number" 
                                    id="inputNumGuia" 
                                    value={numGuia.trim()}
                                    onChange={(e) =>setNumGuia(e.target.value)}
                                    required 
                                    maxLength={20}
                                    />
                            </div>
                            <div>
                                <label htmlFor="inputOrigen">Origen:</label>
                                <input 
                                    type="text" 
                                    id="inputOrigen" 
                                    value={origen.trim()}
                                    onChange={(e) => setOrigen(e.target.value)}
                                    required 
                                    maxLength={100}
                                    />
                            </div>
                            <div>
                                <label htmlFor="inputDest">Destino:</label>
                                <input 
                                    type="text" 
                                    id="inputDest"
                                    value={destino.trim()}
                                    onChange={(e) => setDestino(e.target.value)} 
                                    required 
                                    maxLength={200}
                                    />
                            </div>
                            <div>
                                <label htmlFor="fechaRegistro">Fecha del registro:</label>
                                <input 
                                    type="date" 
                                    id="fechaRegistro"
                                    value={fechaRegistro.trim()}
                                    onChange={(e) => setFechaRegistro(e.target.value)}
                                    required 
                                    maxLength={10}
                                    />
                            </div>
                            <div>
                                <label htmlFor="inputEstadoIncial">Estado Inicial del paquete:</label>
                                <select 
                                    name="SeleccionarEstado" 
                                    id="inputEstadoIncial"
                                    value={estadoActual.trim()}
                                    onChange={(e) => setEstadoActual(e.target.value)}
                                    required
                                    >
                                        <option value=""></option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="EnTransito">En Transito</option>
                                        <option value="Entregado">Entregado</option>
                                </select>
                            </div>
                            <div>
                                <ButtonForm>Registrar</ButtonForm>
                            </div>
                        </FormRegistro>
                    <article></article>
                </ContainerFormImg>
            </MainContainer>
        </>
    )
}
export default MainRegistros;