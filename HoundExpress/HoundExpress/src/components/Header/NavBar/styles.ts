import styled from "styled-components";
import { breakpoints } from "../../../Theme/Mixins";

export const Header__NavBar = styled.nav`
    width: 100%;
    display: flex;
    background-color:${({theme}) => theme.colors.primary};
    justify-content: space-between;
    padding: 0.5rem 1rem;
    gap:2.5rem;
    align-items: center;

    @media(max-width: ${breakpoints.phones}){
        gap:1rem;
    }
`;