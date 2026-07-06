import type { ReactNode } from "react";
import { ButtonHeader } from "./styles";
import { Link } from "react-router-dom";

interface ButtonProps{
    to: string;
    children: ReactNode
}

const Button =({to, children}: ButtonProps) =>{
    return(
        <>
            <ButtonHeader as={Link} to={to}>
                {children}
            </ButtonHeader>
        </>
    )
}
export default Button;