import Button from "../../Button/Button";
import { Header__NavBar} from "./styles";

export const HeaderConatiner__NavBar = () =>{
    return(
        
        <Header__NavBar>
            <Button to="/">Inicio</Button>
            <Button to="/registro">Registro de Guias</Button>
            <Button to="/panel-estados">Estado General</Button>
            <Button to="/lista-guias">Lista de Guias</Button>
        </Header__NavBar>
    );
}