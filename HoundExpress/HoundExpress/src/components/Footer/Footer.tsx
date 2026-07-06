import { FooterContainer, ImgRedesContainer } from "./styles"

const Footer=()=>{
    return(
        <>
            <FooterContainer>
                <section>
                    <img src="./src/img/logoAzulBlancoHE.png" alt="Aqui va la imagen del footer"/>
                    <ImgRedesContainer>
                        <a className="redes-img__a--animation" href="https://www.linkedin.com/company/hound-express/"><img src="./src/img/icons8-linkedin-48.png" alt="Aqui va el link de linkedin"/></a>
                        <a className="redes-img__a--animation" href="https://www.facebook.com/houndexpress?mibextid=kFxxJD"><img src="./src/img/icons8-facebook-48.png" alt="Aqui va el link a facebook"/></a>
                        <a className="redes-img__a--animation" href="https://www.instagram.com/hound.express/?igsh=OGQ5ZDc2ODk2ZA%3D%3D"><img src="./src/img/icons8-instagram-48.png" alt="Aqui va el link a instagram"/></a>
                    </ImgRedesContainer>
                </section>
                <section>
                    <p>Somos un equipo de expertos en logística, tecnología y comercio internacional. Te queremos ayudar a llevar tu empresa al siguiente nivel con soluciones de importación, exportación y logística nacional e internacional.</p>
                </section>
                <section>
                    <p>Pagina de donde saque los iconos: </p>
                    <a className="__a--animation" target="_blank" href="https://icons8.com"> Iconos de Icons8</a>
                    <a className="__a--animation" target="_blank" href="https://icons8.com/icon/yGcWL8copNNQ/facebook">Facebook </a>
                    <a className="__a--animation" target="_blank" href="https://icons8.com/icon/32323/instagram">Instagram</a>
                    <a className="__a--animation" target="_blank" href="https://icons8.com/icon/13930/linkedin">LinkedIn</a>  
                </section>
                <section>
                    <h3>Somos</h3>
                    <h3>Hound Express</h3>
                </section>
                <section>
                    <a className="__a--animation" href="inicio.html">Inicio</a>
                    <a className="__a--animation" href="registroGuias.html">Registro de Guias</a>
                    <a className="__a--animation" href="panelEstadoGeneral.html">Estado General</a>
                    <a className="__a--animation" href="listaDeGuias.html">Lista de Guias</a>
                </section>
                <section>
                    <h3>Servicio al Cliente</h3>
                    <p>Lunes a Viernes de 09:00 a 18:00 hrs</p>
                    <p>Sábados de 09:00 a 13:00 hrs</p>   
                </section>
                <section>
                    <h3>Contacto</h3>
                    <h4>MX</h4>
                    <p>+52(55) 4000 1920</p>
                    <p>sclientes1@hound-express.com</p>
                    <h4>EUA</h4>
                    <p>+1(956) 568 3443</p>
                    <p>cslaredo1@hound-express.com</p>
                </section>
                <section>
                    <p>Copyright © 2025 Hound Express. Todos los derechos reservados.</p>
                    <p>Terminos y condiciones</p>
                    <p>Politica de Privacidad</p>
                </section>
            </FooterContainer>
        </>
    )
}
export default Footer;