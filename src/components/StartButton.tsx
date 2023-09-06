import { Play } from "react-feather"

import { ButtonContainer, StartButtonTitle } from "../styles/StartButton.styles";

interface ButtonProps{
    disabled: boolean
}

export default function Button({ disabled }: ButtonProps){

    return(
        <ButtonContainer disabled={disabled} type="submit">
            <Play/> 
            <StartButtonTitle>
                Começar
            </StartButtonTitle>
        </ButtonContainer>
    )
}