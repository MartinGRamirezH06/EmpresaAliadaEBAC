import { useListaGuias } from "../../hooks/useListaGuias";
import ButtonModfier from "../Button/ButtonModifiers";
import { MainContainer, ContainerListaGuias, ContainerHistorial } from "./styles";

const MainPanelListaGuias = () =>{
    const {
        listaGuias,
        paqueteHistorial,
        abrirHistorial,
        cerrarHistorial,
        actualizarPaquete
    } = useListaGuias(); 
    return(
        <>
            <MainContainer $hasPadding>
                <ContainerListaGuias>
                    <p>Lista de Guias Registradas</p>
                    <table id="vistaGuias">
                        <thead>
                            <tr>
                                <th>Numero de Guia</th>
                                <th>Estado Actual</th>
                                <th>Origen</th>
                                <th>Destino</th>
                                <th>Ultima fecha de actualización</th>
                                <th>Modificadores</th>
                            </tr>
                        </thead>
                        <tbody>
                            { listaGuias.map((paquete) => (
                                <tr key={paquete.numGuia}>
                                    <td data-label="Numero de Guia" scope="row">{paquete.numGuia}</td>
                                    <td data-label="Estado Actual" scope="row">{paquete.estadoActual}</td>     
                                    <td data-label="Origen" scope="row">{paquete.origen}</td>
                                    <td data-label="Destino" scope="row">{paquete.destino}</td>
                                    <td data-label="Ultima fecha de actualizacion" scope="row">{paquete.fechaRegistro}</td>
                                    <td>
                                        <ButtonModfier onClick={()=>actualizarPaquete(paquete.numGuia)}>Actualizar Registro</ButtonModfier>
                                        <ButtonModfier onClick={() => abrirHistorial(paquete.numGuia)}>Historial Paquete</ButtonModfier></td>    
                                </tr>                                
                            ))}
                        </tbody>
                    </table>
                    {paqueteHistorial &&(
                            <ContainerHistorial>
                            <div className="historial-container-cerrar">
                                <i className="iconClose" onClick={cerrarHistorial}><img className="imgClose" src="./src/img/iconClose.png" alt="icono de cerrar"/></i>
                            </div>
                            <div className="historial-container-Titulo">
                                <p className="title">Historial</p>
                            </div>
                            {paqueteHistorial.historialEstados.map((item, index) =>{
                                if(index %2 === 0){
                                    return(
                                        <article key={index} className="historial-container-Registro">
                                            {/* El estado es el indide actual  */}
                                            {/* LA fecha siempre esta por delante del estado */}
                                            <p>{item}</p>
                                            <p>{paqueteHistorial.historialEstados[index + 1]}</p>
                                            
                                        </article>
                                    );
                                }
                                return null;
                            })}
                            </ContainerHistorial>
                    )}                 
                </ContainerListaGuias>

                        
                <section></section>
            </MainContainer>
        </>
    )
}
export default MainPanelListaGuias;