import { Pause, Play } from "react-feather";
import { StartButtonContainer, StopButtonContainer } from "../styles/StartButton.styles";
import { useCycles } from "../hooks/useCycles";

export default function Button(){

    const { activeCycle, stopCycle } = useCycles()

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