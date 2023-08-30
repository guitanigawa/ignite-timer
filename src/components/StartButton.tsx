import { Play } from "react-feather"

import { ButtonContainer, StartButtonTitle } from "../styles/StartButton.styles";


export default function Button(){

    return(
        <ButtonContainer>
            <Play/>
            <StartButtonTitle>
                Começar
            </StartButtonTitle>
        </ButtonContainer>
    )
}