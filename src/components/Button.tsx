import { Pause, Play } from "react-feather";
import { StartButtonContainer, StopButtonContainer } from "../styles/StartButton.styles";
import { Cycle } from "../pages/Home";

interface ButtonProps{
    activeCycle: Cycle | undefined,
    stopCycle: ()=>void
}

export function Button({ activeCycle, stopCycle }: ButtonProps){

    return(
        activeCycle ? (
            <StopButtonContainer
                onClick={stopCycle}
            >
                <Pause/>
                <span>
                    Interromper
                </span>

            </StopButtonContainer>
        ) : (
            <StartButtonContainer 
                type="submit"
            > 
                <Play/>
                <span>
                    Começar    
                </span>                   
            </StartButtonContainer>

        )
    )
}