import { HeaderContainer, HeaderContainer__NumbersContainer, HeaderContainer__Select, HeaderContainer__row2 } from "./styles"
import { HeaderConatiner__NavBar } from "./NavBar/Header__NavBar";

const Header = () => {
    return(
        <>
            <HeaderContainer>
                <div>
                    <img src="./src/img/logo-Hound_Express-bg-white.png" alt="Aqui va la imagen del logo"/>
                </div>
                <HeaderContainer__NumbersContainer>
                    <h2>Mexico:</h2>
                    <a href="+52(55) 4000 1920">+52(55) 4000 1920</a>
                </HeaderContainer__NumbersContainer>
                <HeaderContainer__NumbersContainer>
                    <h2>United States:</h2>
                    <a href="+1(95) 6568 3443">+1(95) 6568 3443</a>
                </HeaderContainer__NumbersContainer>
                <div>
                    <label><h2>Idioma</h2></label>
                    <HeaderContainer__Select name="SelectLenguage" id="Lenguage">
                        <option value=""></option>
                        <option value="Esp">Español</option>
                        <option value="Eng">Ingles</option>
                        <option value="Fr">Frances</option>
                    </HeaderContainer__Select>
                </div>
                <div>
                    <h3>Administrador</h3>
                </div>
                <HeaderContainer__row2>
                    <HeaderConatiner__NavBar/>
                </HeaderContainer__row2>
            </HeaderContainer>
        </>
    )    
}

export default Header;