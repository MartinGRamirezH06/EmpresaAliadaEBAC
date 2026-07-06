import type { ReactNode } from "react"
import { StyledButtonModifiers }  from "./styles"

interface ButtonModifierProps{
    children: ReactNode
    onClick?:() => void;
}

const ButtonModfier = ({children, onClick}:ButtonModifierProps) => {

    return(
        <>
            <StyledButtonModifiers
                type="submit"
                onClick={onClick}
                >
                    {children}
                </StyledButtonModifiers>
        </>
    )
}

export default ButtonModfier;