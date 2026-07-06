import type { ReactNode } from "react"
import { StyledButtonForm }  from "./styles"

interface ButtonFormProps{
    children: ReactNode
}

const ButtonForm = ({children}:ButtonFormProps) => {

    return(
        <>
            <StyledButtonForm
                type="submit">
                    {children}
                </StyledButtonForm>
        </>
    )
}

export default ButtonForm;