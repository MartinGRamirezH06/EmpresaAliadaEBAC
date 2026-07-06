import { usePanelEstados } from "../../hooks/usePanelEstados";
import { MainContainer,ContainerPanelEstados, TableHeader, TableData } from "./styles";


const MainPanelEstados =() =>{
    const { Pendiente, EnTransito, Entregado, contadorPaquetesActivos, maxFilas } = usePanelEstados();
    return(
        <MainContainer $hasPadding>
            <ContainerPanelEstados>
                <h2>Monitoreo de Paquetes</h2>
                <table id="PanelEstados">
                    <thead>
                        <tr>
                            <TableHeader>Pendiente</TableHeader>
                            <TableHeader>En transito</TableHeader>
                            <TableHeader>Entregado</TableHeader>
                            <TableHeader>Guias activas</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: maxFilas }).map((_, index) => (
                            <tr key={index}>
                                <TableData data-label="Pendiente" $estado="Pendiente">
                                    {index < Pendiente.length ? Pendiente[index].numGuia: ""}
                                </TableData>
                                <TableData data-label="EnTransito" $estado="EnTransito">
                                    {index < EnTransito.length ? EnTransito[index].numGuia: ""}
                                </TableData>
                                <TableData data-label="Entregado" $estado="Entregado">
                                    {index < Entregado.length ? Entregado[index].numGuia: ""}
                                </TableData>
                                <TableData data-label="Guias activas" $estado="activas">
                                    {index === 0 ? contadorPaquetesActivos: ""}
                                </TableData>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ContainerPanelEstados>
            <section></section>
        </MainContainer>
    );
}
export default MainPanelEstados